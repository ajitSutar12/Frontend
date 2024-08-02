import { HttpClient } from '@angular/common/http';
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
  selector: 'app-gold-silver-stock',
  templateUrl: './gold-silver-stock.component.html',
  styleUrls: ['./gold-silver-stock.component.scss']
})
export class GoldSilverStockComponent implements OnInit {

  ngForm: FormGroup
  // for dropdown ng module
  formSubmitted = false;
  iframe5url: any = '';
  
  
  Schemewise
  ngbranch: any = null;
  scode: any = null;
  //ngfor
  scheme: any[];
  branchOption: any[];
  clicked: boolean = false;
  showRepo: boolean = false;
  showLoading: boolean = false;
  transferSchemeDetails: any;
  tScheme
  branchName: any;
  schemeType:any=[];
  getschemename: any;
  ngscheme: any = null
  //date
  bsValue = new Date();
  start_date: string;
  end_date: String;
  maxDate: Date;
  minDate: Date;
  report_url = environment.report_url;
  
  
  constructor(private fb: FormBuilder,
   private _ownbranchmasterservice: OwnbranchMasterService,
   private sanitizer: DomSanitizer,
   public schemeCodeDropdownService: SchemeCodeDropdownService,
   private http: HttpClient,
  
  
  ) {
   this.start_date = moment().format('DD/MM/YYYY');
   this.end_date = moment().format('DD/MM/YYYY');
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
  
   this.http.get('http://192.168.1.108:7266/ledger-view/schems').subscribe((data: any) => {
     this.schemeType = data
     console.log(this.schemeType)
   })
   // Scheme Code
   this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  
     var filtered = data.filter(function (scheme) {
       return (scheme.name == 'LN' || scheme.name == 'CC');
     });
     this.scheme = filtered;
  
     // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
     //   this.dates = data.CURRENT_DATE;
     });
  
  
  }
  createForm() {
   this.ngForm = this.fb.group({
     BRANCH_CODE: ['', [Validators.required]],
    //  AC_TYPE1: ['', [Validators.required]],
     Scheme_code: ["", [Validators.required]],
     start_date: ["", [Validators.required]],
     end_date: ["", [Validators.required]],
    //  Schemewise:['SUBMISSION']
  
      });
     }
     getBranch(event) {
       this.ngbranch = event.value
       this.branchName = event.branchName
     }
    getIntro (event) {
       this.getschemename = event.name
       this.getIntroducer()
     }
     getIntroducer() {
       throw new Error('Method not implemented.');
     }
  
     onLoad() {
       this.showLoading = false;
   
     }
    
  
     view(event) {
       debugger
   
   
       event.preventDefault();
       this.formSubmitted = true;
   
       let userData = JSON.parse(localStorage.getItem('user'));
       let bankName = userData.branch.syspara.BANK_NAME;
       let branchName = userData.branch.NAME;
   
   
       if (this.ngForm.valid) {
   
         this.showRepo = true;
         let obj = this.ngForm.value
         let Date = moment(obj.start_date).format('DD/MM/YYYY');
         let Date1 = moment(obj.end_date).format('DD/MM/YYYY');
  
         let scheme = obj.Scheme_code
   
         let branch = obj.BRANCH_CODE;
   
         let schemeName = this.tScheme
   
         //  let startingcode= obj.Starting_Account;
         // let endingcode =obj.Ending_Account;
   
         this.iframe5url = this.report_url + "examples/Gold_silver_stock_report.php/?&branchname='"+ branchName +"'&sdate='"+ Date +"'&bankName='"+ bankName +"'&bankName='"+ bankName +"'&branch='"+ this.ngbranch +"'"+"'&edate='"+Date1+"'&Scheme='"+schemeName;
         // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";
   
         console.log(this.iframe5url);
         this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
       }
       else {
         Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
       }
     }
     reset() {
       this.ngForm.controls['start_date'].reset()
       this.ngForm.controls['end_date'].reset()
       // this.ngForm.controls['AC_TYPE1'].reset()
       this.ngForm.controls['Scheme_code'].reset()
  
   
      }
   
      // close(){
      //  this. reset();
      //  this.showRepo = false;
      //  this.clicked = false;
      // }
      close(){
        this. reset();
        this.showRepo = false;
        this.clicked = false;
       }
  
  
  }
  
