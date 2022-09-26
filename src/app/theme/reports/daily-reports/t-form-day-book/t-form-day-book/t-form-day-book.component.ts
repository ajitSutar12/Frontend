import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { NgSelectConfig } from "@ng-select/ng-select";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-t-form-day-book',
  templateUrl: './t-form-day-book.component.html',
  styleUrls: ['./t-form-day-book.component.scss'],
  providers: [OwnbranchMasterService]
})
export class TFormDayBookComponent implements OnInit {

  iframe1url: any = '';
  formSubmitted = false;
  //date
  maxDate: Date;
  minDate: Date;
  date: any = null

  showRepo: boolean = false;

  clicked = false;
  //Form Group 
  ngForm: FormGroup;
  bsValue = new Date();
  //ng model
  ngbranch: any = null
  report_url = environment.report_url;

  //Dropdown option variable

  branchOption: any[];
  // for Type
  selectedType
  Types = [
    { id: 1, value: "Summary" },
    { id: 2, value: "Details" },
    { id: 3, value: "Subsidairy Grouping" },
  ];
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, 
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,
    public router: Router, private _ownbranchmasterservice: OwnbranchMasterService,) {
    this.date = this.date;
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

    //get date from syspara current_date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.date = data.CURRENT_DATE;
  })
  }

  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      Branch: ['', [Validators.required]],
      Type: ['', [Validators.required]],

      date: ["", [Validators.required]],


    });
  }

  src: any;
  view(event) {


    event.preventDefault();
    this.formSubmitted = true;
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      let Date = moment(obj.date).format('DD/MM/YYYY');

      let Branch = obj.Branch;

      let type = obj.Type;

      this.iframe1url = this.report_url + "examples/DayBookfinal1.php?Date="+ Date + "&Branch=" + this.ngbranch + "&branchName=" + branchName + "'&type='" + type + "&bankName=" + bankName + " ";
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }


  }
  close() {
    this.resetForm()
  }

  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }

}
