import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
@Component({
  selector: 'app-scheme-loanoverdue-incre-decre',
  templateUrl: './scheme-loanoverdue-incre-decre.component.html',
  styleUrls: ['./scheme-loanoverdue-incre-decre.component.scss']
})
export class SchemeLoanoverdueIncreDecreComponent implements OnInit {

  iframe5url: any = '';
  showLoading: boolean = false;
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  iframe1url: any = ' ';
  clicked: boolean = false;
  RADIO: any;
  detail: any;
  summary: any;
  branchName: any;
  shemeDetails: any

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

  }


  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 100 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    });

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
    this.AddSchemeData();
  }
  actype
  AddSchemeData() {
    // this.http.get('http://192.168.1.185:7276/ledger-view/cschem').subscribe((data: any[]) => {
      this.http.get(this.url + '/ledger-view/cschem').subscribe((data: any[]) => {

      this.shemeDetails = data.map(item => ({ ...item, isSelected: false }))
      if (this.shemeDetails.length > 0) {
        this.actype = this.shemeDetails[0].id; // Assuming id is a property of the first item in the array
      }
      console.log(this.shemeDetails);
    });
  }

  selectedSchemeIds: any[] = [];

  selectAll() {
    const areAllSelected = this.shemeDetails.every(item => item.isSelected);
    if (areAllSelected) {
      this.unselectAll();
    } else {
      this.shemeDetails.forEach(item => item.isSelected = true);
      this.updateSelectedSchemeIds();


    }
  }
  unselectAll() {
    this.shemeDetails.forEach(item => item.isSelected = false);
    this.updateSelectedSchemeIds();
  }

  areAllSelected() {
    return this.shemeDetails.every(item => item.isSelected);
  }

  updateSelectedSchemeIds() {
    this.selectedIds = this.shemeDetails.filter(item => item.isSelected).map(item => item.id);
    console.log(this.selectedIds);
    console.log("alll", this.selectedIds);

  }

  selectedIds: number[] = [];

  toggleSelection(item: any) {
    item.isSelected = !item.isSelected;

    if (item.isSelected) {
      this.selectedIds.push(item.id); // Adjust 'id' based on your actual property name
    } else {
      const index = this.selectedIds.indexOf(item.id);
      if (index !== -1) {
        this.selectedIds.splice(index, 1);
      }

    }
    this.updateSelectedSchemeIds();
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      // SORT: ["", [Validators.required]],
      NEWPAGE: [""],
      // RADIO: new FormControl('detail'),
      checked: [""],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  end() { }

  view(event) {
    this.formSubmitted = true;
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

      // let edate: any;
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch = obj.BRANCH_CODE;
      // let detail = obj.RADIO;


      let startscheme = obj.NEWPAGE;

      let flag = obj.RADIO;
      let schemeid = event.dataObject;
      let myArray = this.selectedIds

      if(branch == 0){
        this.branchName='Consolidate';
     }
      this.iframe5url = this.report_url + "examples/schemeLoanOverIncreDecre.php?stadate='" + stadate + "'&edate='" + edate + "'&branch='" + this.ngbranch + "'&schemeid=" + myArray + "&bankName='" + bankName + "'&branchName='" + this.branchName + "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      this.formSubmitted = false;
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }

  close() {
    this.resetForm()
  }
  resetForm() {
    this.angForm.controls.START_DATE.reset();
    this.angForm.controls.END_DATE.reset();
    this.angForm.controls.checked.reset();
        this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  onLoad() {
    this.showLoading = false;

  }
}
