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
  selector: 'app-bnk-pigmy-balance-book',
  templateUrl: './bnk-pigmy-balance-book.component.html',
  styleUrls: ['./bnk-pigmy-balance-book.component.scss']
})
export class BnkPigmyBalanceBookComponent implements OnInit {
  
  code: any;
  
  schemeType: any;
  branch_code
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  clicked:boolean=false;
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
 
  
  
  //Dropdown option variable
 
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
      FROM_DATE: ["", [Validators.pattern, Validators.required]],
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      Scheme_acc: ["", [Validators.pattern, Validators.required]],
    });
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
        return (scheme.name == 'AG');
      });
      this.scheme = filtered;

    })
   
  }
  //For Starting account and Ending Account dropdown
  getschemename: any

  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }


  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null

         
         
        })
        break;

    }
  }




  //get account no according scheme
   
  src: any;
  view(event) {
  
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
    // let date =  moment(obj.DATE).format('DD/MM/YYYY');
    let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    let scheme = obj.Scheme_code
    let branch = obj.BRANCH_CODE
    let schemeAccountNo  = obj.Scheme_acc
    this.iframe5url=this.report_url+"examples/AgentwsPigmyBalanceBook.php?date='" + date + "'&scheme='" + scheme + "'&branchName='"+ branchName +"&schemeAccountNo=" + schemeAccountNo +"&bankName='" + bankName + "'" ;
    this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    
   
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
  this.createForm()
  this.showRepo = false;
  this.clicked=false;
}
}
