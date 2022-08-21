import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
// import { DepositLoanInterestRateEditChangeService } from './deposit-loan-interest-rate-edit-change.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
// Service File For Handling CRUD Operation
// import { ShareMasterService } from '././././././././shares-master.service'
import { Router } from "@angular/router";
import { CustomerIdService } from '../../../master/customer/customer-id/customer-id.service';
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';

@Component({
  selector: 'app-bnk-ac-statement',
  templateUrl: './bnk-ac-statement.component.html',
  styleUrls: ['./bnk-ac-statement.component.scss'],
 providers:[CustomerIDMasterDropdownService,SchemeAccountNoService]
})
export class BnkAcStatementComponent implements OnInit {

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  ngBranchCode: any = null;
  branch_code: any;
  schemeCode: any = null;
  getschemename: any;
  allScheme: any = null
  newcustid: any = null;
  Cust_ID: any[] //customer id from idmaster
  fromdate:any=null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  todate: any = null;
  report_url = environment.report_url
    //dropdown ngmodel variables
    ngscheme: any = null
    ngAcnoFrom: any = null
    startAcNo: any
    ngAcnoTo: any = null
    endAcNo: any
    obj: any
    mem: any
    equal:any
    memFrom
    startfrom
    memTo
    startto
    branch
    scheme
    iframeurl: any = ' ';
    clicked:boolean=false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe((data) => {
      this.Cust_ID = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'SH' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS' || scheme.name == 'TD' || scheme.name == 'AG' || scheme.name == 'GL' || scheme.name == 'IV' || scheme.name == 'CA' || scheme.name == 'PG' || scheme.name == 'GS');
      });
      this.scheme = allscheme;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }

  createForm(){
    this.angForm = this.fb.group({

      AC_NOFrom: ['', [Validators.required]],
      AC_NOTo: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_CUSTID: ['', [Validators.required]],
      Customer_Id_Wise:[''],
      PRINT_ACCOUNT:[''],
      PRINT_CLOSED:[''],
    })
  }
 
  //function to get ac no according branch
  getBranch() {
    this.getInterestTransfer()
  }
  //get acnotype from selected scheme
  getIntTrans(event) {
    this.getschemename = event.name
    this.getInterestTransfer()
  }

  //fetch acno list according scheme and branch code
  getInterestTransfer() {
    // this.ngAcnoFrom = null
    // this.ngAcnoTo = null
    // this.startAcNo = [];
    // this.endAcNo = [];
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.ngscheme, branchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatMasterAcListForBalUpdation(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

    }
  }

 //load acno according start and end acno
 loadAcno() {
  this.memFrom = this.angForm.controls['AC_NOFrom'].value
  this.memTo = this.angForm.controls['AC_NOTo'].value
  this.branch = this.angForm.controls['BRANCH'].value
  if (this.angForm.controls['AC_NOFrom'].value < this.angForm.controls['AC_NOTo'].value) {
    this.mem = [this.memFrom, this.memTo, this.branch]
    if (this.getschemename == 'SB') {
      this.http.get(this.url + '/saving-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'SH') {
      this.http.get(this.url + '/share-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'LN') {
      this.http.get(this.url + '/term-loan-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'CC') {
      this.http.get(this.url + '/cash-credit-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'DS') {
      this.http.get(this.url + '/dispute-loan-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'TD') {
      this.http.get(this.url + '/term-deposits-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'AG') {
      this.http.get(this.url + '/pigmy-agent-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'GL') {
      this.http.get(this.url + '/gl-account-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'IV') {
      this.http.get(this.url + '/investment/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'CA') {
      this.http.get(this.url + '/current-account-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'PG') {
      this.http.get(this.url + '/pigmy-account-master/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'GS') {
      this.http.get(this.url + '/anamat-gsm/balUpdate/' + this.mem).subscribe((data) => {
      });
    }
  }
  else {
    Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
  }
}

end(){
  this.startfrom = this.angForm.controls['START_DATE'].value
  this.startto = this.angForm.controls['END_DATE'].value
  if (this.angForm.controls['START_DATE'].value <= this.angForm.controls['END_DATE'].value) {
    this.equal = [this.startfrom, this.startto]
  }
  else {
    Swal.fire('Info', 'Ending Date Must Greater Than/Equal To Starting  Date', 'info')
  }
}

View(event) {

  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;

  if (this.angForm.valid) {
    this.showRepo = true;
    let obj = this.angForm.value
    let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let edate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let branched = obj.BRANCH;
    let schemes = obj.AC_TYPE;
    let fromacc = obj.AC_NOFrom;
    let toacc = obj.AC_NOTo;
    let custid = obj.AC_CUSTID;
    let custidwise = obj.Customer_Id_Wise;
    let rangewise = obj.Customer_Id_Wise;
    let print = obj.PRINT_ACCOUNT;
    let printclose = obj.PRINT_CLOSED;

    this.iframeurl = this.report_url + "/AccountStatement.php?stadate='" + stadate +"'&edate='"+edate+"'&branched='"+branched+"'&schemes='"+schemes+"'&fromacc='"+fromacc+"'&toacc='"+toacc+"'&custid='"+custid+"'&custidwise='"+custidwise+"'&rangewise='"+rangewise+"'&print='"+print+"'&printclose='"+printclose+"'&bankName='" + bankName + "' ";
    this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

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
