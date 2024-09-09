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
// dropdown
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first, reduce } from "rxjs/operators";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-instructions-interest-debit',
  templateUrl: './bnk-instructions-interest-debit.component.html',
  styleUrls: ['./bnk-instructions-interest-debit.component.scss']
})
export class BnkInstructionsInterestDebitComponent implements OnInit {
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  iframe1url: any = ' ';
  clicked:boolean=false;
  // selectedType
  // Types = [
  //   { id: 1, name: "S", value: "Success" },
  //   { id: 2, name: "F", value: "Failure" },
  // ];
  sorton
  sort = [
    { id: 1, value: "Debit" },
    { id: 2, value: "Credit" },
  ]
  selectedSorting
  SortingOn = [
    { id: 1, name: "Debit Scheme" },
    { id: 2, name: "Credit Scheme" },
  ];

  selectedFrequency
  SortingFrequency = [
    { id: 1, name: "Monthly" },
    { id: 2, name: "Querterly" },
    { id: 3, name: "Fixed Querterly" },
    { id: 4, name: "Half Yearly" },
    { id: 5, name: "None" },
  ];
  RADIO: any;
  // SUCCESS: any;
  // FAILURE: any;
  // value: string;
  success:any;
  failure:any;
  branchName: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private systemParameter : SystemMasterParametersService,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
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
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      // SORT: ["", [Validators.required]],
      FREQUENCY: ["", [Validators.required]],
      NEWPAGE: [""],
      RADIO: new FormControl('success'),
      // FAILURE: [""],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  end() {
    // this.startfrom = this.angForm.controls['START_DATE'].value
    // this.startto = this.angForm.controls['END_DATE'].value
    // if (this.angForm.controls['START_DATE'].value <= this.angForm.controls['END_DATE'].value) {
    //   this.equal = [this.startfrom, this.startto]
    // }
    // else {
    //   Swal.fire('Info', 'Ending Date Must Greater Than/Equal To Starting  Date', 'info')
    // }
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
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
      let flag = obj.FREQUENCY;
      let frequency: string;

      if(flag == 'Monthly')
      {
        frequency = 'M'
      }
      else if(flag == 'Querterly')
      {
        frequency = 'Q'
      }
      else if(flag == 'Fixed Querterly')
      {
        frequency = 'F'
      }else if(flag == 'Half Yearly')
      {
        frequency = 'H'
      }else if(flag == 'None')
      {
        frequency = 'None'
      }


      let startscheme = obj.NEWPAGE;
      // let sort = obj.SORT.value;

      // if(sort == null || sort==false){
      //   sort = 'Debit';
      // }else{
      //   sort = 'Credit';
      // }

      this.iframe1url = this.report_url+"examples/intinstructionslogSuccess.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&success='" + success + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&bankName='" + bankName + "'&branchName='"+branchName+"'";
      console.log(this.iframe1url);
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

      let branched = obj.BRANCH_CODE;
      let failure = obj.RADIO;
      let frequency = obj.FREQUENCY;
      let startscheme = obj.NEWPAGE;
      // let sort = obj.SORT;

      this.iframe1url = this.report_url+"examples/intinstructionslogFailure.php?stadate='" + stadate + "'&edate='" + edate + "'&branched='" + branched + "'&success='" + failure + "'&frequency='" + frequency + "'&startscheme='" + startscheme + "'&bankName='" + bankName + "'&branchName='"+this.branchName+"'";
      console.log(this.iframe1url);
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
    }
    else {
      this.formSubmitted = false;
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  close() {
    this.resetForm()
  }
 resetForm() {
    // this.createForm()
    this.angForm.controls.FREQUENCY.reset();
    this.showRepo = false;
    this.clicked=false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }



}

