import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ReportFrameComponent } from '../../../report-frame/report-frame.component';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-instwise-loanoverdue-list',
  templateUrl: './instwise-loanoverdue-list.component.html',
  styleUrls: ['./instwise-loanoverdue-list.component.scss']
})
export class InstwiseLoanoverdueListComponent implements OnInit {
  angForm : FormGroup;
  iframe5url: any = '';

  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
  url = environment.base_url;
  
  showRepo: boolean = false;
  showLoading: boolean = false;
 
  report_url = environment.report_url;
  formSubmitted: boolean =false;
  fromdate: any;
  todate: any;
  clicked: boolean = false;
  tab: any;
  tscheme: any;

  ngForm: FormGroup
  ngbranch: any = null;
  branchName: any;
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,

  ) { this.systemParameter.getFormData(1).subscribe(data => {
    
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
  })}

  //checkbox variable
  isIsRestrictTransactionEntry: boolean = false;

  //ngfor variable
  schemeCode
  branchCode

  //ngmodel variable
  selectedscheme
  selectedbranch

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchCode = data;
      
    })

     // Scheme Code
     this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (schemeCode) {
        return (schemeCode.name == 'LN' || schemeCode.name == 'CC' || schemeCode.name == 'DS');
      });
      this.schemeCode = filtered;
      //console.log(this.scheme);

    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }

  }
  getscheme(event){
    this.tscheme = event.value
    

  }

  onLoad() {
    this.showLoading = false;

  }

  createForm(){
    this.angForm = this.fb.group({
      branch: ['',[Validators.required]],
      scheme: ['',[Validators.required]],
      date: ['',[Validators.required]],
      checkActive1: [false],
      checkActive2: [false],
    
    });
  }

  view(event) {
    console.log("hello");
    


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }

      //for end date
      if (this.todate == userData.branch.syspara.CURRENT_DATE) {
        obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.todate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['END_DATE'] = date
      }
     
    

      

  
     
      let scheme = obj.scheme;
      let branchs = obj.branch;
      let schemeName =this.tscheme
    
      let Dates = moment(obj.date).format('DD/MM/YYYY');

      let flag = obj.checkActive1;
      if (flag == true) {
        flag = '1'


      } else {
        flag = '0'


      }

      // this.iframe5url = this.report_url + "examples/AccountWiseLoanOverDueList.php?AC_TYPE=" + schemeName + "&BRANCH_CODE=" + branch + "&FIRST_NO='" + Acno1 + "'&SECOND_NO='" + Acno2 + "'&FLAG=" + flags + "&LIST=" + list + "&DUEINSTALLMENTFROM=" + minvalue + "&DUEINSTALLMENTO=" + maxvalue + "&BranchName='" + this.branchName + "'&schemeCode='" + scheme + "'&date1='" + Dates + "'&bankName='" + bankName + "'";


      
      this.iframe5url = this.report_url + "examples/InstallmentWiseOverDue.php?AC_TYPE="+schemeName+"&BRANCH_CODE="+  this.ngbranch+"&FLAG="+flag+"&BranchName='"+branchName+"'&schemeCode='"+scheme+"&bankName='"+bankName+"'";

    


      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(() => { this.clicked = false });
    }
  }

}
