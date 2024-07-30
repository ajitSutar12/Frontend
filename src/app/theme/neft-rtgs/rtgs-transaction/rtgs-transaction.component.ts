import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rtgs-transaction',
  templateUrl: './rtgs-transaction.component.html',
  styleUrls: ['./rtgs-transaction.component.scss']
})
export class RtgsTransactionComponent implements OnInit {

  angForm: FormGroup
  ngbranch
  branchOption: unknown;
  ngbank
  fname = "";
  ifscname = "";
  ibname
  addr
  ibrnname
  city
  state
  stor
  msg
  multigrid = [];

  bankOptions = [
    { id: 1, name: 'Yes Bank' },
    { id: 2, name: 'Bank Of India' },
    { id: 3, name: 'Bank Of Maharastra' },
    { id: 4, name: 'IDBI Bank' },
  ];
  url = environment.base_url;
  schemeDetails: any;
  accList: any;
schemeCode: any;
Account_NO: any;
  constructor(
    private fb: FormBuilder, private _ownbranchmasterservice: OwnbranchMasterService, private http: HttpClient,


  ) { }

  ngOnInit(): void {
    this.createForm()

    //branchOption
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.getScheme(event);

    })


  }
  AC_MOBILENO
  id
  AC_ADD_REG
  getScheme(event) {
    //SCHEME
    this.http.post('http://192.168.1.154:7276/voucher/neft', {}).subscribe((data: any) => {
      //  this.http.get('http://192.168.1.113:7271/voucher/neft').subscribe((data: any) => {
      this.schemeDetails = data;
      console.log("Scheme Data", data);
      this.accList = data;
      console.log("Account_NO Data", data);

    })

  }


  chengeData(event) {

      this.AC_MOBILENO = event.AC_MOBILENO
      this.id = event.id
      this.AC_ADD_REG = event.AC_ADD_REG
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      account_no: ['',],
      Scheme_code: ['',],
      Address: ['',],
      BANK_NAME: ['',],
      custID: ['',],
      contact_no: ['',],
      BENEF_NAME: ['', [Validators.required]],
      BENEF_CODE: ['', [Validators.required]],
      IFSC_CODE: ['', [Validators.required]],
      IFSCB_NAME: ['', [Validators.required]],
      IFSCBRN_NAME: ['', [Validators.required]],
      MOBILENO: ['', [Validators.required]],
      CUST_ADDR: ['', [Validators.required]],
      CITY: ['', [Validators.required]],
      STATE: ['', [Validators.required]],
      STORI: ['', [Validators.required]],
      REM_AMT: ['', [Validators.required]],
      APPL_CHRGE: ['', [Validators.required]],
      SERV_CHARGE: ['', [Validators.required]],
      TOTAL_AMT: ['', [Validators.required]],
      MESSAGE: ['',],
    });

  }


  submit() {
    const formVal = this.angForm.value;
    const obj = {
      bankname: formVal.BANK_NAME,
      branch_code: formVal.BRANCH_CODE,
      benif_name: formVal.BENEF_NAME,
      benif_code: formVal.BENEF_CODE,
      ifsc_code: formVal.IFSC_CODE,
      ifsc_bank_name: formVal.IFSCB_NAME,
      branch_name: formVal.IFSCBRN_NAME,
      mobile_no: formVal.MOBILENO,
      cust_addr1: formVal.CUST_ADDR,
      city: formVal.CITY,
      state_name: formVal.STATE,
      se_to_re: formVal.STORI,
      remit_amount: formVal.REM_AMT,
      appl_charge: formVal.APPL_CHRGE,
      service_tax: formVal.SERV_CHARGE,
      total_amount: formVal.TOTAL_AMT,
    }

    if (this.angForm.invalid) {
      Swal.fire("Warning!", "Please Fill All Mandatory Fields!", "error");
    }
    else {
      this.multigrid.push(obj);
      this.http.post(this.url + '/shares-transfer/insert', obj).subscribe(data => {  
      // this.http.post('http://192.168.1.165:4771/customer-app/RTGS', obj).subscribe(data => {

        Swal.fire(
          'success', "Data Submitted Successfully!!", 'success'
        );
        this.createForm()
      })
    }
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
}