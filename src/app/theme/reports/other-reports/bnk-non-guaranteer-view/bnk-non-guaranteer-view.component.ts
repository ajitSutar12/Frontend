import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-bnk-non-guaranteer-view',
  templateUrl: './bnk-non-guaranteer-view.component.html',
  styleUrls: ['./bnk-non-guaranteer-view.component.scss']
})
export class BnkNonGuaranteerViewComponent implements OnInit {

 
  // Date variables
dates: any = null

 
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  //Dropdown option variable
  branchOption: any;
  ngbranch: any = null;
  ngscheme: any = null;
  ngacno: any = null;
  ACNo: any;
  defaultDate: any
  schemetype: any = null

  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;
  //Scheme type variable
  schemeList
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
showLoading:boolean = false;
clicked:boolean=false;
iframe5url:any='';
report_url = environment.report_url;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // for dropdown
    private systemParameter: SystemMasterParametersService,
    public SchemeTypes: SchemeTypeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private translate:TranslateService

  ) {
    this.translate.setDefaultLang(environment.setLang) ;

    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
   

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var schemetype = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' ||  scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH'|| scheme.name == 'IV' || scheme.name == 'GL' || scheme.name == 'AG')
      });
      this.schemetype = schemetype;
      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.dates = data.CURRENT_DATE;
      });

    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngbranch = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      date: ['', [Validators.required]],
     
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      S_ACNOTYPE: ["", [Validators.pattern, Validators.required]],
    });
  }


 
  
 
  getBranch() {
    this.getIntroducer()
  }
  obj1: any
  getschemename: any
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj1 = [this.ngscheme, this.ngbranch]
    switch (this.getschemename) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj1).pipe(first()).subscribe(data => {
          this.ACNo = data;
          console.log()
        })
        break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj1).pipe(first()).subscribe(data => {
          this.ACNo = data;
        })
        break;
    }
  }

 
    view(event){
     
  
      event.preventDefault();
      this.formSubmitted = true;
  
      let userData = JSON.parse(localStorage.getItem('user'));
      let bankName = userData.branch.syspara.BANK_NAME;
      let branchName = userData.branch.NAME;
  
      if(this.angForm.valid){
  
     this.showRepo = true;
      let obj = this.angForm.value
      let Date = moment(obj.date).format('DD/MM/YYYY');
    let scheme = obj.S_ACNOTYPE
      
      let branch = obj.BRANCH_CODE;
      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;
      
  
     this.iframe5url=this.report_url+ "examples/AgentwisePigmyBalList.php?Date='" + Date + "'&branch="+branch+"&scheme='" + scheme+"&bankName=" + bankName + " ";
     this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    }

    }
 close(){
  
    this.resetForm()

 }
 resetForm() {
  this.angForm.controls.S_ACNOTYPE.reset();

    this.showRepo = false;
    this.clicked=false;
  }
}

