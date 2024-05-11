import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { environment } from "src/environments/environment";
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-bnk-dep-amount-movement-detail',
  templateUrl: './bnk-dep-amount-movement-detail.component.html',
  styleUrls: ['./bnk-dep-amount-movement-detail.component.scss'],
  providers: [OwnbranchMasterService, SchemeCodeDropdownService,]
})
export class BnkDepAmountMovementDetailComponent implements OnInit {
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
   selectedType
     Types = [
       { id: 1, value: "Summary" },
       { id: 2, value: "Details" },
       { id: 3, value: "Subsidairy Grouping" },
     ];
     setLang:any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,   
      public router: Router, private translate:TranslateService )
      {  
        this.systemParameter.getFormData(1).subscribe(data => {
    
          this.setLang = data.SET_LANGUAGE
          this.translate.setDefaultLang(this.setLang);
        })
                this.todate = moment().format('DD/MM/YYYY');
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
  //validation
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
      Type: new FormControl('account number'),
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
 let type=obj.Type
  this.iframe5url=this.report_url+"examples/AgentwisePigmyBalList.php?startdate='" + startdate + "'&enddate='" + enddate + + "'&schemecode=" + schemecode + "&branch="+ branch +"'&bankName=" + bankName + "" +"'&Rdio='"+Rdio +"'&Rdiosort='" + Rdiosort+"'&fromamt=+'"+fromamt+ "'&toamt=+'"+toamt + "'&type=+'"+type;
  this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  
}

    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    }
  }

  close(){
    this.resetForm()
  }
  
  // Reset Function
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.ToAmount.reset();
     this.ngForm.controls.Type.reset();
    this.ngForm.controls.FAmount.reset();
    this.ngForm.controls.radio.reset();
    this.ngForm.controls.radio_sort.reset();
    this.showRepo = false;
    this.clicked=false;
  }
}