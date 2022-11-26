import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lcd-expiry-list',
  templateUrl: './lcd-expiry-list.component.html',
  styleUrls: ['./lcd-expiry-list.component.scss']
})
export class LcdExpiryListComponent implements OnInit {
//fromgroup
ngForm:FormGroup
 // for dropdown ng module
  
 ngbranch: any = null;
 //ngfor
 branchOption: any[];
 schemeCode: any = null;
 scheme: any[];

SchemeCodeDropdownDropdown: any[];

//date
todate: any = null;
fromdate: any = null;
edate: any = null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();
 clicked:boolean=false;
 showRepo: boolean = false;
 formSubmitted = false;
 iframeurl5: any = ' ';
showLoading:boolean = false;
url = environment.base_url;

report_url = environment.report_url;
 
  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,

    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    
  ) { }

  ngOnInit(): void {
    this.createForm()
     //branch List
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
      //scheme code
   this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {       
    var filtered = data.filter(function (scheme) {
      return (  scheme.name == 'LN'  );
    });
    this.SchemeCodeDropdownDropdown = filtered;
  })
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
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE:  ['', [ Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
    });
  }
  getschemename: any

  getIntro(event) {
    this.getschemename = event.name
    // this.getIntroducer()
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
      let enddate:any;
    if (this.todate == obj.END_DATE) {
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };
     
    
      this.showRepo = true;
 
  let scheme = obj.Scheme_code
 
  let branch = obj.BRANCH_CODE
 
          
 this.iframeurl5= this.report_url+ "examples/BalanceBook.php?startdate='" + startdate + "'&enddate='" + enddate+"&scheme='" + scheme + "'&branch='"+ branch  +"&bankName=" + bankName + "";
 this.iframeurl5=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl5);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }
  close(){
this.resetForm()
  }
  resetForm() {
  
    this.ngForm.controls.Scheme_code.reset();
  

    
   
    
    this.showRepo = false;
    this.clicked=false;
  }
}
