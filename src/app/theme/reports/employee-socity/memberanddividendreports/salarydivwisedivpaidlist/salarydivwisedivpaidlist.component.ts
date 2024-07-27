import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SubSalaryDMasterdropdownService } from 'src/app/shared/dropdownService/subsalary-division-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salarydivwisedivpaidlist',
  templateUrl: './salarydivwisedivpaidlist.component.html',
  styleUrls: ['./salarydivwisedivpaidlist.component.scss']
})
export class SalarydivwisedivpaidlistComponent implements OnInit {
  angForm: FormGroup;
  ngbranch!: any;
  branchOption: any = [];
  s_Div: any = [];
  subsal_div = [];
  schemeList:any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  master: any;
  ngIntroducer: any = null



  getschemename: any;
  ngscheme: any = null;

  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  formSubmitted = false;
  iframe5url: any = '';
  report_url = environment.report_url;
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private subsalarydivisonmasterdropdownservice: SubSalaryDMasterdropdownService,
    public schemeCodeDropdownService: SchemeCodeDropdownService

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      console.log(this.branchOption);
    });

    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
      console.log(this.s_Div);
    })

    this.subsalarydivisonmasterdropdownservice.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.subsal_div = data;
      console.log(this.subsal_div);
    })

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
     
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL' || scheme.name == 'CA'  || scheme.name == 'LK' || scheme.name == 'AG'  || scheme.name == 'IV'  || scheme.name == 'GS' || scheme.name == 'SB'  );
      });
      this.schemeList = filtered;
      this.ngIntroducer = null;
    })

  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      SalDiv: ['', [Validators.required]],
      FSubSalDiv: ['', [Validators.required]],
      TSubSalDiv: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ["", [Validators.required]],


    })
  }
 schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
  }

  getschemevalue
  getname
  branchName
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
    this.getname = event.name
  }

  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let Date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let Date1 = moment(obj.END_DATE).format('DD/MM/YYYY');


      // let radio = obj.SUBMISSION
      let branch = obj.BRANCH;
      let Schemecode = obj.Scheme_code;
      let branchCode = this.getname;
      let scheme_name = this.getschemename;
      let scheme_value = this.ngscheme;

      this.iframe5url = this.report_url + "examples/salarydivisionwisedividendpaidlist.php/?&branchname='" + branchName + "'&Bankname='" + bankName + "'&AC_RECOVERY_CLERK='" + bankName + "'&branch='" + this.ngbranch + "'&sdate='" + Date + "'&branch_Code='" + branchCode +"'&AC_ACNOTYPE='"+scheme_name+"'&AC_TYPE='"+scheme_value+ "'&edate='" + Date1+"'";
      // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm();
    this.showRepo = false;
    this.clicked = false;
  }

  onLoad() {
    this.showLoading = false;

  }

  resetForm() {
    this.angForm.controls.SalDiv.reset();
    this.angForm.controls.FSubSalDiv.reset();
    this.angForm.controls.TSubSalDiv.reset();
    this.angForm.controls.scheme.reset();
    this.angForm.controls['START_DATE'].reset();
    this.angForm.controls['END_DATE'].reset();
    this.showRepo = false;
    this.clicked = false;
  }

}
