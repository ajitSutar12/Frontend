import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { SavingMasterComponent } from '../../../master/customer/saving-master/saving-master.component';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface SavingMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CATG: string
  AC_NAME: string
  AC_BALCATG: string
  AC_OPR_CODE: number
  AC_CUSTID: number
  AC_INTCATA: string
  AC_OPDATE: Date
  AC_SCHMAMT: string
  REF_ACNO: string
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  BANKACNO: number
  //minor and introducer
  AC_MINOR: boolean
  AC_MBDATE: Date
  AC_GRDNAME: string
  AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
}
@Component({
  selector: 'app-master-saving',
  templateUrl: './master-saving.component.html',
  styleUrls: ['./master-saving.component.scss']
})


export class MasterSavingComponent implements OnInit {
  @ViewChild(SavingMasterComponent) child: SavingMasterComponent;
  @ViewChild('triggerhide') myDiv: ElementRef<HTMLElement>;

  dtExportButtonOptions: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  mySubscription: Subscription
  page: number = 1;
  //filter variable
  filterData = {};
  url = environment.base_url;
  // Store data from backend
  savingMaster: SavingMaster[];
  savingData: any;
  // constructor(private http: HttpClient, private fb: FormBuilder,) { }
  constructor(
    private http: HttpClient, private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
  ) { }
  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'LK' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.scheme = allscheme;
    })

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }
  //get saving customer data
  getSavingData(data) {
    this.savingData = data.id;
    this.child.editClickHandler(data.id);
    this.child.DatatableHideShow = false;
    this.child.rejectShow = true;
    this.child.approveShow = true;
  }
  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }
  angForm: FormGroup;
  ngbranch

  branchOption
  scheme
  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  getschemename
  ToAC: any;
  fromAC: any;
  arrTable = []
  formSubmitted
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: [null, [Validators.required]],
      AC_TYPE: [null, [Validators.required]],
      FROM_AC: [null, [Validators.required]],
      TO_AC: [null, [Validators.required]],
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngbranch = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.angForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.ngbranch = result.branch.id
    }
  }


  getBranch(event) {
    this.fromAC = null
    this.ngfromac = null
    this.ToAC = null
    this.ngtoac = null
    this.getAccountList()
  }

  //get scheme value and type
  schemechange(event) {
    this.getschemename = event.name
    this.fromAC = null
    this.ngfromac = null
    this.ToAC = null
    this.ngtoac = null
    this.getAccountList()
  }

  //get account no according scheme
  getAccountList() {
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    let obj = {
      BRANCH: this.ngbranch,
      SCHEME: this.ngscheme
    }
    switch (this.getschemename) {
      case 'SB':
        this.http.post(this.url + '/saving-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'TD':
        this.http.post(this.url + '/term-deposits-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'IV':
        this.http.post(this.url + '/investment/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'GS':
        this.http.post(this.url + '/anamat-gsm/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'AG':
        this.http.post(this.url + '/pigmy-agent-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
      case 'PG':
        this.http.post(this.url + '/pigmy-account-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'LN':
        this.http.post(this.url + '/term-loan-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
      case 'CC':
        this.http.post(this.url + '/cash-credit-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
      case 'DS':
        this.http.post(this.url + '/term-deposits-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'SH':
        this.http.post(this.url + '/share-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
      case 'LK':
        this.http.post(this.url + '/locker-master/getUnapproveList', obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
    }
  }

  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }

  unlockFun() {
    let obj = {
      BRANCH: this.ngbranch,
      SCHEME: this.ngscheme,
      FROMAC: this.ngfromac,
      TOAC: this.ngtoac
    }
    switch (this.getschemename) {
      case 'SB':
        this.http.post(this.url + '/saving-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'TD':
        this.http.post(this.url + '/term-deposits-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'IV':
        this.http.post(this.url + '/investment/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'GS':
        this.http.post(this.url + '/anamat-gsm/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'AG':

        this.http.post(this.url + '/pigmy-agent-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;
      case 'PG':
        this.http.post(this.url + '/pigmy-account-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'LN':
        this.http.post(this.url + '/term-loan-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;
      case 'CC':
        this.http.post(this.url + '/cash-credit-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;
      case 'DS':
        this.http.post(this.url + '/term-deposits-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;

      case 'SH':
        this.http.post(this.url + '/share-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;
      case 'LK':
        this.http.post(this.url + '/locker-master/unapporve', obj).subscribe(data => {
          if (data == 0) {
            Swal.fire(
              'Unapproved',
              'Accounts unapproved successfully',
              'success'
            );
            this.createForm()
          }
        })
        break;
    }

  }

}
