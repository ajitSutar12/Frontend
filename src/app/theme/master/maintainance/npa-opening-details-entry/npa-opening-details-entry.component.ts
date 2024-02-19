import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HttpClient } from '@angular/common/http'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { Subject } from "rxjs";
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-npa-opening-details-entry',
  templateUrl: './npa-opening-details-entry.component.html',
  styleUrls: ['./npa-opening-details-entry.component.scss']
})

export class NpaOpeningDetailsEntryComponent implements OnInit, AfterViewInit, OnDestroy {
  //api
  url = environment.base_url;
  formSubmitted = false;

  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;

  npaOpeningForm: FormGroup;

  showButton: boolean = true;
  updateShow: boolean = false;


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  //dropdown ngmodel variables

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  scheme
  ngBranchCode: any = null
  branch_code
  ToAC
  fromAC
  getschemename
  showTable: boolean = false
  mem
  arrTable: any;
  npaEntryArray = []
  gridData: any;
  Code: any;
  filtername: any;
  modalClass: string = 'modalHide';
  constructor(private fb: FormBuilder, private http: HttpClient,
    private _npaService: NpaOpeningDetailsEntryService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang); }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      console.log(data);

      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = allscheme;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.npaOpeningForm.controls['BRANCH'].enable()
    }
    else {
      this.npaOpeningForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }
  createForm() {
    this.npaOpeningForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]]
    });
  }
  getBranch() {
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.npaEntryArray = []
  }
  //get account no according scheme
  getAccountList(event) {
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    this.npaEntryArray = []
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (event.name) {
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })

        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
    }
    this.getschemename = event.name
  }
  getTable() {
    this.arrTable = []
    this.npaEntryArray = []
    var memFrom = this.npaOpeningForm.controls['FROM_AC'].value
    var memTo = this.npaOpeningForm.controls['TO_AC'].value
    if (this.npaOpeningForm.controls['FROM_AC'].value <= this.npaOpeningForm.controls['TO_AC'].value) {
      this.showTable = true
      this.modalClass = 'modalShow';
      this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename]
      this.http.get(this.url + '/term-loan-master/npaopening/' + this.mem).subscribe((data) => {
        this.arrTable = data;
        this.gridData = data;
        this.modalClass = 'modalHide';
      });
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Account_Number')}`);
      this.npaOpeningForm.patchValue({
        TO_AC: ''
      })
      this.arrTable = []
      this.npaEntryArray = []
    }
  }

  //filter object
  filterObject(ele, type) {
    let matchArray = new Array()
    this.arrTable = [];
    this.gridData.forEach(element => {
      if (type == 'AC_NAME') {
        if (JSON.stringify(element.AC_NAME).includes(ele.target.value.toUpperCase())) {
          this.arrTable.push(element);
        }
      } else {
        if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
          this.arrTable.push(element);
        }
      }

    });
  }


  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }
  //push receipt no into object
  getLastTranDate(id, acno, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
    if (AC_ACTDATE != '' || AC_ACTDATE != 'Invalid date') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['AC_ACTDATE'] = AC_ACTDATE
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
  }

  //push amount in npaEntryArray array
  getPostedInterest(id, acno, OP_POSTED_INT, AC_ACTDATE, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
    if (OP_POSTED_INT != '') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['OP_POSTED_INT'] = OP_POSTED_INT
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
  }

  getDepositAmount(id, acno, AC_OP_TOTAL_DEPOSITAMT, AC_ACTDATE, OP_POSTED_INT, IS_DISPUTE_LOAN) {

    if (AC_OP_TOTAL_DEPOSITAMT != '') {
      if (this.npaEntryArray.length != 0) {
        if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
          this.npaEntryArray.forEach((element) => {
            if (element.AC_NO == acno) {
              element['AC_OP_TOTAL_DEPOSITAMT'] = AC_OP_TOTAL_DEPOSITAMT
            }
          })
        }
        else {
          var object = {
            AC_ACTDATE: AC_ACTDATE,
            AC_NO: acno,
            id: id,
            OP_POSTED_INT: OP_POSTED_INT,
            AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
            IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
          }
          this.npaEntryArray.push(object)
        }
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
        }
        this.npaEntryArray.push(object)
      }
    }
  }

  checkDisputeFlag(id, acno, flag, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT) {

    let isDispute: boolean = false
    if (flag.target.checked) {
      isDispute = true
    }
    else {
      isDispute = false
    }

    if (this.npaEntryArray.length != 0) {
      if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
        this.npaEntryArray.forEach((element) => {
          if (element.AC_NO == acno) {
            element['IS_DISPUTE_LOAN'] = isDispute
          }
        })
      }
      else {
        var object = {
          AC_ACTDATE: AC_ACTDATE,
          AC_NO: acno,
          id: id,
          OP_POSTED_INT: OP_POSTED_INT,
          AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
          IS_DISPUTE_LOAN: isDispute
        }
        this.npaEntryArray.push(object)
      }
    }
    else {
      var object = {
        AC_ACTDATE: AC_ACTDATE,
        AC_NO: acno,
        id: id,
        OP_POSTED_INT: OP_POSTED_INT,
        AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
        IS_DISPUTE_LOAN: isDispute
      }
      this.npaEntryArray.push(object)
    }
  }

  submit() {
    let dataObj = this.npaOpeningForm.value;
    dataObj['gridData'] = this.arrTable;

    if (this.npaEntryArray.length != 0) {
      const dataToSend = {
        'npaEntryArray': this.npaEntryArray
      };
      this._npaService.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`);

        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
      this.arrTable = []
      this.npaEntryArray = []
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Fill')}`);
    }
  }

  resetForm() {
    this.createForm()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.ngBranchCode = null
    this.arrTable = []
    this.npaEntryArray = []
  }
  //function for edit button clicked
  editClickHandler(info: any): void {
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text: `${this.translate.instant('Swal_Msg.A/c_no_data')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Delete')}`, `${this.translate.instant('Swal_Msg.D_Msg')}`,'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,'error'
        )
      }
    })
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('#npaopeningdetailstable tfoot tr').appendTo('#npaopeningdetailstable thead');
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
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

}
