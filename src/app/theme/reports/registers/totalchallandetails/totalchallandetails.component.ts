import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-totalchallandetails',
  templateUrl: './totalchallandetails.component.html',
  styleUrls: ['./totalchallandetails.component.scss']
})
export class TotalchallandetailsComponent implements OnInit {

  ngForm!: FormGroup;

  showRepo: boolean = false;
  formSubmitted: boolean;
  clicked: boolean = false;
  bsValue = new Date();
  maxDate: any;
  minDate: any;
  fromdate: any = null;
  report_url = environment.report_url;
  tableData: any[] = [];
  showData = []
  id: any = [];
  url = environment.base_url;
  ngbranch: any;
  iframe5url: any = '';
  branch;
  branch_code: any;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private ownbranchMasterService: OwnbranchMasterService,) { }

  ngOnInit(): void {
    this.createForm();

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      console.log(this.branch_code)
    });
  }

  createForm() {
    this.ngForm = this.fb.group({
      startdt: ["",[Validators.required]],
      enddt: [""],
      BRANCH_CODE:[""]
    })
  }
  getdata(event) {

    this.branch = event.value
  }
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let sysdate = userData.branch.syspara.CURRENT_DATE;
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      this.showRepo = true;
      let startdate = moment(obj.startdt).format('DD/MM/YYYY');
      let endate = moment(obj.enddt).format('DD/MM/YYYY');
      // let status = this.ngForm.get("sf").value;
      // debugger
      // debugger
      this.iframe5url = this.report_url + "examples/TOTALCHALLLENDETAILS.php?" +
        "&startDate=" + "'" + startdate + "'" +
        "&enddate=" + "'" + endate + "'" +
       
        "&branchName=" + branchName + "&bankName=" + bankName + "";

      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
close(){
    this.resetForm()

  }
  resetForm() {
    this.ngForm.controls.startdt.reset()
    this.ngForm.controls.enddt.reset()
    this.ngForm.controls.BRANCH_CODE.reset()
    this.showRepo = false;
    this.clicked = false;
  }
  showLoading: boolean = false;

  onLoad() {
    this.showLoading = false;

  }
}
