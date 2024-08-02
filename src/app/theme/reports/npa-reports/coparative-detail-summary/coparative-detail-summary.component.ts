import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coparative-detail-summary',
  templateUrl: './coparative-detail-summary.component.html',
  styleUrls: ['./coparative-detail-summary.component.scss']
})
export class CoparativeDetailSummaryComponent implements OnInit {

  angForm: FormGroup;
  branchOption:any[]=[];
  scheme:any[]=[];

  S_Date:string
  E_Date:string
  R_Date:string

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
  ngscheme;
  branch;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { 
    this.S_Date = moment().format('DD/MM/YYYY');
  this.E_Date = moment().format('DD/MM/YYYY');

  this.maxDate = new Date();
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate() - 1);
  this.maxDate.setDate(this.maxDate.getDate()) }
r_date
  ngOnInit(): void {
    this.createForm()
   
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN');
      });
      this.scheme = filtered;
      console.log(this.scheme)
});
let userData = JSON.parse(localStorage.getItem('user'));
 this.r_date=userData.branch.syspara.CURRENT_DATE,
 this.branch =userData.branch.CODE
  }


  AC_ACNOTYPE;
  AC_TYPE;
  glDetails1: any=[];
  base_url = environment.base_url;
  nasf;
  npato;
  getTransferAccountList1(event){
    this.AC_ACNOTYPE = event.name
    this.AC_TYPE = event.value
    this.ngscheme = event.label
    let obj1 = {
      // date: moment(this.fordate).format('DD/MM/YYYY')
      AC_TYPE: this.AC_TYPE,
      BRANCH_CODE: this.ngbranch,
      // branch_code: this.ngbranch,
    }
    this.http.post(this.base_url +'/npa-classification-master/data',obj1).subscribe((data: any[]) => {
      this.glDetails1 = data

      console.log(this.glDetails1)
    })
  }

  
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme: ['', [Validators.required]],

    R_Date: ['', [Validators.required]],
    S_Date: ['', [Validators.required]],
    E_Date: ['', [Validators.required]],
    SUBMISSION:['SUBMISSION'],
    SUB :['SUB']

    })
    console.log('form',this.angForm);

  }

  view(event) {
    
  
    console.log('form',this.angForm);

    event.preventDefault();
    this.formSubmitted = true;
  
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
  
  
    if (this.angForm.valid) {
      // this.r_date=userData.branch.syspara.CURRENT_DATE
      this.showRepo = true;
      let obj = this.angForm.value
      this.showRepo = true;
      let reDate = moment(obj.R_Date).format('DD/MM/YYYY');

      let fromDate = moment(obj.S_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.E_Date).format('DD/MM/YYYY');
      let branch = obj.BRANCH_CODE
      let scheme = this.ngscheme;
      let Rdio = obj.SUBMISSION
      // let rowArray  = this.selectedRows
      
      let flag 
      if(Rdio == 'check'){
          flag = 0;
      }
      else{
        flag = 1;
      }
 
  
           
     this.iframe5url= this.report_url+"examples/comparativeDetail.php?startDate='"+this.nasf+"'&ReportDate='"+reDate+"'&endDate='"+this.npato+"'&branchName='" + branchName +    "'&branchCode='"+ this.ngbranch +"'&scheme='" + scheme +"&bankName=" + bankName + "&value=" + this.AC_TYPE +"&scname=" + this.AC_ACNOTYPE + "&flag="+ flag + "";
     this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
     console.log("framet",this.iframe5url);

}
  }
  reset() {
    this.angForm.controls['R_Date'].reset()
    this.angForm.controls['S_Date'].reset()
    this.angForm.controls['E_Date'].reset()
    this.angForm.controls['Scheme'].reset()
 

   }
   close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }

}
