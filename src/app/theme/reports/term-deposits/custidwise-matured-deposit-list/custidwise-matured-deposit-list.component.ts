import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';

@Component({
  selector: 'app-custidwise-matured-deposit-list',
  templateUrl: './custidwise-matured-deposit-list.component.html',
  styleUrls: ['./custidwise-matured-deposit-list.component.scss']
})
export class CustidwiseMaturedDepositListComponent implements OnInit {
  // Created Form Group
  ngForm: FormGroup;
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  //dropdown
  branchOption: any[];
  Cust_ID

  transferSchemeDetails: any;
  tScheme

  // for dropdown ng module
  ngbranch: any = null;
  ngcust: any = null;
  branchName: any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private customerID: CustomerIDMasterDropdownService,
    public customerIdService: CustomerIdService,
    private sanitizer: DomSanitizer) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    //for customer Id
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
    //for starting and ending date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }
  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      CUST_ID: ["", [Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      WANT_TO_PRINT: [""],
    });
  }
  end() { }
  src: any;

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }

  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    let schemeName = this.tScheme

    if (this.ngForm.valid) {

      let obj = this.ngForm.value
      this.showRepo = true;


      //for start date
    if(this.fromdate == userData.branch.syspara.CURRENT_DATE)
    {
      obj['START_DATE'] =userData.branch.syspara.CURRENT_DATE
    }
    else{
    let date = moment(this.fromdate).format('DD/MM/YYYY');
    let toDate = moment(date, 'DD/MM/YYYY')
    obj['START_DATE']=date 
  }
//for end date
  if(this.todate == userData.branch.syspara.CURRENT_DATE)
  {
    obj['END_DATE'] =userData.branch.syspara.CURRENT_DATE
  }
  else{
  let date = moment(this.todate).format('DD/MM/YYYY');
  let tDate = moment(date, 'DD/MM/YYYY')
  obj['END_DATE']=date 
}
      // let date = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let tdate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let flag = obj.WANT_TO_PRINT;

      if(flag == null){
        flag = '0';
      }else{
        flag = '1';
      }


      let custid = obj.CUST_ID
      let branch = obj.BRANCH_CODE

      // this.iframe5url = this.report_url + "examples/custidinterestlist.php?stdate='" + date + "'&etdate='" + obj.END_DATE + "'&bankName='" + bankName + "'&branchName='" + branchName + "'&$var='C'&$var1='D'&$var2='LN'&$var3='DP'&$var4='NULL'&branch=" + branch + "";
      this.iframe5url = this.report_url + "examples/Cidwisematureddeplist.php?&Branch='" + branchName + "'&sdate='" + obj.START_DATE + "'&edate='" + obj.END_DATE + "'&trandrcr='D'&tran_status='1'&ac_op_cd='D'&AC_CUSTID='" + custid + "'&S_ACNOTYPE='" + schemeName + "'&flag1=0&sign='-'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.ngForm.controls.CUST_ID.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  // getBranch(event) {
  //   this.ngbranch = event.value
  //   this.branchName = event.branchName
  // }
}
