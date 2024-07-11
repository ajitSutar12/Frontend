import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forzenaccount',
  templateUrl: './forzenaccount.component.html',
  styleUrls: ['./forzenaccount.component.scss']
})
export class ForzenaccountComponent implements OnInit {

  ngForm!: FormGroup;
  branch_code: any;
  ngbranch: any;
  branch;
  accountedit: null;
  ngscheme: any = null;
  schtype: any = null;
  schcode: any = null;
  branchName: any;
  getschemename: any;
  showRepo: boolean = false;
  bsValue = new Date();
  schemeACNo: any[];
  schemeACNo1: any[];
  ngscheme1
  clicked: boolean = false;
  formSubmitted: boolean;
  report_url = environment.report_url;
  tableData: any[] = [];
  showData = []
  url = environment.base_url;

  iframe5url: any = '';


  constructor(private ownbranchMasterService: OwnbranchMasterService,
    private fb: FormBuilder, private schemeAccountNoService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService, private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.showtable();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      console.log(this.branch_code)
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.schemeACNo = data;
      console.log(this.schemeACNo);
    });



    // })
    // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    //   this.dates = data.CURRENT_DATE;
    // });


  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      // Scheme_code: ["", [Validators.required]],
      Suite_Date: ["", [Validators.required]],
      // start: ["", [Validators.required]],
      // end: ["", [Validators.required]],
      // Scheme_type:["",[Validators.required]]
    })
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  getdata(event) {
    this.ngscheme = null;
    this.accountedit = null;
    this.branch = event.value
  }
  schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
    this.schcode = event.id
    this.schtype = event.label
    console.log(event);

    this.getAccountlist()
  }
  getIntTrans(event) {
    this.getschemename = event.name
    // this.getAccountlist() T
  }
  getAccountlist() {
    this.accountedit = null


    // let obj = [this.ngscheme, this.branch]
    // console.log(this.ngForm.get("Scheme_code").value)
    let obj = [this.ngForm.get("Scheme_type").value.value, this.ngForm.get("BRANCH_CODE").value]
    console.log(obj)
    // switch (this.getschemename) {
    // case 'SH':
    this.schemeAccountNoService.getShareMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
      // this.schemeACNo = data
      this.schemeACNo1 = data
      console.log("acNo", this.schemeACNo1);
    })
    // break;
    // }

  }
  selectedRows: any[] = [];
  selectedRowsGrp: any[] = [];

  toggleSelection(event: any, row: any) {

    console.log("row", row);

    if (event.target.checked) {
      // If checkbox is checked, add row id to selectedRows if not already present
      if (!this.selectedRows.includes(row.id)) {
        this.selectedRows.push(row.id);
        if (!this.selectedRows.includes(row.S_ACNOTYPE
        )) {
          this.selectedRowsGrp.push(row.S_ACNOTYPE);
        }

      }
    } else {
      // If checkbox is unchecked, remove row id from selectedRows if present
      const index = this.selectedRows.indexOf(row.id);
      const indexGrp = this.selectedRowsGrp.indexOf(row.S_ACNOTYPE
      );
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
      if (indexGrp !== -1) {
        this.selectedRowsGrp.splice(index, 1);
      }
    }
    this.pushSelectedRows(); // Call pushSelectedRows to update the selectedRows array
  }

  isRowSelected(row: any) {
    // console.log(row);
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
    // debugger


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      this.showRepo = true;
      let Date = moment(obj.Suite_Date).format('DD/MM/YYYY');
      // let Scheme_code =   this.schcode
      let BRANCH_CODE = obj.BRANCH_CODE;
      let rowArray = this.selectedRows;
      console.log(rowArray);
      console.log(this.tableData);
      console.log("new : ---- ", this.selectedRowsGrp)


      // let Scheme_type =  this.schtype
      // let start = obj.start
      // let end = obj.end




      this.iframe5url = this.report_url + "examples/FrozenAccount.php?startDate='" + Date
        + "'&branchcode=" + BRANCH_CODE + "&row=" + this.selectedRowsGrp
        + "&branchName=" + branchName + "&bankName=" + bankName + "";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }
  close() {
    this.resetForm()

  }
  resetForm() {
    this.ngForm.controls.Suite_Date.reset();
    this.ngForm.controls.BRANCH_CODE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  showLoading: boolean = false;

  onLoad() {
    this.showLoading = false;

  }
  showtable() {
    this.http.get(this.url + '/scheme-parameters').subscribe((data: any) => {
      // console.log(data);

      this.tableData = data
      this.showData.push(this.tableData)

      console.log(this.tableData)
    })
  }

}
