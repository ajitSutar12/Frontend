import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-overdue-amt-period-loan-classfication',
  templateUrl: './overdue-amt-period-loan-classfication.component.html',
  styleUrls: ['./overdue-amt-period-loan-classfication.component.scss']
})
export class OverdueAmtPeriodLoanClassficationComponent implements OnInit {

  angForm: FormGroup;
  branchOption:any[]=[];
  Date:string
  maxDate: Date;
  minDate: any;
  bsValue = new Date();
  url=environment.base_url;

  iframe5url: any = '';
  report_url = environment.report_url;
  showLoading: boolean = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  formSubmitted: boolean = false;
  branchName: string;
  ngbranch: string;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,

  ) {
      this.Date = moment().format('DD/MM/YYYY');
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
    this.showtable();

  }
  createForm() {
    this.angForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    // Period: ['', [Validators.required]],
    Date: ['', [Validators.required]],
    SUBMISSION:['SUBMISSION']

    })
  }
  tableData:any=[]
  showData: any=[];

  
  showtable() {
    this.http.get(this.url+'/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }
  selectedRows: any[] = [];

  toggleSelection(event: any, row: any) {
    if (event.target.checked) {
      // If checkbox is checked, add row id to selectedRows if not already present
      if (!this.selectedRows.includes(row.id)) {
        this.selectedRows.push(row.id);
      }
    } else {
      // If checkbox is unchecked, remove row id from selectedRows if present
      const index = this.selectedRows.indexOf(row.id);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
    this.pushSelectedRows(); // Call pushSelectedRows to update the selectedRows array
  }
  
  isRowSelected(row: any) {
    return this.selectedRows.includes(row.id);
  }
  selectAll() {
    // Clear selectedRows array and then add all row ids to it
    this.selectedRows = this.tableData.map(row => row.id);
    // this.s_actype = this.tableData.map(row => row.S_ACNOTYPE);

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
    this.tableData.forEach(row => row.isSelected = checked);
  }
  
  view(event) {
    debugger
  
  
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
      let Rdio = obj.SUBMISSION
      let rowArray  = this.selectedRows
      // let actype = this.s_actype
  
           
     this.iframe5url= this.report_url+"examples/OverdueamountPeriodwiseClassification.php?startDate='"+Date+"'&Rdio='"+Rdio+"'&branchName='" + branchName +    "'&scheme='"+ this.ngbranch +"'&Rdiosort='" + rowArray +"&bankName=" + bankName +"";
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
    

   }
   close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }

}
