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

@Component({
  selector: 'app-bnk-lnamount-movement-detail',
  templateUrl: './bnk-lnamount-movement-detail.component.html',
  styleUrls: ['./bnk-lnamount-movement-detail.component.scss']
})
export class BnkLNAmountMovementDetailComponent implements OnInit {

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
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate();

    this.dataSub = this.SchemeTypes.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD' || scheme.name == 'PG');
      });
      this.schemeList = filtered;

    })

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      START_DATE: ["", [Validators.pattern, Validators.required]],
      END_DATE: ["", [Validators.pattern, Validators.required]],
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      S_ACNOTYPE: ["", [Validators.pattern, Validators.required]],
      AMT_FROM: ["", [Validators.pattern, Validators.required]],
      AMT_TO: ["", [Validators.pattern, Validators.required]],
    });
  }


  src: any;
  submit(event) {
    debugger
    // this.showRepo = true;
    let obj = this.angForm.value
    let startDate = moment(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
    let enddate = moment(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
    let scheme = obj.S_ACNOTYPE
    const url = "http://localhost/NewReport/report-code/Report/examples/LoanCashAmt.php?startDate='" + startDate + "'&enddate='" + enddate + "'&scheme='" + scheme + "'&";
    console.log(url);
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    window.open(url, '_blank');
  
    event.preventDefault();
    this.formSubmitted = true;
    //To clear form
    // this.resetForm();
    this.formSubmitted = false;
    // }
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


  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }
}
