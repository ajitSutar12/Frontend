import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import { data } from 'jquery';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-due-certificate',
  templateUrl: './loan-due-certificate.component.html',
  styleUrls: ['./loan-due-certificate.component.scss']
})
export class LoanDueCertificateComponent implements OnInit {

  ngForm:FormGroup
  branchOption: any[];
  scode: any = null;
  shemeDetails: any
  Accnumber
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  accdetails: any[];
  showRepo: boolean = false;
  clicked:boolean=false;
  iframe5url:any='';
  showLoading:boolean = false;
  ngbranch: any;
  formSubmitted = false;  
  selectedmemNo
  base_url=environment.base_url;
  report_url = environment.report_url;
  constructor(private fb: FormBuilder,private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,private http: HttpClient, private sanitizer: DomSanitizer,) { 
    this.todate = moment().format('DD/MM/YYYY');
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1); 
      this.maxDate.setDate(this.maxDate.getDate())
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: [''],
      date: [''],
      Acno: [''],
      END_DATE:['']
    });
   
  }
  ngOnInit(): void {
    this.createForm()
    this.AddSchemeData()
    // this.account()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
   })
   this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    // this.fromdate = `01/04/${year - 1}`      
    this.todate = data.CURRENT_DATE

    this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
    this.fromdate = this.fromdate._d
  })
  }
  actype
  AddSchemeData() {
    // this.http.get('http://192.168.1.113:7276/ledger-view/cschem').subscribe((data: any[]) => {
    this.http.get(this.base_url +'/ledger-view/cschem').subscribe((data: any[]) => {

      this.shemeDetails = data.map(item => ({ ...item, isSelected: false,S_NAME: item.S_NAME }))
      if (this.shemeDetails.length > 0) {
        this.actype = this.shemeDetails[0].id; 
      }
      console.log(this.shemeDetails);
    });
  }
  
  account() {
    let acty=
    {
      'name':this.schemename
    }
    console.log(acty)
    // this.http.post('http://192.168.1.121:3002/term-loan-master/getcloseaccts',acty).subscribe((data: any[]) =>{
      this.http.post(this.base_url +'/term-loan-master/getcloseaccts',acty).subscribe((data: any[]) => {
      this.accdetails = data
      console.log(this.accdetails);
    });
  }
  detail
  schemename
  acc
  AC_TYPE
  BANKACNO
  getEvent(event){
    this.schemename=event.S_NAME
    this.AC_TYPE=event.id
    this.account()
  }
  getEvent1(event){
this.acc=event.AC_NO
this.BANKACNO=event.BANKACNO
this.getDate(event)
  }
  date
  getDate(event){
    this.date=event.DATE
  }
  view(event:any) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if(this.ngForm.valid){

   this.showRepo = true;
    let obj = this.ngForm.value
    let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

    // let edate: any;
    if (this.todate == obj.END_DATE) {
      edate = moment(this.todate, 'DD/MM/YYYY').format('DD MMM YYYY')
    } else {
      edate = moment(this.todate, 'DD/MM/YYYY').format('DD MMM YYYY')
    };
  
   
  let scheme = this.schemename
  let branch = obj.BRANCH_CODE;
  let accno=this.acc
  let AC_TYPE=this.AC_TYPE
  let branchName = userData.branch.NAME;
  let bankName = userData.branch.syspara.BANK_NAME;

let BANKACNO=this.BANKACNO

  this.iframe5url=this.report_url+ "examples/NoDueCertificate.php?Scheme='"+scheme+"'&BRANCH_CODE="+this.ngbranch+"&AccountNo="+accno+"&date='" + edate +"'&AC_TYPE=" + AC_TYPE +"&BANKACNO='" + BANKACNO +"'&branchName='" + branchName +"'&bankName='" + bankName +"'";
  console.log(this.iframe5url);  
   this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url); 
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  }
  close(){
    this.resetForm()

  }
  onLoad(){
    this.showLoading = true;

  }
  resetForm() {
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.Acno.reset();
  this.ngForm.controls.END_DATE.reset();

    this.showRepo = false;
    this.clicked=false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getBranch(event) {
    this.ngbranch = event.value
    // this.branchName = event.branchName
  }
}
