import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
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

export class NotingChargesComponent implements OnInit {
  //api 
  url = environment.base_url;
  formSubmitted = false;
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

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

  maxDate: Date;
  minDate: Date;
  notingdate: any = null

  // Data table
  notingcharges: NotingCharges[];
  ngBranchCode: any = null

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
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
  constructor(private fb: FormBuilder, private systemParameter: SystemMasterParametersService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private acMasterDropdownService: ACMasterDropdownService,
    private http: HttpClient,) {

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
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
  }
  glAcno
  chargesType
  ngglacno: any = null
  acMaster

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
      TRAN_DRCR: ['D']

    });
  }

  getBranch() {
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
  showTable: boolean = false
  mem
  getTable() {
    this.arrTable = []
    this.notingChargesArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
      this.showTable = true
      this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename]
      this.http.get(this.url + '/noting-charges/accounts/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        console.log(this.arrTable)


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
        console.log(this.notingChargesArr)
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

  getCommanChargeAmount() {
    this.notingChargesArr.forEach(item => item.TRAN_AMOUNT = this.angForm.controls['TRAN_AMOUNT'].value);
  }
  getCommanNarration() {
    this.notingChargesArr.forEach(item => item.NARRATION = this.angForm.controls['AMOUNT_TYPE'].value);
  }

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
    console.log(this.notingChargesArr)
  }

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
    console.log(this.notingChargesArr)
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  submit() {
    let notingdate
    this.formSubmitted = true;
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        Scheme: formVal.Scheme,
        FROM_AC: formVal.FROM_AC,
        TO_AC: formVal.TO_AC,
        Date: formVal.Date,
        chargestype: formVal.chargestype,
        transeferglaccno: formVal.transeferglaccno,
        ChargesAmount: formVal.ChargesAmount,

      };


      console.log(this.angForm.value);
    }
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

  ngAfterViewInit(): void {

    this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('#notingtable tfoot tr').appendTo('#notingtable thead');
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (this['value'] != '') {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       } else {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });
  }

  updateData() {
    let notingdate
    this.showButton = true;
    this.updateShow = false;
  }
}
