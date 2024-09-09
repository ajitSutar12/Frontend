
import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators'
import * as moment from "moment";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-receive-int-list',
  templateUrl: './bnk-receive-int-list.component.html',
  styleUrls: ['./bnk-receive-int-list.component.scss'],
  providers: [SchemeCodeDropdownService, OwnbranchMasterService]
})
export class BnkReceiveIntListComponent implements OnInit {
  iframeurl:any='';
  clicked:boolean=false;
  //data
  maxDate: Date;
  minDate: Date;
  date: any = null
  showRepo: boolean = false;

  ngForm: FormGroup;
  //dropdown
  scheme: any[];
  
  branchOption: any[];
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;

  formSubmitted = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  dropdowndata = [{
    label : 'Loan',
    value : 'LN'
  },{
    label : 'Cash Credit',
    value : 'CC'
  },{
    label : 'Dispute Loan',
    value : 'DS'
  },{
    label : 'Investment',
    value : 'IV'
  }]
 
   constructor(    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public router: Router,
    private sanitizer: DomSanitizer,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    ) { 
      this.date = moment().format('DD/MM/YYYY');
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
    })
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN'|| scheme.name == 'CC'|| scheme.name == 'DS'|| scheme.name == 'IV');
      });
      this.scheme = filtered;

    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.date = data.CURRENT_DATE;
    })
  }
  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      Date: ['', [Validators.required]],   
      Print_Closed_Accounts: [''],
      Print_Penal_Interest_Details: [''],
      Print_Receivable_Penal_Interest_Details: [''],
      Print_Overdue_Interest: [''],
    });

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
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME
    
    if(this.ngForm.valid){
  
   this.showRepo = true;
    let obj = this.ngForm.value
    // let Date = moment(obj.Date).format('DD/MM/YYYY');

    let Date:any;
    if (this.date == obj.Date) {
      Date = moment(this.date,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      Date = moment(this.date,'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let scheme = obj.Scheme_code;
    let branch = obj.BRANCH_CODE;
  
  let PrintClosedAccounts =obj.Print_Closed_Accounts;
  let PrintPenalInterestDetails =obj.Print_Penal_Interest_Details;
  let PrintClosedAcPrintReceivablePenalInterestDetailscounts =obj.Print_Receivable_Penal_Interest_Details;
  let PrintOverdueInterest =obj.Print_Overdue_Interest;
  
this.iframeurl=this.report_url+ "examples/ReceivableInterestBal.php?Date='" + Date + "'&scheme=" 
                + scheme + "&branch="+this.ngbranch+"&PrintClosedAccounts='"+PrintClosedAccounts +"'&PrintPenalInterestDetails='"+PrintPenalInterestDetails
                +"'&PrintClosedAcPrintReceivablePenalInterestDetailscounts='"+PrintClosedAcPrintReceivablePenalInterestDetailscounts+"'&PrintOverdueInterest='"
                +PrintOverdueInterest+"&bankName=" + bankName + "&branchName="+branchName+"'";
   this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  
  }
  close(){
    this.resetForm()
    }
  
    resetForm() {
      // this.createForm()
      this.ngForm.controls.Scheme_code.reset();
      this.ngForm.controls.Print_Closed_Accounts.reset();
      this.ngForm.controls.Print_Penal_Interest_Details.reset();
      this.ngForm.controls.Print_Receivable_Penal_Interest_Details.reset();
      this.ngForm.controls.Print_Overdue_Interest.reset();
      this.showRepo = false;
      this.clicked=false;
    }
}
