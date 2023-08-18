import { Component, OnInit, ElementRef, ViewChild, OnDestroy, } from '@angular/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import * as moment from 'moment';
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from "../../../../shared/dropdownService/ac-master-dropdown.service";
import { NotingChargesService } from './noting-charges.service'
import { NgSelectComponent } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface NotingCharges {
  id: number;
  TRAN_DATE: string;
  TRAN_ACNOTYPE: string;
  TRAN_ACTYPE: number;
  TRAN_ACNO: number;
  TRAN_DRCR: string;
  AMOUNT_TYPE: string;
  TRAN_AMOUNT: number;
  OTHER1_AMOUNT: number;
  OTHER2_AMOUNT: number;
  OTHER3_AMOUNT: number;
  OTHER4_AMOUNT: number;
  OTHER5_AMOUNT: number;
  OTHER6_AMOUNT: number;
  OTHER7_AMOUNT: number;
  OTHER8_AMOUNT: number;
  OTHER9_AMOUNT: number;
  OTHER10_AMOUNT: number;
  TRAN_STATUS: string;
  NARRATION: string;
  GL_ENTRY: number;
}

@Component({
  selector: 'app-noting-charges',
  templateUrl: './noting-charges.component.html',
  styleUrls: ['./noting-charges.component.scss']
})

export class NotingChargesComponent implements OnInit, OnDestroy {
  //api 
  url = environment.base_url;
  formSubmitted = false;
  angForm: FormGroup;
  modalClass: string = 'modalHide';
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();

  // dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isAddinprinciple: boolean = false;
  isCreateglentry: boolean = false;
  isDebit: boolean = false;
  // isiscreateglentry: boolean = false;
  // dropdown ngmodel variables
  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  ngchargestype: any = null
  ngtransferglacno: any = null

  maxDate: any;
  minDate: Date;
  notingdate: any = null

  // Data table
  notingcharges: NotingCharges[];
  ngBranchCode: any = null

  // For reloading angular datatable after CRUD operation
  // @ViewChild(DataTableDirective, { static: false })
  // dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  page: number;
  filterData = {};

