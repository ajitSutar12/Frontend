import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from "rxjs";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { first } from 'rxjs/operators';
import { TDSFormSubmissionService } from './tds-form-submission.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';

// For fetching values from backend
interface TDSFormSubmission {
  id: number;
  SUBMIT_DATE: Date,
  FIN_YEAR: number,
  AC_CUSTID: number,
  FORM_TYPE: string,
  TDS_RATE: number,
  TDS_LIMIT: number,
  // IS_EXEMPT_TDS:number,
  // USER_CODE:string

}
@Component({
  selector: 'app-tds-form-submission',
  templateUrl: './tds-form-submission.component.html',
  styleUrls: ['./tds-form-submission.component.scss']
})
export class TDSFormSubmissionComponent implements OnInit {

  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  formSubmitted = false;
  //api 
  url = environment.base_url;
  angForm: FormGroup;
  showButton: boolean = true;
  // Store data from backend
  tdsformsubmission: TDSFormSubmission[];
  isTdsFormA: boolean = false;
  // for date 
  ngSubmitDate: any = null
  maxDate: any;
  minDate: Date;
  // dropdown variables
  ngcustomer: any = null;
  Cust_ID: any[] //customer id from idmaster
  ngfinyear: any = null
  dtElement: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private_router: Router,
    private TDSformsubmission: TDSFormSubmissionService,
    private customerID: CustomerIDMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
    private config: NgSelectConfig,private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      FIN_YEAR: ["", [Validators.required, Validators.pattern]],
      AC_CUSTID: ["", [Validators.required]],
      SUBMIT_DATE: ["", [Validators.required, Validators.pattern]],
      FORM_TYPE: ["", [Validators.required]],
      TDS_RATE: ["", [Validators.pattern]],
      TDS_LIMIT: ["", [Validators.pattern]],
    });
  }

  getCustomer(event) {
    this.ngcustomer = event
  }

  getTdscust(event) {
    let value = this.TDSformsubmission.filter(ele => ele.STATEMENT_CODE == this.ngcustomer)

  }

  //checks percentage of interest rate
  checkInt(event) {
    if (Number(event) > 20) {
      Swal.fire('Info', 'Please Input Interest upto 20', 'info')
      this.angForm.patchValue({
        TDS_RATE: ''
      })
    }
  }

  // Method to insert data into database through NestJS
  submit() {
    let ngSubmitDate
    this.formSubmitted = true;
    if (this.angForm.valid) {
      if (this.isTdsFormA == true && this.angForm.controls['TDS_RATE'].value == '' && this.angForm.controls['TDS_LIMIT'].value == '') {
        Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
      }
      else {
        const formVal = this.angForm.value;
        const dataToSend = {
          'FIN_YEAR': formVal.FIN_YEAR,
          'AC_CUSTID': this.ngcustomer,
          'FORM_TYPE': formVal.FORM_TYPE,
          'TDS_RATE': formVal.TDS_RATE,
          'TDS_LIMIT': formVal.TDS_LIMIT,
          'SUBMIT_DATE': (formVal.SUBMIT_DATE == '' || formVal.SUBMIT_DATE == 'Invalid date') ? ngSubmitDate = '' : ngSubmitDate = moment(formVal.SUBMIT_DATE).format('DD/MM/YYYY')
        }
        this.TDSformsubmission.postData(dataToSend).subscribe(data1 => {
          Swal.fire('Success!', 'Data Added Successfully !', 'success');
          this.formSubmitted = false;
        }, (error) => {
          console.log(error)
        })
        //To clear form
        this.resetForm();
      }
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  //method for adding hyphen in date
  addhyphen(data: any) {
    let date = new Date().getFullYear() + 1;
    let result = Number((document.getElementById("FIN_YEAR") as HTMLInputElement).value);
    if (result > date) {
      Swal.fire("Warning!", "please enter valid Year ", "warning");
      (document.getElementById("FIN_YEAR") as HTMLInputElement).value = "";
    }
    else {
      if (data.length == 4) {
        result += 1;
        this.ngfinyear = data + "-" + result;
      }

    }
  }

  addNewData() {
    this.showButton = true;
    this.resetForm();
  }
  resetForm() {
    this.createForm()
    this.ngcustomer = null
    this.isTdsFormA = false;
  }

  getTds(event) {
    this.TDSformsubmission.getTdsData().subscribe(data => {

      let value = data.filter(ele => ele.FIN_YEAR == this.ngfinyear && ele.idmasterID == this.ngcustomer)

      console.log(value)
      if (value.length != 0) {
        this.ngcustomer = null
        Swal.fire('Warning', 'Data is Already Submitted', 'warning');

      }

    })

  }

  isForm15A(value) {
    if (value == 1) {
      this.isTdsFormA = true;
    }
    else if (value == 2) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
    else if (value == 3) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
    else if (value == 4) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
