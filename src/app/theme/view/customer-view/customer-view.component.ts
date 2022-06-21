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
// import Swal from 'sweetalert2';

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

  //array of document of customer
  customerDoc = []

  //temp address flag variable
  tempAddress: boolean = true;

  // image purpose
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private customerID: CustomerIDMasterDropdownService,
    private customerIdService: LegderViewService,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_CUSTID: ["", [Validators.required]],
      CLOSED_AC: [false],
      AC_NAME: ['',],
      AC_PANNO: ['',],
      AC_ADHARNO: [''],
      AC_HONO: [''],
      AC_WARD: [''],
      AC_GALLI: [''],
      AC_AREA: [''],
    });
  }

  hideImage() {
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg: string;
  PreviewDiv: boolean = false;
  showImage(img) {
    var src = img;
    console.log(src)
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
    this.accountsList = []
    this.allAccounts = []
    this.withoutClosedAccount = []
    this.accountDetails = ''
    this.showDetails = false
    this.angForm.patchValue({
      CLOSED_AC: false
    })
    this.customerIdService.getFormData(eve.value).subscribe(data => {
      console.log('data', data)
      data.custAddress.forEach(element => {
        if (element.AC_ADDTYPE == 'P')
          this.address = element
      });
      for (let share of data.shareMaster) {
        console.log('share', share)
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
      }
      for (let account of this.allAccounts) {
        if (account.AC_CLOSEDT == null) {
          this.withoutClosedAccount.push(account)
        }
      }
      console.log('without', this.withoutClosedAccount)
      this.accountsList = this.withoutClosedAccount
      this.noOfAccounts = this.withoutClosedAccount.length

      this.address['AC_HONO'] != null ? this.AC_HONO = this.address['AC_HONO'] + ',' : this.AC_HONO = ''
      this.address['AC_WARD'] != null ? this.AC_WARD = this.address['AC_WARD'] + ',' : this.AC_WARD = ''
      this.address['AC_AREA'] != null ? this.AC_AREA = this.address['AC_AREA'] + ',' : this.AC_AREA = ''
      this.address['AC_GALLI'] != null ? this.AC_GALLI = this.address['AC_GALLI'] + ',' : this.AC_GALLI = ''
      this.address['AC_ADDR'] != null ? this.AC_ADDR = this.address['AC_ADDR'] + ',' : this.AC_ADDR = ''
      this.AC_PIN = this.address['AC_PIN']
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      this.PANNO = data.AC_PANNO
      this.AC_NAME = data.AC_NAME
      this.adharNo = data.AC_ADHARNO
      this.contact = data.AC_MOBILENO
    })
  }
  displayClosedAccounts(flag) {
    debugger
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
  noOfAccounts
  viewDetails(value) {
    debugger
    console.log(value)
    this.showDetails = true
    this.accountDetails = value
  }
}
