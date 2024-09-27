import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ReportFrameComponent } from '../../report-frame/report-frame.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tddetail-recurr-overdue',
  templateUrl: './tddetail-recurr-overdue.component.html',
  styleUrls: ['./tddetail-recurr-overdue.component.scss']
})
export class TddetailRecurrOverdueComponent implements OnInit {
  iframe5url: any = '';
  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  formSubmitted = false;

  ngForm: FormGroup

  //ngModel
  branch
  scode

  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme


  //date
  dates: any = null
  maxDate: Date;
  minDate: Date;

  report_url = environment.report_url;
  ngbranch: any;
  branchName: any;
  setLang: any;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private translate:TranslateService


  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {

    this.createForm()

    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => { 

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');
      });
      this.scheme = filtered;

      this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        this.dates = data.CURRENT_DATE;
      });
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.branch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.branch = result.branch.id
      this.branchName = result.branch.NAME
    }
  }

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.label
    this.tScheme = event.name
  }

  createForm() {

    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ["", [Validators.required]],
      DATE: ['', [Validators.required]],
      Show_Only_Top:[]

    });

  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value

      if(this.dates == userData.branch.syspara.CURRENT_DATE)
      {
        obj['DATE'] =userData.branch.syspara.CURRENT_DATE
      }
      else{
      let date = moment(this.dates).format('DD/MM/YYYY');
      let toDate = moment(date, 'DD/MM/YYYY')
      obj['DATE']=date
    }
      let scheme = obj.Scheme_code
      let branch = obj.BRANCH_CODE;
      let schemeName = this.tScheme
      let flag = obj.Show_Only_Top;

      if(flag == null || flag == false){
        flag = 0;
      }else{
        flag = 1;
      }

      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account; 

      this.iframe5url = this.report_url + "examples/recurring_overdue.php?&Branch='" + this.branchName + "'&BankName='" + bankName + "'&branch_code='" + branch + "'&edate='" + obj.DATE + "'&AC_ACNOTYPE='"+ schemeName + "'&AC_TYPE='" + scheme + "'&flag1=" + flag + "";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(() => { this.clicked = false });
    }
  }
  close() { 
    this.resetForm() 

  }
  onLoad() {
    this.showLoading = false;

  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) { 
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}
