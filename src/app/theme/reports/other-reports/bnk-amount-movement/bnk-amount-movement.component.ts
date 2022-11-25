import { Component, OnInit } from '@angular/core';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bnk-amount-movement',
  templateUrl: './bnk-amount-movement.component.html',
  styleUrls: ['./bnk-amount-movement.component.scss'],
  providers:[OwnbranchMasterService, SchemeCodeDropdownService,]
})
export class BnkAmountMovementComponent implements OnInit {

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
 clicked:boolean=false;
 showRepo: boolean = false;

   //api
   url = environment.base_url;
   report_url = environment.report_url;
   iframe5url: any = ' ';
     // for dropdown ng module
   
     ngbranch: any = null
     scode: any = null
     //dropdown
     branchOption: any[];
     scheme: any[];
  constructor(   private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,   
      public router: Router, )
      {  this.todate = moment().format('DD/MM/YYYY');
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())}

  ngOnInit(): void {
    this.createForm()

         //branch List
         this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
          this.branchOption = data;
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
          // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'SB' || scheme.name == 'SH' || scheme.name == 'CA' || scheme.name == 'LN' || scheme.name == 'TD' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'AG' || scheme.name == 'IV' || scheme.name == 'GL')
    });
    this.scheme = filtered;
   
  })
    //display date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });
  //for starting and ending date
    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
  }

  end(){}
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE:  ['', [ Validators.required]],
      Scheme_code:  ['', [ Validators.required]],
      FAmount:  ['', [ Validators.required]],
      ToAmount:  ['', [ Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      radio: new FormControl('none'),
      radio_sort: new FormControl('account number'),
    });
  }
    src: any;
view(event) {
  
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;

  if(this.ngForm.valid){
  let obj = this.ngForm.value
  this.showRepo = true;
  let startdate =  moment(obj.FROM_DATE).format('DD/MM/YYYY');
  let enddate:any;
  if (this.todate == obj.END_DATE) {
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  }
  else
  { 
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  };  
  let branch = obj.BRANCH_CODE
let schemecode = obj.Scheme_code
let Rdio = obj.radio
 let Rdiosort  = obj.radio_sort
 let fromamt =obj.FAmount
 let toamt =obj.ToAmount
  this.iframe5url=this.report_url+"examples/AgentwisePigmyBalList.php?startdate='" + startdate + "'&enddate='" + enddate + + "'&schemecode=" + schemecode + "&branch="+ branch +"'&bankName=" + bankName + "" +"'&Rdio='"+Rdio +"'&Rdiosort='" + Rdiosort+"'&fromamt=+'"+fromamt+ "'&toamt=+'"+toamt;
  this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  
}
//   view(event) {
  
//     debugger
    
//     this.showLoading = true;
//     event.preventDefault();
//     this.formSubmitted = true;

//     let userData = JSON.parse(localStorage.getItem('user'));
//   let bankName = userData.branch.syspara.BANK_NAME;
//   let branchName = userData.branch.NAME;

//     if(this.ngForm.valid){
//       let obj = this.ngForm.value
//       this.showRepo = true;
//   let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
//   var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');
//   let scheme = obj.Scheme_code
//   let Rstartingacc = obj.FROM_AC_NO
//   let EndingAccount = obj.TO_AC_NO
//   let branch = obj.BRANCH_CODE
//   let Rdio = obj.radio
//   let Rdiosort  = obj.radio_sort
          
//  this.iframe5url= this.report_url+ "examples/BalanceBook.php?&date='"+date+"'&Rdio='"+Rdio+"&scheme='" + scheme +"'&sdate='" + sdate +  "'&branch='"+ branch +"'&Rstartingacc='" + Rstartingacc +"'&EndingAccount='" + EndingAccount +"'&Rdiosort='" + Rdiosort +"&bankName=" + bankName + "";
//  this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
//     }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }

  close(){
    this.resetForm()
  }
  
  // Reset Function
  resetForm() {
    // this.createForm()
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.ToAmount.reset();
    this.ngForm.controls.FAmount.reset();
    this.ngForm.controls.radio.reset();
    this.ngForm.controls.radio_sort.reset();
    this.showRepo = false;
    this.clicked=false;
  }
}
