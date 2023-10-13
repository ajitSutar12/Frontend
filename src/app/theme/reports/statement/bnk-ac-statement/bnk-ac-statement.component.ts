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
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-bnk-ac-statement',
  templateUrl: './bnk-ac-statement.component.html',
  styleUrls: ['./bnk-ac-statement.component.scss'],
 providers:[CustomerIDMasterDropdownService,SchemeAccountNoService,SystemMasterParametersService]
})
export class BnkAcStatementComponent implements OnInit {

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  report_url = environment.report_url;
  url = environment.base_url;
  ngBranchCode: any = null;
  branch_code: any;
  formSubmitted = false;
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
    getbankAcNo: any;
    getbankAcNo2: any;
  branchName: any;
  introducerACNo

  fileUrl = this.url + 'examples/AccountStatement1.php'


  constructor(
    private  fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.todate = moment().format('DD/MM/YYYY');
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
    });

    // debugger
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

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchName = result.branch.NAME

    }
    
  }

  createForm(){
    this.angForm = this.fb.group({

      AC_NOFrom: ['', [Validators.required]],
      // AC_NOTo: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_TYPE: ['', ],
      AC_CUSTID: ['', ],
      Customer_Id_Wise:[''],
      // PRINT_ACCOUNT:[''],
      // PRINT_CLOSED:[''],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH'].enable()


    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
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
  getIntTranscus(event) { 
    this.getbankAcNo =  event.bankacno
  }

  getIntTrans1(event) {
    this.getbankAcNo2 =  event.bankacno
    this.getInterestTransfer()
    this.getschemename = event.name
    this.introducerACNo = []
    this.startAcNo = null
  }
 
  getInterestTransfer() {

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // let branchCode = result.branch.id;
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
        })
        break;
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
        })
        break;
        case 'SH':
          this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
            this.introducerACNo = data;
            this.ngAcnoFrom = null
            this.introducerACNo = data;
            this.ngAcnoTo = null
          })
          break;
          case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
            this.ngAcnoFrom = null
            this.introducerACNo = data;
            this.ngAcnoTo = null
        })
        break;
        case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
            this.ngAcnoFrom = null
            this.introducerACNo = data;
            this.ngAcnoTo = null
        })
        break;
        case 'DS':
          this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
            this.introducerACNo = data;
            this.ngAcnoFrom = null
            this.introducerACNo = data;
            this.ngAcnoTo = null
          })
          break;
          case 'CC':
            this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;
              this.ngAcnoFrom = null
              this.introducerACNo = data;
              this.ngAcnoTo = null
            })
            break;
    
          case 'GS':
            this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
            })
            break;
    
          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;
              this.ngAcnoFrom = null
              this.introducerACNo = data;
              this.ngAcnoTo = null
            })
            break;
    
          case 'AG':
            this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
            })
            break;
    
          case 'IV':
            this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;
              this.ngAcnoFrom = null
              this.introducerACNo = data;
              this.ngAcnoTo = null
            })
            break;

    }
  }
 //load acno according start and end acno
//  loadAcno() {
//   this.memFrom = this.angForm.controls['AC_NOFrom'].value
//   // this.memTo = this.angForm.controls['AC_NOTo'].value
//   this.branch = this.angForm.controls['BRANCH'].value
//   if (this.angForm.controls['AC_NOFrom'].value < this.angForm.controls['AC_NOTo'].value) {
//     this.mem = [this.memFrom, this.memTo, this.branch]
//     if (this.getschemename == 'SB') {
//       this.http.get(this.url + '/saving-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'SH') {
//       this.http.get(this.url + '/share-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'LN') {
//       this.http.get(this.url + '/term-loan-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'CC') {
//       this.http.get(this.url + '/cash-credit-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'DS') {
//       this.http.get(this.url + '/dispute-loan-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'TD') {
//       this.http.get(this.url + '/term-deposits-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'AG') {
//       this.http.get(this.url + '/pigmy-agent-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'GL') {
//       this.http.get(this.url + '/gl-account-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'IV') {
//       this.http.get(this.url + '/investment/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'CA') {
//       this.http.get(this.url + '/current-account-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'PG') {
//       this.http.get(this.url + '/pigmy-account-master/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//     else if (this.getschemename == 'GS') {
//       this.http.get(this.url + '/anamat-gsm/balUpdate/' + this.mem).subscribe((data) => {
//       });
//     }
//   }
//   else {
//     Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
//   }
// }

end(){
  this.startfrom = this.angForm.controls['FROM_DATE'].value
  this.startto = this.angForm.controls['TO_DATE'].value
  if (this.angForm.controls['FROM_DATE'].value <= this.angForm.controls['TO_DATE'].value) {
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
  let branchName = userData.branch.NAME

  if (this.angForm.valid) {
    this.showRepo = true;
    let obj = this.angForm.value

    
    // check the conition of the default(syspara) date and date parameter and set the format
    let edate:any;
    if (this.todate == obj.TO_DATE) {
      edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let stadate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    // let edate = moment(obj.TO_DATE).format('DD/MM/YYYY');
    var sdate = moment(obj.FROM_DATE).subtract(1, "day").format('DD/MM/YYYY');
    let branch = obj.BRANCH;
    let scheme = obj.AC_TYPE;
    let fromacc = this.getbankAcNo;
    let toacc = this.getbankAcNo2;
    let custid = obj.AC_CUSTID;
    let custidwise = obj.Customer_Id_Wise;
    let rangewise = obj.Customer_Id_Wise;
    // let print = obj.PRINT_ACCOUNT;
    // let printclose = obj.PRINT_CLOSED;

    this.iframeurl = this.report_url+"examples/AccountStatement1.php?&stadate='" + stadate +"'&edate='" + edate + "'&sdate='"+sdate+"'&branchName="+branchName+"&branchCode='"+branch+"'&scheme='"+scheme+"'&fromacc='"+fromacc+"'&toacc='"+fromacc+"'&custid='"+custid+"'&custidwise='"+custidwise+"'&rangewise='"+rangewise+"'&bankName=" + bankName + "'&AC_ACNOTYPE='" +this.getschemename + "'";
    
    

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
  // this.createForm()
  this.angForm.controls.AC_NOFrom.reset();
  // this.angForm.controls.AC_NOTo.reset();
  this.angForm.controls.AC_TYPE.reset();
  this.angForm.controls.AC_CUSTID.reset();
  this.showRepo = false;
  this.clicked=false;
}


}
