import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monthly-deposit-summery-chart-datewise',
  templateUrl: './monthly-deposit-summery-chart-datewise.component.html',
  styleUrls: ['./monthly-deposit-summery-chart-datewise.component.scss']
})
export class MonthlyDepositSummeryChartDatewiseComponent implements OnInit {

  angForm: FormGroup;

  ngbranch
  branchOption
  ngscheme
  schemeOption
  bsValue = new Date();
  sdate: string;
  maxDate: Date;
  minDate: Date;
  Termwise: boolean = false;
  Schemewise: boolean = false;
  Payble:boolean =false;

   //iframe
 formSubmitted = false;
 showRepo: boolean = false;
 clicked:boolean=false;
 iframeurl: any = ' ';
 report_url = environment.report_url;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.sdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.http.get('http://192.168.1.108:7266/ledger-view/schems').subscribe((data: any) => {
      this.schemeOption = data
      console.log(this.schemeOption)
    })
    
    this.showdetail()

  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      sdate: ["", [Validators.required]],
      edate: ["", [Validators.required]],
      SUBMISSION: ['SUBMISSION'],
    })
  }
  showTable: boolean = true;
  tabledata
  showdetail(){
    this.showTable = true;
    this.getdata();
  }
  showSummary(){
    this.showTable = true;
    this.getdataLoan();
  }
  getdata(){
    this.http.get('http://192.168.1.108:7266/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      this.tabledata = data
      console.log( "deposit",this.tabledata )
    })
  }
  getdataLoan(){
    this.http.get('http://192.168.1.108:7266/ledger-view/schems').subscribe((data: any) => {
      this.tabledata = data
      console.log("Loan", this.tabledata )
    })
  }
  selectedRows: any[] = [];

  toggleSelection(event: any, row: any) {
    if (event.target.checked) {
      if (!this.selectedRows.includes(row.id)) {
        this.selectedRows.push(row.id);
      }
    } else {
      const index = this.selectedRows.indexOf(row.id);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
    this.pushSelectedRows(); 
  }
  
  isRowSelected(row: any) {
    return this.selectedRows.includes(row.id);
  }
  
  selectAll() {
    this.selectedRows = this.tabledata.map(row => row.id);
    this.updateCheckboxes(true);
    this.pushSelectedRows();
  }
  
  unselectAll() {
    this.selectedRows = [];
    this.updateCheckboxes(false);
    this.pushSelectedRows();
  }
  
  pushSelectedRows() {
    console.log('Selected Rows:', this.selectedRows);
  }
  
  updateCheckboxes(checked: boolean) {
    this.tabledata.forEach(row => row.isSelected = checked);
  }
  
  View(event){
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if(this.angForm.valid){
      let obj = this.angForm.value
      this.showRepo = true;
      let startDate = moment(obj.sdate).format('DD/MM/YYYY');
      let endDate = moment(obj.edate).format('DD/MM/YYYY');
      let branch = obj.BRANCH
      let Rdio = obj.SUBMISSION
      let rowArray  = this.selectedRows
      
  
           
     this.iframeurl= this.report_url+"examples/PeriodwiseClassiDep.php?startDate='"+startDate+"'&Enddate='"+endDate+"'&Rdio='"+Rdio+"'&branchName='" + branchName +    "'&branchcode='"+ this.ngbranch +"'&Rdiosort='" + rowArray +"&bankName=" + bankName + "";
     this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
     
      
     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    this.angForm.controls['sdate'].reset();
    this.angForm.controls['edate'].reset();
      this.showRepo = false;
      this.clicked = false;
  
    
  }

}
