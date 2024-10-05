import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ReportFrameComponent } from '../../../report-frame/report-frame.component';
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-loan-due-list-btod',
  templateUrl: './loan-due-list-btod.component.html',
  styleUrls: ['./loan-due-list-btod.component.scss']
})
export class LoanDueListBtodComponent implements OnInit {
  angForm : FormGroup;

  iframe5url: any = '';
  url = environment.base_url;
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;

  showRepo: boolean = false;
  showLoading: boolean = false;
  report_url = environment.report_url; 
  todate: any;
  fromdate:any;

  clicked: boolean;
  tScheme: any;
  selectedItems: any;
  // angForm: any;
  fromAc: any;
  toAc: any;
  branchName: string;
  setLang: any;


  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private sanitizer: DomSanitizer,  private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
  ) { 
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
     
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });
  }

  
//ngfor variable
schemeCode
branchCode

//ngmodel variable
selectedscheme
selectedbranch

ngOnInit(): void {
  this.createForm();

  this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branchCode = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 1 && result.RoleDefine[0].Role.id==1) {
        this.branchCode.push({ value: '0', label: 'Consolidate' })
      }    

    })

   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

    var filtered = data.filter(function (schemeCode) {
      return (schemeCode.name == 'LN' || schemeCode.name == 'CC' || schemeCode.name == 'DS');
    });
    this.schemeCode = filtered;
    //console.log(this.scheme);

  })
}
getscheme(event){
  this.tScheme = event.value
  

}

onLoad() {
  this.showLoading = false;

}

createForm(){
  this.angForm = this.fb.group({
    scheme: ['',[Validators.required]],
    branch: ['',[Validators.required]],
    fdate: ['',[Validators.required]],
    tdate: ['',[Validators.required]],
    mininst: ['',[Validators.required]],
    maxinst: ['',[Validators.required]]
    
  });
}

getBranch
getbranch(event) {
  this.getBranch = event.branchName
}
view(event:any) {
    
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;


  if(this.angForm.valid){

 this.showRepo = true;
  let obj = this.angForm.value

  let Date = moment(obj.date).format('DD/MM/YYYY');
  let tDate = moment(Date, 'DD/MM/YYYY')
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

let scheme = obj.scheme;
  let branch = obj.branch;
  let sdate =  moment(obj.fdate).format('DD/MM/YYYY');
  let edate =  moment(obj.tdate).format('DD/MM/YYYY');
  let mininstal =obj.mininst;
  let maxinstall = obj.maxinst;
  

  let schemeName = this.tScheme

  //  let startingcode= obj.Starting_Account;
  // let endingcode =obj.Ending_Account;
  // this.iframe5url=this.report_url+ "examples/transactionless.php/?&bankname='"+ bankName +"'&Branch='"+ this.branchName +"'&sdate='"+ obj.START_DATE +"'&edate='"+ obj.END_DATE +"'&AC_TYPE='"+ scheme +"'&ACNOTYPE='"+ schemeName +"' &BRANCH_CODE='"+branch+"'";

  if(branch == 0){
    this.getBranch='Consolidate';
 }

this.iframe5url=this.report_url+ "examples/LoanOverdueBetweenTwoOpenDates.php?AC_TYPE="+schemeName+"&BRANCH_CODE="+branch+"&BRANCH='"+this.getBranch+"'&DATE1='"+sdate+"'&DATE2='"+edate+"'&NUMBER1="+mininstal+"&NUMBER2="+maxinstall+"&schemeCode='"+scheme+"'&BANK='"+bankName+"'";
console.log(this.iframe5url); 
 this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
}
else {
  // Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(()=>{ this.clicked=false});
}
}
close() {
  this.resetForm()
  this.selectedItems =null;

}
resetForm() {
  this.angForm.controls.scheme.reset();
  // this.angForm.controls.BRANCH_CODE.reset();
  this.angForm.controls.maxinst.reset();
  this.angForm.controls.mininst.reset();
  this.angForm.controls.fdate.reset();
  this.angForm.controls.tdate.reset();


  this.fromAc = null;
  this.toAc = null;
  this.selectedItems=null;

  this.showRepo = false;
  this.clicked = false;
}
scrollToTop() {
  window.scrollTo({ top: 200, behavior: 'smooth' });
} 
}
