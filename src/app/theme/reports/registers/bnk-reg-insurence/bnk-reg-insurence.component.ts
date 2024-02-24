import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
// import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-bnk-reg-insurence',
  templateUrl: './bnk-reg-insurence.component.html',
  styleUrls: ['./bnk-reg-insurence.component.scss']
})
export class BnkRegInsurenceComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;
  clicked:boolean=false;
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  ngscheme
  allScheme: any[];
  showRepo: boolean = false;
  url = environment.base_url;
  iframe3url: any = ' ';
  report_url = environment.report_url;

  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();

  selectedType
  Types = [
    { id: 1, name: "None" },
    { id: 2, name: "City" },
    { id: 2, name: "Cast" },
    { id: 2, name: "Occupation" },
    { id: 2, name: "Category" },
    { id: 2, name: "Operation" },
    { id: 2, name: "Interest Category" },
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter:SystemMasterParametersService,
    //  private schemeAccountNoService: SchemeAccountNoService,
    private translate:TranslateService

  ) {
    this.translate.setDefaultLang(environment.setLang) ;

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      //  ACOPEN:  new FormControl('ACOPEN'),
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      //  GROUP_BY: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.createForm()

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS')
      });
      this.allScheme = allscheme;
    })

    // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
    //   this.allScheme.push(data)
    // })


  }

  src: any;
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');

  let enddate:any;
  if (this.todate == obj.END_DATE) {
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  }else{ 
    enddate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  };

      let BRANCH_CODE = obj.BRANCH_CODE;
      let AC_TYPE = obj.AC_TYPE;
      let ACOPEN = obj.ACOPEN;

      this.iframe3url = this.report_url+"examples/InsuranceRegister.php?startDate='" + startDate + "'&enddate='" + enddate + "'&BRANCH_CODE='" + this.ngBranchCode + "'&AC_TYPE='" + AC_TYPE + "'&ACOPEN='" + ACOPEN + "'&bankName='" + bankName + "'&branchName="+branchName;
      console.log(this.iframe3url);
      this.iframe3url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe3url);

      // let ageCaldate
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.angForm.controls.BRANCH_CODE.reset();
    this.angForm.controls.AC_TYPE.reset();    
    this.showRepo = false;
    this.clicked=false;
  }
}
