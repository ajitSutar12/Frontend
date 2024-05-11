import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DomSanitizer} from '@angular/platform-browser';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-directorwise-deposit-list',
  templateUrl: './directorwise-deposit-list.component.html',
  styleUrls: ['./directorwise-deposit-list.component.scss']
})
export class DirectorwiseDepositListComponent implements OnInit {
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
 //dropdown
 branchOption: any[];
 Cust_ID
 ngdirectorFrom: any = null;

director: any[]
 // for dropdown ng module
 ngbranch: any = null;
 ngcust: any = null;
 setLang:any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private directorMasterDropdown: DirectorMasterDropdownService,

    private sanitizer: DomSanitizer, private translate:TranslateService) { 
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
   });
  //  //for customer Id
  //  this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
  //   this.Cust_ID = data;
  // })
   //director
 this.directorMasterDropdown.getDirectorMastertrueList().pipe(first()).subscribe(data => {
  this.director = data;
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
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      F_DIRECTOR: ["", [Validators.required]],
    });
}
end() {}
src: any;
view(event) {
  debugger
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME

  if(this.ngForm.valid){
  let obj = this.ngForm.value
  this.showRepo = true;
  let date =  moment(obj.FROM_DATE).format('DD/MM/YYYY');

  if(this.fromdate == userData.branch.syspara.CURRENT_DATE)
  {
    obj['START_DATE'] =userData.branch.syspara.CURRENT_DATE
  }
  else{
  let date = moment(this.fromdate).format('DD/MM/YYYY');
  let tDate = moment(date, 'DD/MM/YYYY')
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
  let directorid = obj.F_DIRECTOR
  let branch = obj.BRANCH_CODE


  this.iframe5url=this.report_url+"examples/directorwisedeposit.php?stdate='" + obj.START_DATE + "'&etdate='" + obj.END_DATE + "'&branchName='"+ branchName +"'&bankName='"+ bankName +"'&ac_director='"+ directorid +"'&var='D'&branch='"+ branch +"'";
  console.log( this.iframe5url);
  this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  
 
}
else {
  Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
}

}

close(){

this.resetForm()

}
onFocus(ele: NgSelectComponent) {
  ele.open()
}

// Reset Function
resetForm() {debugger
this.ngForm.controls.F_DIRECTOR.reset();

this.showRepo = false;
this.clicked=false;
}
}


