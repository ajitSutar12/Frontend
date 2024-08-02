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
  selector: 'app-schemwise-totalcreditloan',
  templateUrl: './schemwise-totalcreditloan.component.html',
  styleUrls: ['./schemwise-totalcreditloan.component.scss']
})
export class SchemwiseTotalcreditloanComponent implements OnInit {

  angForm: FormGroup;
  ngbranch!: any;
  branchOption: any = [];
  branchName: any;
  showRepo: boolean = false;
  report_url = environment.report_url;
  showLoading: boolean = false;
  clicked: boolean = false;
  url = environment.base_url;


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
  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,) {
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
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      start_date: ["", [Validators.required]],
      end_date: ["", [Validators.required]],
      Schemewise: ['Schemewise'],
      Termwise: ['Termwise'],
      SUBMISSION: ['SUBMISSION']

    })
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  showtable() {
    this.http.get(this.url + '/ledger-view/schems').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

  onLoad() {
    this.showLoading = false;

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


  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    // let rowArray  = this.selectedRows


    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let Date = moment(obj.start_date).format('DD/MM/YYYY');
      let Date1 = moment(obj.end_date).format('DD/MM/YYYY');


      let radio = obj.SUBMISSION
      let branch = obj.BRANCH;

      let rowArray = this.selectedRows

      let flag;
      if (radio == 'SUBMISSION') {
        flag = 0;
      }
      else {
        flag = 1;
      }


      //  let startingcode= obj.Starting_Account;
      // let endingcode =obj.Ending_Account;
      this.iframe5url = this.report_url + "examples/schemewisetotdetail.php/?&branchname=" + branchName + "'&startDate='" + Date + "'&endDate='" + Date1 +  "&Bankname=" + bankName + "&branch=" + this.ngbranch + "&flag="+ flag + "&Rdiosort=" + rowArray +"&radio=" + radio;

    

      // this.iframe5url = this.report_url + "examples/schemewiseCrDrloan.php?&branchname='" + branchName + "'&sdate='" + Date + "'&Bankname='" + bankName + "'&AC_RECOVERY_CLERK='" + bankName + "'&branch='" + this.ngbranch + "'"+"&rowarray=" + rowArray + "'&edate='" + Date1+"'"+"&radio="+ radio;
      // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  reset() {
    this.angForm.controls['start_date'].reset()
    this.angForm.controls['end_date'].reset()


  }

  close() {
    this.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}
