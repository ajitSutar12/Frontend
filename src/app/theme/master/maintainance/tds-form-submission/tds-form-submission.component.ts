import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from "rxjs";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



// For fetching values from backend
interface TDSFormSubmission {
  id: number;
  SUBMIT_DATE: Date,
  FIN_YEAR: number,
  AC_CUSTID: number,
  FORM_TYPE: string,
  TDS_RATE: number,
  TDS_LIMIT: number,
  IS_EXEMPT_TDS: number,
  USER_CODE: string

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
  maxDate: Date;
  minDate: Date;

  // dropdown variables
  ngcustomer: any = null;
  Cust_ID: any[] //customer id from idmaster


  ngfinyear: any = null

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private_router: Router,
    private config: NgSelectConfig,) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      FIN_YEAR: [""],
      AC_CUSTID: ["", [Validators.required]],
      SUBMIT_DATE: [""],
      FORM_TYPE: [""],
      TDS_RATE: ["", [Validators.pattern]],
      TDS_LIMIT: ["", [Validators.pattern]],
    });
  }

  submit(event) {

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
  }

  isForm15A(value) {
    if (value == 1) {
      this.isTdsFormA = true;
    }
    if (value == 2) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
    if (value == 3) {
      this.isTdsFormA = false;
      this.angForm.controls['TDS_RATE'].reset()
      this.angForm.controls['TDS_LIMIT'].reset()
    }
  }

}
