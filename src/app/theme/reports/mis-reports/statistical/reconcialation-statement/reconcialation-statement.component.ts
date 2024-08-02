import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reconcialation-statement',
  templateUrl: './reconcialation-statement.component.html',
  styleUrls: ['./reconcialation-statement.component.scss']
})
export class ReconcialationStatementComponent implements OnInit {
  angForm: FormGroup;
  branchOption:any[]=[];
  scheme:any=[];
  isIsRestrictTransactionEntry: boolean = false;

  S_Date:string
  E_Date:string

  maxDate: Date;
  minDate: any;
  bsValue = new Date();

  
  iframe5url: any = '';
  report_url = environment.report_url;
  showLoading: boolean = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  formSubmitted: boolean = false;
  branchName: string;
  ngbranch: string;
  bankacno;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,
    private sanitizer: DomSanitizer

  ) {
    this.S_Date = moment().format('DD/MM/YYYY');
    this.E_Date = moment().format('DD/MM/YYYY');

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }

  ngOnInit(): void {
    this.createForm()
   
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'SH' || scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS' || scheme.name == 'TD' || scheme.name == 'AG' || scheme.name == 'GL' || scheme.name == 'IV' || scheme.name == 'CA' || scheme.name == 'PG' || scheme.name == 'GS');
      });
      this.scheme = allscheme;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    Scheme: ['', [Validators.required]],
    AcNo: ['', [Validators.required]],
    S_Date: ['', [Validators.required]],
      E_Date: ['', [Validators.required]],
      checkActive: [false],

    })
  }
  getschemename;
  schemenm;
  actype;
  label
  getIntTrans(event) { 
    this.getschemename = event.name
    this.schemenm =event.value
    this.actype = event.id
    this.label = event.label
    this.getInterestTransfer()
  }
  getacno(event){
    this.bankacno = event.bankacno
  }
  ngscheme:any;
  ngBranchCode:any;
  obj:any;
  introducerACNo:any=[];
  ngAcnoTo: any = null
  ngAcnoFrom: any = null


  getInterestTransfer(){
    this.obj = [ this.schemenm, this.ngbranch]
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
          console.log(this.introducerACNo);
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
  view(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      let fromDate = moment(obj.S_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.E_Date).format('DD/MM/YYYY');
      let branch = obj.BRANCH_CODE
      let schemename =this.getschemename
      let actype = this.actype
      let value =this.schemenm
      let scheme = this.label
      let check =obj.checkActive
      // let type = obj.type
      // let Rdio = obj.SUBMISSION
    //  



      this.iframe5url = this.report_url + "examples/reconsStatement.php?startDate='" + fromDate + "'&endDate='" + toDate  + "'&schemename='" + schemename + "'&check='" + check + "'&branchName='" + branchName  + "'&branchcode='" + this.ngbranch +  "&bankName=" + bankName + "'&actype='" + actype + "'&value='" + value +"'&scheme='" + scheme +"'&bankacno='" + this.bankacno +"";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  onLoad() {
    this.showLoading = false;
  
  }
  reset() {
    this.angForm.controls['E_Date'].reset()
    this.angForm.controls['S_Date'].reset()
    this.angForm.controls['AcNo'].reset()
    this.angForm.controls['Scheme'].reset()

   }
   close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }
}
