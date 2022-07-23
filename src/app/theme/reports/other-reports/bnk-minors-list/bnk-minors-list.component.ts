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
  selector: 'app-bnk-minors-list',
  templateUrl: './bnk-minors-list.component.html',
  styleUrls: ['./bnk-minors-list.component.scss']
})
export class BnkMinorsListComponent implements OnInit {

  formSubmitted = false;
  //Dropdown option variable
  branchOption: any;
  ngbranch: any = null;
  ngscheme: any = null;
  ngacno: any = null;
  ACNo: any;
  defaultDate: any
  //title select variables
  // schemetype: Array<IOption> = this.SchemeTypes.get_CAPGSBTD_Characters();

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

   // Date variables
   todate: any = null;
   fromdate:any=null
   maxDate: Date;
   minDate: Date;
   bsValue = new Date();
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
    this.minDate.setDate(this.minDate.getDate());
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
        return (scheme.name == 'CA' || scheme.name == 'PG'||scheme.name == 'SB' || scheme.name == 'TD');
      });
      this.schemeList = filtered;

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
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      S_ACNOTYPE: ["", [Validators.pattern, Validators.required]],
      MINAGECAl_DATE: ["", [Validators.pattern, Validators.required]],

    });
  }


  src: any;
  reportWindow 
  submit(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;
    if (this.angForm.valid) {
    // this.showRepo = true;
    let obj = this.angForm.value
    let date =obj.MINAGECAl_DATE==this.defaultDate?obj.MINAGECAl_DATE: moment(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
    console.log(date);
    let scheme = obj.S_ACNOTYPE
    let Branch = obj.BRANCH_CODE
    const url = "http://localhost/NewReport/report-code/Report/examples/MinorList.php?startDate='"+date+"'&scheme='"+scheme+"'&Branch='"+Branch+"'&";
    console.log(url);
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
    this.reportWindow=window.open(url, '_blank');
    // let ageCaldate
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }



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
    this.reportWindow=window.close();
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }
}
