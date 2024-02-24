import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { first } from "rxjs/operators";
import * as moment from 'moment';
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bnk-catbal-list',
  templateUrl: './bnk-catbal-list.component.html',
  styleUrls: ['./bnk-catbal-list.component.scss']
})
export class BnkCatbalListComponent implements OnInit {
//fromgroupname
ngForm:FormGroup;

clicked:boolean=false;
showRepo: boolean = false;
formSubmitted = false;



scheme: any[];

transferSchemeDetails:any;
branchOption: any;
branch_code
iframeurl: any = ' ';
showLoading:boolean = false;
obj: any;
 // Date variables
 todate: any = null;
 fromdate: any = null
 edate: any = null
 maxDate: Date;
 minDate: Date;
 tScheme
 bsValue = new Date();
 // for dropdown ng module
 schemeCode: any = null;

 url = environment.base_url;

 report_url = environment.report_url;
  
 ngbranch: any = null;
  constructor(
    private translate:TranslateService,
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,

     
    private systemParameter:SystemMasterParametersService,
    
  ) {
    this.translate.setDefaultLang(environment.setLang);
   
   }

 


  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE:  ['', [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
     
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      
      // FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
      // TO_AC_NO: ['', [Validators.pattern, Validators.required]],
      radio: new FormControl('Detail'),
      // radio_sort: new FormControl('account number'),

    });
  }
  ngOnInit(): void {
    this.createForm();
    //branch list
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
   
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var scheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'AG' || scheme.name == 'LK'|| scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'IV' || scheme.name == 'GL' )
      });
      this.scheme = scheme;
  });
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    // this.fromdate = `01/04/${year - 1}`      
    this.todate = data.CURRENT_DATE
    
    this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
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
  getIntro(event){
    this.getschemename = event.name
    
  }
  getschemename: any

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }
  
  view(event){
   
      
    this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;

    if(this.ngForm.valid){
      let obj = this.ngForm.value
      let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let sdate = moment(obj.START_DATE).subtract(1, "day").format('DD/MM/YYYY');
      let enddate:any;
    if (this.todate == obj.END_DATE) {
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };
     
    
      this.showRepo = true;
 
      let scheme = obj.Scheme_code
     let schemeName = this.tScheme
 
     let branch = obj.BRANCH_CODE
     let Rdio = obj.radio
     let amount
    
      if(this.tScheme =="LN" ||this.tScheme =="CC"||this.tScheme =="DS")
     {
         amount = 'INTRATE';
     }
     else
     {
         amount = 'AMOUNT';
     }
     if(Rdio=='Detail')
     {
    this.iframeurl= this.report_url+ "examples/CategoryWiseDetailBalList.php?startdate='" + startdate + "'&enddate='" + enddate +"'&sdate='"+sdate+"'&Rdio='"+Rdio+"&acno='" + scheme + "'&actype='" + schemeName + "'&branch="+ this.ngbranch  +"&bankName=" + bankName + "&amount='" + amount + "'";
    this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else if(Rdio=='Summary')
    {
      this.iframeurl= this.report_url+ "examples/CategorywiseSummaryBalList.php?startdate='" + startdate + "'&enddate='" + enddate +"'&sdate='"+sdate+"'&Rdio='"+Rdio+"&acno='" + scheme + "'&actype='" + schemeName + "'&branch="+ this.ngbranch  +"&bankName=" + bankName + "&amount='" + amount + "'";
    this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
   
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(()=>{ this.clicked=false});
    }
  }
    

  }
  close(){
    this.resetForm()
    
  }
  onLoad() {
    this.showLoading = false;
  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    // this.ngForm.controls.radio.reset();
    this.showRepo = false;
    this.clicked=false;
  }

}
