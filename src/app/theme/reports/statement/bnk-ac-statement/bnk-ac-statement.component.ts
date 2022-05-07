import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-bnk-ac-statement',
  templateUrl: './bnk-ac-statement.component.html',
  styleUrls: ['./bnk-ac-statement.component.scss']
})
export class BnkAcStatementComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){}
  src:any;
  submit(event) {
    debugger
    this.showRepo = true;
    let obj = this.angForm.value
    // let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    // let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    
    const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php";
    // const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    event.preventDefault();
    this.formSubmitted = true;

    //To clear form
    // this.resetForm();
    this.formSubmitted = false;
    // }

  }

  close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }

}
