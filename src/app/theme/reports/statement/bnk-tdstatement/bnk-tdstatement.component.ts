import { Component, OnInit } from "@angular/core";
import { NgSelectConfig } from '@ng-select/ng-select'
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-tdstatement',
  templateUrl: './bnk-tdstatement.component.html',
  styleUrls: ['./bnk-tdstatement.component.scss'],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService]
})
export class BnkTDStatementComponent implements OnInit {

  ngForm: FormGroup;
  maxDate: Date;
  minDate: Date;
  startingdate: any = null
  endingdate: any = null

  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  // for dropdown ng module
  report_url = environment.report_url;
  iframeurl: any = ' ';
  clicked:boolean=false;

  formSubmitted = false;
  showRepo: boolean = false;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;
  ngbranch: any;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private sanitizer: DomSanitizer,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private systemParameter: SystemMasterParametersService,

  ) {
    this.endingdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SB' 
        // || scheme.name == 'GS' || scheme.name == 'AG'
        );
      });
      this.scheme = filtered;

    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.endingdate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.endingdate = data.CURRENT_DATE
      
      this.startingdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.startingdate = this.startingdate._d
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }

  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      Scheme_code: ['', [Validators.required]],
      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      Starting_Date: [''],
      Ending_Date: [''],
      Print_Every_Account_on_New_Page: [''],
      Print_Closed_Account: [''],
    });
  }

  //For Starting account and Ending Account dropdown
  getschemename: any

  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }


  getIntroducer() {
    
    debugger
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {

      case 'SB':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.startingacc = data;
          this.startingAccount = null
          this.endingacc = data;
          this.EndingAccount = null

        })
        break;

      // case 'GS':
      //   this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
      //     this.startingacc = data;
      //     this.startingAccount = null
      //     this.endingacc = data;
      //     this.EndingAccount = null
      //   })
      //   break;

      // case 'AG':
      //   this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
      //     this.startingacc = data;
      //     this.startingAccount = null
      //     this.endingacc = data;
      //     this.EndingAccount = null
      //   })
      //   break;
    }
  }

  src: any;
  View(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      
      let stdate = moment(obj.Starting_Date).format('DD/MM/YYYY');
      // let END_DATE =  moment(obj.Ending_Date).format('DD/MM/YYYY');

      let END_DATE:any;
      if (this.endingdate == obj.Ending_Date) {
        END_DATE = moment(this.endingdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        END_DATE = moment(this.endingdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      var sdate = moment(obj.Starting_Date).subtract(1, "day").format('DD/MM/YYYY');
      let Scheme_code = obj.Scheme_code;
      let Starting_Account = obj.Starting_Account;
      let Ending_Account = obj.Ending_Account;
      let print1 = obj.Print_Every_Account_on_New_Page;
      let print2 = obj.Print_Closed_Account;

      this.iframeurl = this.report_url+"examples/TermDepositeStatement.php?stdate='" + stdate + "'&END_DATE='" + END_DATE +"'&sdate='"+sdate+ "'&Scheme_code=" + Scheme_code + "&Starting_Account=" + Starting_Account + 
                       "&Ending_Account=" + Ending_Account + "&print1='" + print1 + "'&print2='" + print2 + "'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  close() {
    this.resetForm()
  }

 resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
