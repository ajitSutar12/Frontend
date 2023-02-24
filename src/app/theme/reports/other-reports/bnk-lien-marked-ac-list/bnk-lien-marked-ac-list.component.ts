import {Component,OnInit}from "@angular/core";
import { FormGroup , FormBuilder, Validators,FormControl} from "@angular/forms";
import { NgSelectConfig } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { first } from "rxjs/operators";
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import Swal from 'sweetalert2';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bnk-lien-marked-ac-list',
  templateUrl: './bnk-lien-marked-ac-list.component.html',
  styleUrls: ['./bnk-lien-marked-ac-list.component.scss']
})
export class BnkLienMarkedAcListComponent implements OnInit {
// Created Form Group
ngForm: FormGroup;
maxDate: Date;
minDate: Date;
 //for dropdown
 branchOption:any[];
 scheme: any[];
 // for dropdown ng module
 ngbranch:any = null;
 scode:any = null;
 defaultDate:any
 ///iframe 
 formSubmitted = false;
 report_url = environment.report_url;
 showRepo: boolean = false;
 clicked:boolean=false;
 iframeurl: any = ' ';
  constructor(private fb: FormBuilder,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    public schemeTypeDropdown: SchemeTypeDropdownService,
  
) {
  this.defaultDate = moment().format('DD/MM/YYYY');
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
     // Scheme Code
     this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB'|| scheme.name == 'AG'|| scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS'  );
      });
      this.scheme = filtered;
  
    })
      //display defalut date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.defaultDate = data.CURRENT_DATE;
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
   Scheme_code: ["", [Validators.pattern, Validators.required]],
   FROM_DATE: ['', [Validators.pattern, Validators.required]],
   BRANCH_CODE: ['', [Validators.pattern, Validators.required]],

  });
}
src: any;
view(event) {

  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;
  
  if(this.ngForm.valid){
  let obj = this.ngForm.value
  this.showRepo = true;

  if(this.defaultDate == userData.branch.syspara.CURRENT_DATE)
  {
    obj['FROM_DATE'] =userData.branch.syspara.CURRENT_DATE
  }
  else{
  let date = moment(this.defaultDate).format('DD/MM/YYYY');
  let tDate = moment(date, 'DD/MM/YYYY')
  obj['FROM_DATE']=date 
}
  // let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
  // var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

  let scheme = obj.Scheme_code 
  let branch = obj.BRANCH_CODE
       
 this.iframeurl= this.report_url+"examples/LineMarkedList.php/?&Date='"+ obj.FROM_DATE +"'&scheme='"+ scheme +"'&NAME='"+ bankName +"'";

 console.log(this.iframeurl);
 this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
 
 
 
}
else {
  Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
}

}

close(){
this.resetForm()
}

// Reset Function
resetForm() {
this.ngForm.controls.Scheme_code.reset();
this.showRepo = false;
this.clicked=false;
}

}


  


