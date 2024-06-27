import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
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

@Component({
  selector: 'app-bnk-pigmy-commission-repo',
  templateUrl: './bnk-pigmy-commission-repo.component.html',
  styleUrls: ['./bnk-pigmy-commission-repo.component.scss']
})
export class BnkPigmyCommissionRepoComponent implements OnInit {

  code: any;
  clicked: boolean = false;

  schemeType: any;
  formSubmitted = false;
  //Dropdown option variable


  ngscheme: any = null;
  ngacno: any = null;
  ACNo: any;
  defaultDate: any
  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module

  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;
  // Date variables
  todate: any = null;
  fromdate: any = null;
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
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
  ngForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
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
    this.ngForm = this.fb.group({

      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      Scheme_acc: [""],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      radio: new FormControl('Details'),
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
  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'AG');
      });
      this.scheme = filtered;
    })
  }

  getschemename: any

  getBranch() {
    this.getIntroducer()
  }

  schemecodeno : any
  getIntro(event) {
    this.getschemename = event.name
    this.schemecodeno = event.id

    this.getIntroducer()
  }

  name: any
  acnotype: any
  getAgentName(event) {
    this.name = event.name
    this.acnotype = event.label
  }

  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'AG':
        // this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.http.get<any>(this.url + '/pigmy-agent-master/balUpdate/' + this.obj).subscribe(data => {
          this.startingacc = data;

          this.startingAccount = null



        })
        break;

    }
  }
  acCloseDate
  isOpen
  acclosedon: boolean = false
  getAccountDetails(event) {
    this.acCloseDate = event.acClose == null || event.acClose == '' ? null: event.acClose
    this.acclosedon = event.acClose == null || event.acClose == '' ? false : true
    if (this.acCloseDate != null) {
      this.acCloseDate = event.acClose
      this.isOpen = false
    }
    else {
      this.acCloseDate = null
      this.isOpen = true
    }
  }
  schemechange(event) {
  
    this.acCloseDate = null
    this.isOpen = false
  }
  close(){
    this.resetForm()
    this.isOpen = false
  }

  //set open date, appointed date and expiry date

  src: any;
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.ngForm.valid) {

      let obj = this.ngForm.value
      this.showRepo = true;
      let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let endDate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let endDate: any;
      if (this.todate == obj.END_DATE) {
        endDate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        endDate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let scheme = obj.Scheme_code
      let schemeAccountNo = obj.Scheme_acc
      let branch = obj.BRANCH_CODE
      let flag
      if (obj.radio == 'Details') {
        flag = 1;
      }
      else {
        flag = 0;
      }

      this.iframe5url = this.report_url + "examples/BnkAgentPigmyCommDetail1.php?startDate='" + startDate + "'&endDate='" + endDate + "'&scheme='" + scheme + "'&getschemename='" + this.getschemename + "'&flag=" + flag + "&branchName='" + branchName + "'&schemecodeno='" + this.schemecodeno + "'&name='" + this.name + "'&schemeAccountNo='" + schemeAccountNo + "'&acnotype='" + this.acnotype + "'&bankName='" + bankName + "'";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

      // const url = "http://localhost/NewReport/phpjasperxml-master/examples/BalanceBook.php?startDate='"+startDate+"'&endDate='"+endDate+ "'&scheme='" + scheme + "'&schemeAccountNo" + schemeAccountNo +"'&";
      // console.log(url);
      // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }



  // Reset Function
  resetForm() {
    // this.createForm()
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.Scheme_acc.reset();
    this.ngForm.controls.START_DATE.reset();
    this.ngForm.controls.END_DATE.reset();
    // this.ngForm.controls.radio.reset();
    this.showRepo = false;
    this.clicked = false;
  }
}

