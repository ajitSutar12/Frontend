import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
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
import { DomSanitizer} from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";

@Component({
  selector: 'app-bnk-pigmy-commission-repo',
  templateUrl: './bnk-pigmy-commission-repo.component.html',
  styleUrls: ['./bnk-pigmy-commission-repo.component.scss']
})
export class BnkPigmyCommissionRepoComponent implements OnInit {
  scheme: any;
  code: any;
  schemeCode: any;
  schemeType: any;

  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  //Dropdown option variable
  branchOption: any;
  ngbranch: any = null;
  ngscheme: any = null;
  ngacno: any = null;
  ACNo: any;
  defaultDate: any
  //title select variables
  schemetype: Array<IOption> = this.SchemeTypes.getCharacters();

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
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // for dropdown
    private systemParameter: SystemMasterParametersService,
    public SchemeTypes: SchemeTypeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,) { 
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
  }
  createForm() {
    this.angForm = this.fb.group({
      FROM_DATE: ["", [Validators.pattern, Validators.required]],
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      S_ACNOTYPE: ["", [Validators.pattern, Validators.required]],
      AC_TYPE: ["", [Validators.pattern, Validators.required]],
    });
  }
  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate();

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.code = this.scheme[0].value
      this.schemeCode = this.scheme[0].name
    })
  }
  getScheme(value) {
    this.schemeCode = value.name
  }
  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE
    })
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
  src: any;
  view(event) {
    debugger
    
    event.preventDefault();
    this.formSubmitted = true;
    if(this.angForm.valid){

    this.showRepo = true;
    let obj = this.angForm.value
    let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let scheme = obj.S_ACNOTYPE
    const url = "http://localhost/NewReport/report-code/Report/examples/Nomineelist.php?startDate='" + date + "'&scheme='" + scheme + "'&";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
  }
  
}
}

