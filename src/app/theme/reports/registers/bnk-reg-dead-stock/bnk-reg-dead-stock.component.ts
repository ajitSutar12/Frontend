import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-bnk-reg-dead-stock',
  templateUrl: './bnk-reg-dead-stock.component.html',
  styleUrls: ['./bnk-reg-dead-stock.component.scss'],
  providers: [DeadstockmasterService]
})
export class BnkRegDeadStockComponent implements OnInit {

  iframe3url: any = '';
  report_url = environment.report_url;
  // Created Form Group
  angForm: FormGroup;
  clicked: boolean = false;

  //  variable for validation
  formSubmitted = false;
  showRepo: boolean = false;
  //account
  memFrom
  memTo
  branch
  mem: any
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  ngscheme
  allScheme: any[];
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  selectedCode: any;

  //dropdown

  startingacc: any[];
  endingacc: any[];

  //
  startingAccount: any = null;
  EndingAccount: any = null;

  selectedType
  Types = [
    // { id: 1, name: "All" },
    { id: 2, name: "PUR" },
    { id: 3, name: "SEL" },
    { id: 4, name: "BRK" },
    { id: 5, name: "Gain" },
    { id: 6, name: "Loss" },
    { id: 7, name: "Transfer" },
  ];

  //api
  url = environment.base_url;

  setLang:any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private deadstockmasterService: DeadstockmasterService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService

  ) {

    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      GROUP_BY: ['', ],
      PRINT_NEW_PAGE: [''],

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
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
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
    //dead stock 
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
      this.startingacc = data;
      this.endingacc = data;
      console.log(data)
    })

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
      let startingdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      //  let endingdate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let endingdate: any;
      if (this.todate == obj.END_DATE) {
        endingdate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        endingdate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;
      let groupby = obj.GROUP_BY;

      let checkbox = obj.PRINT_NEW_PAGE;


      this.iframe3url = this.report_url + "examples/DeadStockRegister.php?startingcode='" + startingcode + "'&endingcode='" + endingcode + "'&branchName='" + branchName +"'&branch='" + this.ngBranchCode + "'&startingdate='" + startingdate + "'&endingdate='" + endingdate + "'&groupby='" + groupby + "'&checkbox='" + checkbox + "'&bankName='" + bankName + "' ";
      this.iframe3url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe3url);
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`,`${this.translate.instant('Swal_Msg.Re1')}`, 'warning');
    }

  }

  getschemename
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.angForm.controls['Starting_Account'].value
    this.memTo = this.angForm.controls['Ending_Account'].value
    this.branch = this.angForm.controls['BRANCH_CODE'].value
    // if (this.angForm.controls['Starting_Account'].value < this.angForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]
      if (this.getschemename) {
        this.http.get(this.url + '/dead-stock-master' + this.mem).subscribe((data) => {
        });
      }
    // }else {
    //   Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    // }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    this.angForm.controls.Starting_Account.reset();
    this.angForm.controls.Ending_Account.reset();
    this.angForm.controls.GROUP_BY.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}