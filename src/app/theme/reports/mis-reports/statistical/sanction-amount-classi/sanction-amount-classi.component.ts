import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sanction-amount-classi',
  templateUrl: './sanction-amount-classi.component.html',
  styleUrls: ['./sanction-amount-classi.component.scss']
})
export class SanctionAmountClassiComponent implements OnInit {
  angForm: FormGroup;

  ngbranch
  branchOption

  bsValue = new Date();
  date: string;
  maxDate: Date;
  minDate: Date;
  Termwise: boolean = false;
  Schemewise: boolean = false;
  Payble: boolean = false;
  url = environment.base_url;
  //iframe
  formSubmitted = false;
  showRepo: boolean = false;
  clicked: boolean = false;
  iframeurl: any = ' ';
  report_url = environment.report_url;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private http: HttpClient,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.date = moment().format('DD/MM/YYYY');
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
    this.showdetail()

  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      date: ["", [Validators.required]],
      SUBMISSION: ['SUBMISSION'],
    })
  }
  showTable: boolean = true;
  tabledata
  showdetail() {
    this.showTable = true;
    this.getdata();
  }
  showSummary() {
    this.showTable = false;
  }
  getdata() {
    this.http.get(this.url + '/ledger-view/schems').subscribe((data: any) => {
      this.tabledata = data

    })
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
    // Clear selectedRows array and then add all row ids to it
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

  View(event) {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;
      let Date = moment(obj.date).format('DD/MM/YYYY');
      let branch = obj.BRANCH

      let Rdio = obj.SUBMISSION
      let rowArray = this.selectedRows



      this.iframeurl = this.report_url + "examples/SanctionAmountwiseClassification.php?Rdio='" + Rdio + "'&branchName='" + branchName + "'&branchcode='" + this.ngbranch + "'&startDate='" + Date + "'&Rdiosort=" + rowArray + "&bankName=" + bankName + "";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);



    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    // this.angForm.controls.date.reset();
    // this.angForm.controls.BRANCH.reset();
    this.angForm.controls['date'].reset()
    this.showRepo = false;
    this.clicked = false;


  }

}