  scheme
  fromAC
  toAC
  branch_code
  arrTable
  notingChargesArr
  obj
  getschemename
  glAcno
  chargesType
  ngglacno: any = null
  acMaster
  showTable: boolean = false
  mem
  S_GLACNO
  FIELD_GL
  GL_CODE
  FIELD_AMOUNT
  DESCRIPTION
  filterArray: any[];
  gridData: any;

  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private acMasterDropdownService: ACMasterDropdownService,
    private _service: NotingChargesService,
    private http: HttpClient,) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate()
    this.http.get(this.url + '/noting-charges/scheme').subscribe((data) => {
      this.scheme = data
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe((data) => {
      this.acMaster = data;
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  createForm() {
    this.angForm = this.fb.group({
      Scheme: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      AMOUNT_TYPE: ['', [Validators.required]],
      transeferglaccno: ['',],
      BRANCH: ['', [Validators.required]],
      TRAN_DATE: [''],
      TRAN_AMOUNT: ['', [Validators.pattern]],
      addInPrinciple: [false],
      TRAN_DRCR: ['D', [Validators.required]],
      GL_ENTRY: [false]

    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.angForm.patchValue({
        'BRANCH': result.branch.id
      })
      this.ngBranchCode = result.branch.id
    }
  }
  branchCode
  branchid

  getBranch(event) {
    this.branchCode = event.name
    this.branchid = event.value
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.notingChargesArr = []
  }

  //get scheme value and type
  schemechange(event) {
    this.getschemename = event.S_ACNOTYPE
    this.ngscheme = event.id
    this.getSchemeAccount()
  }

  //get account no according scheme for introducer
  getSchemeAccount() {
    this.obj = [this.ngscheme, this.ngBranchCode]
    this.ngfromac = null
    this.ngtoac = null
    this.ngchargestype = null
    this.http.get(this.url + '/noting-charges/headType/' + this.getschemename).subscribe((data) => {
      this.chargesType = data
    })

    switch (this.getschemename) {
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data
          this.toAC = data
        })
        break;
    }
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
    })
  }
  //load table based on from and to account number
  getTable() {
    this.arrTable = []
    this.notingChargesArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value <= this.angForm.controls['TO_AC'].value && this.angForm.controls['TO_AC'].value != '') {
      this.showTable = true
      this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename]
      this.dtTrigger.unsubscribe();
      this.http.get(this.url + '/noting-charges/glacno/' + this.ngscheme).subscribe((data) => {
        this.S_GLACNO = data
      })
      this.http.get(this.url + '/noting-charges/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        this.gridData = data;
        this.arrTable.forEach(element => {
          var object = {
            AC_NO: element.AC_NO,
            AC_NAME: element.AC_NAME,
            id: element.id,
            BANKACNO: element.BANKACNO == undefined || element.BANKACNO == null ? '' : element.BANKACNO,
            TRAN_AMOUNT: '',
            NARRATION: ''
          }
          this.notingChargesArr.push(object)

        });
        this.dtTrigger.next();
      });
    }
    else {
      Swal.fire("To Account Number Must Be Greater Than From Account Number");
      this.angForm.patchValue({
        TO_AC: ''
      })
      this.arrTable = []
      this.notingChargesArr = []

    }
  }
  //filter object
  filterObject(ele, type) {
    let matchArray = new Array()
    this.notingChargesArr = [];
    this.gridData.forEach(element => {
      if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
        this.notingChargesArr.push(element);
      }
      else if (JSON.stringify(element.AC_NAME).includes(ele.target.value.toUpperCase())) {
        this.notingChargesArr.push(element);
      }
    });
  }
  //get charge amount to all account number
  getCommanChargeAmount() {
    this.notingChargesArr.forEach(item => item.TRAN_AMOUNT = this.angForm.controls['TRAN_AMOUNT'].value);
  }
  //get narration to all account number
  getCommanNarration(event) {
    this.FIELD_GL = event.FIELD_GL
    this.GL_CODE = event.GL_CODE
    this.FIELD_AMOUNT = event.FIELD_AMOUNT
    this.DESCRIPTION = event.DESCRIPTION
    this.notingChargesArr.forEach(item => item.NARRATION = event.DESCRIPTION);
  }

  //get charge amount to particular account number
  getChargesAmount(id, AC_NO, BANKACNO, chargesAmt, Narration) {
    if (chargesAmt != '' || chargesAmt != 0) {
      if (this.notingChargesArr.length != 0) {
        if (this.notingChargesArr.some(item => item.AC_NO === AC_NO)) {
          this.notingChargesArr.forEach((element) => {
            if (element.AC_NO == AC_NO) {
              element['TRAN_AMOUNT'] = chargesAmt
            }
          })
        }
        else {
          var object = {
            AC_NO: AC_NO,
            id: id,
            BANKACNO: BANKACNO,
            TRAN_AMOUNT: chargesAmt,
            NARRATION: Narration
          }
          this.notingChargesArr.push(object)
        }
      }
      else {
        var object = {
          AC_NO: AC_NO,
          id: id,
          BANKACNO: BANKACNO,
          TRAN_AMOUNT: chargesAmt,
          NARRATION: Narration
        }
        this.notingChargesArr.push(object)
      }
    }
  }
  //get narration to particular account number
  getNarration(id, AC_NO, BANKACNO, Narration, chargesAmt) {
    if (Narration != '') {
      if (this.notingChargesArr.length != 0) {
        if (this.notingChargesArr.some(item => item.AC_NO === AC_NO)) {
          this.notingChargesArr.forEach((element) => {
            if (element.AC_NO == AC_NO) {
              element['NARRATION'] = Narration
            }
          })
        }
        else {
          var object = {
            AC_NO: AC_NO,
            id: id,
            BANKACNO: BANKACNO,
            TRAN_AMOUNT: chargesAmt,
            NARRATION: Narration
          }
          this.notingChargesArr.push(object)
        }
      }
      else {
        var object = {
          AC_NO: AC_NO,
          id: id,
          BANKACNO: BANKACNO,
          TRAN_AMOUNT: chargesAmt,
          NARRATION: Narration
        }
        this.notingChargesArr.push(object)
      }
    }
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  submit() {
    let notingdate
    this.formSubmitted = true;
    if (this.notingChargesArr.length != 0) {
      const formVal = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      const dataToSend = {
        TRAN_DATE: formVal.TRAN_DATE,
        USER: result.id,
        TRAN_GLACNO: this.ngglacno,
        notingChargesArr: this.notingChargesArr,
        TRAN_AMOUNT: formVal.TRAN_AMOUNT,
        TRAN_ACNOTYPE: this.getschemename,
        TRAN_ACTYPE: this.ngscheme,
        TRAN_DRCR: formVal.TRAN_DRCR,
        GL_ENTRY: formVal.GL_ENTRY,
        BRANCH_CODE: this.branchCode,
        addInPrinciple: formVal.addInPrinciple,
        AMOUNT_TYPE: this.ngchargestype,
        BranchID: this.branchid,
        S_GLACNO: this.S_GLACNO,
        FIELD_GL: this.FIELD_GL,
        GL_CODE: this.GL_CODE,
        FIELD_AMOUNT: this.FIELD_AMOUNT,
        DESCRIPTION: this.DESCRIPTION

      };
      this._service.postData(dataToSend).subscribe(data => {
        this.formSubmitted = false;
        if (data == '') {
          this.modalClass = 'modalShow';
          dataToSend['DailyFlag'] = 'Insert'
          this._service.dailyTableInsert(dataToSend).subscribe(data => {
            this.modalClass = 'modalHide';
            Swal.fire('Success!', 'Data Added Successfully !', 'success');
          })
        }
        else {
          this.modalClass = 'modalHide';
          Swal.fire({
            text: "Today's Charges Posting Already Done.Do You Want To Overwrite?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#229954",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Overwrite it!",
          }).then((result) => {
            if (result.isConfirmed) {
              this.modalClass = 'modalShow';
              dataToSend['DailyFlag'] = 'Overwrite'
              this._service.dailyTableInsert(dataToSend).subscribe((data) => {
                this.modalClass = 'modalHide';
                Swal.fire("Overwritten!", "success");
              }),
                (error) => {
                  console.log(error);
                };
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              dataToSend['DailyFlag'] = 'Insert'
              this._service.dailyTableInsert(dataToSend).subscribe(data => {
              })
            }
          });
        }
      }, (error) => {
        console.log(error)
      })
      //To clear form
      this.resetForm();
      this.notingChargesArr = []
      this.arrTable = []
    }
  }

  resetForm() {
    this.ngscheme = null
    this.ngchargestype = null
    this.ngBranchCode = null
    this.ngfromac = null
    this.ngtoac = null
    this.ngglacno = null
    this.notingChargesArr = []
    this.arrTable = []
    this.getSystemParaDate()
    this.createForm()

  }
  //function for edit button clicked
  editClickHandler(info: any): void {
    let notingdate
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme Code.  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }


  updateData() {
    let notingdate
    this.showButton = true;
    this.updateShow = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
}
