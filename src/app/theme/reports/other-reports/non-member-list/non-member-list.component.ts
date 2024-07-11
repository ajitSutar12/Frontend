import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-non-member-list',
  templateUrl: './non-member-list.component.html',
  styleUrls: ['./non-member-list.component.scss']
})
export class NonMemberListComponent implements OnInit {
  angForm: FormGroup;
  branchOption:any[]=[];
  scheme:any[]=[];
  saldiv:any[]=[];
  s_Div:any[]=[];
  selectedsDiv;
  Date:string
  maxDate: Date;
  minDate: any;
  bsValue = new Date();

  iframe5url: any = '';
  report_url = environment.report_url;
  showLoading: boolean = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  formSubmitted: boolean = false;

  isIsRestrictTransactionEntry: boolean = false;
  branchName: string;
  // sanitizer: any;
  ngbranch: string;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,

    private sanitizer: DomSanitizer,

  ) {this.Date = moment().format('DD/MM/YYYY');
  this.maxDate = new Date();
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate() - 1);
  this.maxDate.setDate(this.maxDate.getDate()) }

  ngOnInit(): void {
    this.createForm()
   
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
      this.scheme = data;
    });
    this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
      this.s_Div = data;
      console.log(this.s_Div);
    })
  }
  createForm() {
    this.angForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    Scheme: ['', [Validators.required]],
    SalDiv: ['', [Validators.required]],
    Date: ['', [Validators.required]],

    // AcNo: ['', [Validators.required]],
    // S_Date: ['', [Validators.required]],
    //   E_Date: ['', [Validators.required]],
    // //   checkActive: [false],

    })
  }
  ngscheme:any;
  view(event) {


    event.preventDefault();
    this.formSubmitted = true;
  
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
  
  
    if (this.angForm.valid) {
  
      this.showRepo = true;
      let obj = this.angForm.value
      this.showRepo = true;
      let Date = moment(obj.Date).format('DD/MM/YYYY');
      let branch = obj.BRANCH_CODE
      let scheme = obj.Scheme
      let saldiv = obj.SalDiv

      // let rowArray  = this.selectedRows
      
  
           
     this.iframe5url= this.report_url+"examples/otherNonMemberList.php?startDate='"+Date+"'&scheme='"+this.ngscheme+"'&branchName='" + branchName +    "'&branchcode='"+ this.ngbranch +"'&saldiv=" + this.selectedsDiv +"&bankName=" + bankName + "";
     this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  onLoad() {
    this.showLoading = false;
  
  }
  reset() {
    this.angForm.controls['Date'].reset()
    this.angForm.controls['Scheme'].reset()
    this.angForm.controls['SalDiv'].reset()

   }
   close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }
}
