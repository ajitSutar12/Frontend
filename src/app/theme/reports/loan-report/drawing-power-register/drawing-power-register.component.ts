import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drawing-power-register',
  templateUrl: './drawing-power-register.component.html',
  styleUrls: ['./drawing-power-register.component.scss']
})
export class DrawingPowerRegisterComponent implements OnInit {
  // [x: string]: any;
  angForm: FormGroup;
  ngbranch!: any;
  branchOption: any = [];
  formSubmitted = false;
  ngscheme: any = null;
  scheme;
  scode
  iframe5url: any = '';
  report_url = environment.report_url;
  schemeType;
  getschemename: any;
  todate: any = null;
  fromdate: any = null;
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  showLoading: boolean;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,) {
    this.fromdate = moment().format('DD/MM/YYYY');
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
    });
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      // AC_TYPE: ['', [Validators.required]],
      // AC_TYPE1: ['', [Validators.required]],
      // Starting_Account: ['', [Validators.required]],
      // Ending_Account: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],

    });
  }
  // getIntro(event) {
  //   this.getschemename = event.name
  //   this.getIntroducer()
  // }
  // getIntroducer() {
  //   throw new Error('Method not implemented.');
  // }
  end() { }
  transferSchemeDetails: any;
  tScheme
  schemeid
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.label
this.schemeid = event.id

  }
  clicked: boolean = false;
  showRepo: boolean = false;
  resetForm() {
    this.angForm.controls.START_DATE.reset();
    this.angForm.controls.END_DATE.reset();
    this.angForm.controls.Scheme_code.reset();
    this.showRepo = false;
    this.clicked = false;
  }

  view(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      this.showRepo = true;
      let Date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let Date1 = moment(obj.END_DATE).format('DD/MM/YYYY');

      let branch = obj.BRANCH
      let schemeName = this.tScheme;
      let schemeID = this.schemeid;
      // let rowArray  = this.selectedRows


// debugger

      this.iframe5url = this.report_url + "examples/Drawing_power_register.php/?startDate='" + Date
        + "'&eDate='" + Date1 + "'&Scheme=" + schemeName + "&schemeid=" + schemeID
        + "&branchName=" + branchName + "&bankName=" + bankName + "";



      // &branchname='" + branchName 
      // +"'&sdate='"+ Date +"'&bankName='"+ bankName +"'&AC_RECOVERY_CLERK='"+ bankName +"'&branch='"+ this.ngbranch +"'" +"'&edate='"+ Date1+ "'&Scheme='"+ schemeName +"'";
      // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm()
  }
  onLoad() {
    this.showLoading = false;

  }
}
