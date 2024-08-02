import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-count-wise-lawad-loan',
  templateUrl: './count-wise-lawad-loan.component.html',
  styleUrls: ['./count-wise-lawad-loan.component.scss']
})
export class CountWiseLawadLoanComponent implements OnInit {

  angForm: FormGroup;
  ngbranch!: any;
  branchOption: any = [];
  branchName: any;
  showRepo: boolean = false;
  report_url = environment.report_url;
  showLoading: boolean = false;
  clicked: boolean =false;



  //date
  bsValue = new Date();
  start_date: string;
  end_date: String;
  maxDate: Date;
  minDate: Date;
  tableData: any[] = [];
  showData = []
  formSubmitted: boolean = false;
  iframe5url: any = '';
  Scheme: any[];
  
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
  ) {
    this.start_date = moment().format('DD/MM/YYYY');
    this.end_date = moment().format('DD/MM/YYYY');
     this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this.showtable();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN'|| scheme.name == 'CC');
      });
      this.Scheme = filtered;
    })
    
    
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      start_date: ["", [Validators.required]],
      end_date: ["", [Validators.required]],
      Scheme: ['', [Validators.required]],

    })
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  showtable() {
    this.http.get('http://192.168.1.108:7266/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

  onLoad() {
    this.showLoading = false;

  }
  scheme
  getscheme(event){
    this.scheme = event.label
  }

  // selectAll() {
  //   const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
  //   checkboxes.forEach((checkbox: HTMLInputElement) => {
  //     checkbox.checked = true;
  //   });
  // }
  // unselectAll() {
  //   const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
  //   checkboxes.forEach((checkbox: HTMLInputElement) => {
  //     checkbox.checked = false;
  //   });
  // }
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
  

  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      let fromDate = moment(obj.start_date).format('DD/MM/YYYY');
      let toDate = moment(obj.end_date).format('DD/MM/YYYY');
      let branch = obj.BRANCH
      let scheme = this.scheme
      let rowArray  = this.selectedRows
     



      this.iframe5url = this.report_url + "examples/CourtwiseDisputeloandetailslist.php?date='" + fromDate   +"'&end_date='" + toDate+"'&Scheme='" + scheme+"'&branch='"+branchName +"&bankName=" + bankName + "" +  "&bankName=" + bankName + "";
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  resetForm() {
    this.angForm.controls.Scheme.reset();
    this.angForm.controls.end_date.reset();
    this.angForm.controls.start_date.reset();
  }
  close(){
    this. resetForm();
    this.showRepo = false;
    this.clicked = false;
   }
}
