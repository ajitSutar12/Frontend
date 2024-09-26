import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { CustomerIDMasterDropdownService } from '../../../shared/dropdownService/customer-id-master-dropdown.service';
import { LegderViewService } from '../ledger-view/ledger-view.service';
import { iif } from 'rxjs';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// import Swal from 'sweetalert2';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  formSubmitted = false;
  //api 
  url = environment.base_url;

  // Created Form Group
  angForm: FormGroup;

  // dropdown variables
  ngcustomer: any = null
  Cust_ID: any[] //customer id from idmaster
  customer
  //array of document of customer
  customerDoc = []
  loadingCustomer = false
  //temp address flag variable
  tempAddress: boolean = true;
  sysparaCurrentDate
  // image purpose
  // customerImg: string = 'assets/images/user-card/img-round4.jpg';
  // signture: string = 'assets/sign/signture.jpg';
  customerImg = 'assets/images/nouser.png';
  signture = 'assets/images/nosignature.png';
  customerList
  ngbranch
  branchOption: any;
  setLang: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private customerID: CustomerIDMasterDropdownService,
    private customerIdService: LegderViewService,
    private config: NgSelectConfig,
    private _CustomerIdService: CustomerIdService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
}

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_CUSTID: ["", [Validators.required]],
      BRANCH_CODE: ["", [Validators.required]],
      CLOSED_AC: [false],
      AC_NAME: ['',],
      AC_PANNO: ['',],
      AC_ADHARNO: [''],
      AC_HONO: [''],
      AC_WARD: [''],
      AC_GALLI: [''],
      AC_AREA: [''],
    });
    this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
      this.sysparaCurrentDate = data['CURRENT_DATE'];
    })
  }

  getBranch(event) {
    this.customerList = []
    this.Cust_ID = []
    this.ngcustomer = null
    this.http.post(this.url + '/ledger-view/customerList', { branch_code: event.value }).subscribe(data => {
      this.customerList = data
    })
  }
  //filter object
  filterObject(ele) {
    this.loadingCustomer = true
    this.Cust_ID = [];
    if (ele.key == 'Backspace' && ele.target.value == '') {
      this.Cust_ID = [];
      this.loadingCustomer = false
    }
    else {
      this.loadingCustomer = true
      // this.customerList.forEach(element => {
      for (let element of this.customerList) {
        element['label'] = element.AC_NO + ' ' + element.AC_NAME
        if (JSON.stringify(element.label).includes(ele.target.value.toUpperCase())) {
          this.Cust_ID.push(element);
        }
      }
      this.loadingCustomer = false
      // });
    }
  }
  hideImage() {
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg: string;
  PreviewDiv: boolean = false;
  showImage(img) {
    var src = img;
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
  }

  address
  AC_HONO
  AC_WARD
  AC_GALLI
  AC_AREA
  AC_ADDR
  AC_PIN
  PANNO
  AC_NAME
  adharNo
  contact
  accountsList = []
  withoutClosedAccount = []
  allAccounts = []
  //function to get existing customer data according selection
  getCustomer(eve) {
    this.customerImg = 'assets/images/nouser.png';
    this.signture = 'assets/images/nosignature.png'

    this.accountsList = []
    this.allAccounts = []
    this.withoutClosedAccount = []
    this.accountDetails = ''
    this.showDetails = false
    this.angForm.patchValue({
      CLOSED_AC: false
    })
    this.ngcustomer = eve.id

    this._CustomerIdService.getFormData(eve.id).subscribe(data => {
      if (data.custdocument.length != 0) {
        data.custdocument.forEach(element => {
          if (element.DocumentMasterID == 1) {
            this.customerImg = this.url + '/' + element.PATH;
          }
          if (element.DocumentMasterID == 2) {
            this.signture = this.url + '/' + element.PATH;
          }
        });
      } else {
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png'
      }
    })
    this.customerIdService.getFormData(eve.id).subscribe(data => {
      if (data.custAddress.length != 0) {
        data.custAddress.forEach(element => {
          if (element.AC_ADDTYPE == 'P')
            this.address = element
        });
        // if (this.address != undefined) {
        this.address['AC_HONO'] != null ? this.AC_HONO = this.address['AC_HONO'] + ',' : this.AC_HONO = ''
        this.address['AC_WARD'] != null ? this.AC_WARD = this.address['AC_WARD'] + ',' : this.AC_WARD = ''
        this.address['AC_AREA'] != null ? this.AC_AREA = this.address['AC_AREA'] + ',' : this.AC_AREA = ''
        this.address['AC_GALLI'] != null ? this.AC_GALLI = this.address['AC_GALLI'] + ',' : this.AC_GALLI = ''
        this.address['AC_ADDR'] != null ? this.AC_ADDR = this.address['AC_ADDR'] + ',' : this.AC_ADDR = ''
        this.AC_PIN = this.address['AC_PIN']
        // }
      }

      for (let share of data.shareMaster) {
        share['ACTYPE'] = share.shareMaster?.S_APPL
        this.allAccounts.push(share)
      }
      data.pgmaster?.forEach(pgmaster => {
        pgmaster['ACTYPE'] = pgmaster.PGMaster?.S_APPL
        this.allAccounts.push(pgmaster)
      });
      data.dpmaster?.forEach(dpmaster => {
        dpmaster['ACTYPE'] = dpmaster.DPMaster?.S_APPL
        this.allAccounts.push(dpmaster)
      });
      data.termLoan?.forEach(termloan => {
        termloan['ACTYPE'] = termloan.LNCCMaster?.S_APPL
        this.allAccounts.push(termloan)
      });
      if (this.allAccounts.length == 0) {
        Swal.fire('Info', 'No Any Accounts Found', 'info')
        this.ngcustomer = null
      }
      for (let account of this.allAccounts) {
        if (account.AC_CLOSEDT == null) {
          this.withoutClosedAccount.push(account)
        }
      }
      this.accountsList = this.withoutClosedAccount
      this.noOfAccounts = this.withoutClosedAccount.length
      if (this.withoutClosedAccount.length == 0) {
        this.angForm.patchValue({
          CLOSED_AC: true
        })
        this.accountsList = this.allAccounts
        this.noOfAccounts = this.allAccounts.length
      }

      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      this.PANNO = data.AC_PANNO
      this.AC_NAME = data.AC_NAME
      this.adharNo = data.AC_ADHARNO
      this.contact = data.AC_MOBILENO
    })
  }
  displayClosedAccounts(flag) {
    if (flag.target.checked) {
      this.accountsList = this.allAccounts
      this.noOfAccounts = this.allAccounts.length
    }
    else {
      this.accountsList = this.withoutClosedAccount
      this.noOfAccounts = this.withoutClosedAccount.length
    }
  }
  showDetails: boolean = false
  accountDetails
  noOfAccounts = 0
  viewDetails(value) {
    this.showDetails = true
    this.accountDetails = value
    let obj = {
      ACTYPE: value.ACTYPE,
      intCategory: value.AC_INTCATA,
      BANKACNO: value.BANKACNO,
      Date: this.sysparaCurrentDate,
      branchCode: value.BranchCodeMaster.CODE,
      installmentAmount: value?.AC_INSTALLMENT,
      AC_NO: value.AC_NO
    }
    if (value.PIGMY_ACTYPE != null) {
      obj['pigmyAgent'] = value.PIGMY_ACTYPE
    }
    if (this.accountDetails.AC_ACNOTYPE == 'CC' || this.accountDetails.AC_ACNOTYPE == 'LN') {
      obj['schemeData'] = this.accountDetails.LNCCMaster
    }
    else if (this.accountDetails.AC_ACNOTYPE == 'PG') {
      obj['schemeData'] = this.accountDetails.PGMaster
      obj['AGENT_ACTYPE'] = this.accountDetails.AGENT_ACTYPE
    }
    else if (this.accountDetails.AC_ACNOTYPE == 'SH') {
      obj['schemeData'] = this.accountDetails.shareMaster
    }
    else if (this.accountDetails.AC_ACNOTYPE == 'TD' || this.accountDetails.AC_ACNOTYPE == 'SB' || this.accountDetails.AC_ACNOTYPE == 'CA' || this.accountDetails.AC_ACNOTYPE == 'AG' || this.accountDetails.AC_ACNOTYPE == 'IV' || this.accountDetails.AC_ACNOTYPE == 'GS') {
      obj['schemeData'] = this.accountDetails.DPMaster
    }
    this.http.post(this.url + '/ledger-view/customerAccountWiseData', obj).subscribe(data => {
      // if (this.accountDetails.AC_ACNOTYPE == 'SH') {
      //   let facevalue = this.accountDetails.shareMaster.SHARES_FACE_VALUE == undefined || this.accountDetails.shareMaster.SHARES_FACE_VALUE == null ? 0 : Number(this.accountDetails.shareMaster.SHARES_FACE_VALUE)
      //   facevalue == 0 ? this.accountDetails['numberofshares'] = 0 : this.accountDetails['numberofshares'] = Math.floor(data['ledgerBalance'] / facevalue);
      // }
      this.accountDetails['numberofshares'] = data['numberOfShares']
      this.accountDetails['Balance'] = data['ledgerBalance'] >= 0 ? data['ledgerBalance'] + ' Dr' : Math.abs(data['ledgerBalance']) + ' Cr'
      this.accountDetails['InterestAmount'] = data['InterestAmount']
      this.accountDetails['pigmyAgentPigmy'] = value.PIGMY_ACTYPE != null ? data['pigmyScheme'] : null
      this.accountDetails['interestrate'] = data['interestrate'] + ' %'
      this.accountDetails['AGENT_ACTYPE'] = data['AgentScheme']
      this.accountDetails['penalInt'] = data['penalInt']
      this.accountDetails['receiveablePenal'] = data['receiveablePenal']
      this.accountDetails['overdueInt'] = data['overdueInt']
      this.accountDetails['receivableInterest'] = data['receivableInterest']
      this.accountDetails['nextInstallmentDate'] = data['nextInstallmentDate']
      this.accountDetails['overdueDate'] = data['overdueDate']
      this.accountDetails['unpaidDividendAmount'] = data['unpaidDividendAmount']
      this.accountDetails['unpaidBonusAmount'] = data['unpaidBonusAmount']
      this.accountDetails['sharetranData'] = data['sharetranData']
      this.accountDetails['lienData'] = data['lienData']
    })
  }
}
