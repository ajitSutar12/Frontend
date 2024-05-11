import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject } from "rxjs";
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
import { first } from "rxjs/operators";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-bnk-instructions-standing-debit',
  templateUrl: './bnk-instructions-standing-debit.component.html',
  styleUrls: ['./bnk-instructions-standing-debit.component.scss']
})
export class BnkInstructionsStandingDebitComponent implements OnInit {
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  clicked:boolean=false;

  iframe1url: any = ' ';
  equal: any
  startfrom
  startto
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;

  selectedType
  Types = [
    { id: 1, name: "S", value: "Success" },
    { id: 2, name: "F", value: "Failure" },
  ];

  selectedSorting
  SortingOn = [
    { id: 1, name: "Debit Scheme" },
    { id: 2, name: "Credit Scheme" },
  ];

  sorton
  sort = [
    { id: 1, value: "Debit" },
    { id: 2, value: "Credit" },
  ]
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    private translate:TranslateService

  ) {

    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['Branch'].enable()
    }
    else {
      this.angForm.controls['Branch'].disable()
      this.ngbranch = result.branch.id
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      RADIO: new FormControl ('success'),
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      SORT: ["", [Validators.required]],
      NEWPAGE: ["", [Validators.required]],
    })
  }

  end() {
    this.startfrom = this.angForm.controls['START_DATE'].value
    this.startto = this.angForm.controls['END_DATE'].value
    if (this.angForm.controls['START_DATE'].value <= this.angForm.controls['END_DATE'].value) {
      this.equal = [this.startfrom, this.startto]
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, `${this.translate.instant('Swal_Msg.I_Msg5')}`, 'info')
    }
  }

  view(event) {
    debugger
    this.formSubmitted = true;
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

   if (this.angForm.controls['RADIO'].value=="success" && this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let edate:any;
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branched = obj.BRANCH_CODE;
      let success = obj.RADIO;
      let frequency = obj.FREQUENCY;
      let startscheme = obj.NEWPAGE;
      let sort = obj.SORT;
      this.iframe1url = this.report_url+"examples/standinstructlogSucess.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&success='" + success + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
    }
    else if (this.angForm.controls['RADIO'].value=="failure" && this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let edate:any;
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      // let edate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
      let branched = obj.BRANCH_CODE;
      let failure = obj.RADIO;
      let frequency = obj.FREQUENCY;
      let startscheme = obj.NEWPAGE;
      let sort = obj.SORT;

      this.iframe1url = this.report_url+"examples/standinstructlogFailure.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&failure='" + failure + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&sort='" + sort + "'&bankName='" + bankName + "'";
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
    }
    else {
      this.formSubmitted = false;
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    }

  }
  close() {
    this.resetForm()
  }
 resetForm() {
    // this.createForm()
    this.angForm.controls.SORT.reset();
    this.angForm.controls.RADIO.reset()
    this.showRepo = false;
    this.clicked=false;
  }

}

