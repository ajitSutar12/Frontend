import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-notice-report',
  templateUrl: './notice-report.component.html',
  styleUrls: ['./notice-report.component.scss']
})
export class NoticeReportComponent implements OnInit   {
  isShow:boolean=false
  Noticedate
  RECOVERY_DAYS
  NOTICE_FEE
  isShow1: boolean=false

  Options = ['Loan', 'Deposit'];
  shemeDetails: any
  
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  selectedOption: any;
  noticeType: any;
  noticeType1:any;
  ngForm: FormGroup
  formSubmitted = false;
  showRepo: boolean = false;
  iframe5url: any = '';
  report_url = environment.report_url;
  clicked: boolean = false;
  showLoading: boolean = false;
  constructor(private fb: FormBuilder,private http: HttpClient,private sanitizer: DomSanitizer,) { 
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
 

  createForm() {
    this.ngForm = this.fb.group({
      Loan:['',[Validators.required]],
      Scheme_code: ['', [Validators.required]],
      NOTICE_DATE:['',[Validators.required]],
      Auction_Date:['',[Validators.required]],
      RECOVERY_DAYS:['',[Validators.required]],
      NOTICE_FEE:['',[Validators.required]],
      noticetype:[''],
      from: ['',[Validators.required]],
      to: ['',[Validators.required]],
      Loan_overdue: [false],
    });
  }
  ngOnInit(): void {
    this.createForm()
    this.AddSchemeData();
    this. drop();
  }
  actype
  AddSchemeData() {
    this.http.get('http://192.168.1.157:7276/ledger-view/cschem').subscribe((data: any[]) => {
    // this.http.get('http://' + this.base_url +'/ledger-view/cschem').subscribe((data: any[]) => {

      this.shemeDetails = data.map(item => ({ ...item, isSelected: false }))
      if (this.shemeDetails.length > 0) {
        this.actype = this.shemeDetails[0].id; 
      }
      console.log(this.shemeDetails);
    });
  }
  drop(){
    this.http.post('http://192.168.1.128:7266/notice/getnoticedata',{}).subscribe(
      (data: any) => {
        console.log(data )
      this.noticeType = data
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  show(){
    this.isShow=!this.isShow;
  }
  show1(){
    this.isShow1=!this.isShow1;
  }
  view(event) {
    this.formSubmitted = true;
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      this.showRepo = true;
      let obj = this.ngForm.value
      let edate = moment(obj.END_DATE).format('DD/MM/YYYY');
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let Loan = obj.Loan
      
     
      this.iframe5url = this.report_url + "examples/duebalancesummary.php?date='" + edate +"'&bankName='" + bankName +  "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      // this.iframe5url = this.report_url + "examples/duebalancesummary.php?date='" + edate +"'&branch='" + this.ngbranch  + "'&schemeid=" + myArray + "&branchName='" + this.branchName + "'&bankName=" + bankName + "";
      // console.log(this.iframe5url);
  }
    else {
      this.formSubmitted = false;
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm()

  }
  resetForm() {
    this.ngForm.controls.Scheme_code.reset();
    this.ngForm.controls.Loan.reset();
    this.ngForm.controls.to.reset();
    this.ngForm.controls.from.reset();
    this.ngForm.controls.noticeType.reset();
    this.ngForm.controls.NOTICE_FEE.reset();
    this.ngForm.controls.RECOVERY_DAYS.reset();
    this.ngForm.controls.Auction_Date.reset();
    this.ngForm.controls.NOTICE_DATE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onLoad() {
    this.showLoading = false;

  }
}
