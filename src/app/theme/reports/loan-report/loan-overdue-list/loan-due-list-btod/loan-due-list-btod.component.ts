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
  


  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
  ) { }

  
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



this.iframe5url=this.report_url+ "examples/LoanOverdueBetweenTwoOpenDates.php?AC_TYPE="+schemeName+"&BRANCH_CODE="+branch+"&BRANCH='"+branchName+"'&DATE1='"+sdate+"'&DATE2='"+edate+"'&NUMBER1='"+mininstal+"'&NUMBER2='"+maxinstall+"'&schemeCode='"+scheme+"'&BANK='"+bankName+"'";
console.log(this.iframe5url); 
 this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
}
else {
  Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
}
}

close() {
  this.resetForm()
  // this.selectedItems =null;

}
resetForm() {
  this.angForm.controls.Scheme_code.reset();
  this.angForm.controls.BRANCH_CODE.reset();
  this.angForm.controls.Max_save.reset();
  this.angForm.controls.Min_save.reset();
  this.angForm.controls.END_DATE.reset();
  // this.fromAc = null;
  // this.toAc = null;
  // this.selectedItems=null;

  this.showRepo = false;
  this.clicked = false;
}
}
