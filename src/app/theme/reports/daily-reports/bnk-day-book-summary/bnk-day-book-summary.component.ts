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
  selector: 'app-bnk-day-book-summary',
  templateUrl: './bnk-day-book-summary.component.html',
  styleUrls: ['./bnk-day-book-summary.component.scss']
})
export class BnkDayBookSummaryComponent implements OnInit {
  dt: any;
  dataDisplay: any;
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  src:any;
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

    // // debugger
    //  this.http.get(this.url).subscribe(Response => {
    //      // If Response comes function
    //      // hideloader() is called
    //      if (Response) {
    //        hideloader();
    //      }
    //      console.log(Response)
    //      this.dt = Response;
    //      this.dataDisplay = this.dt.data;
    //    });
    //  // Function is defined
    //  function hideloader() {
    //    // Setting display of spinner
    //    // element to none
    //    document.getElementById('loading').style.display = 'none';
    //  }
  }
  submit(event) {
    debugger
    this.showRepo = true;
    const url="http://localhost/NewReport/report-code/Report/examples/DayBookReport.php";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    event.preventDefault();
    this.formSubmitted = true;

    // // if (this.angForm.valid) {
    //   const formVal = this.angForm.value;
    //   const dataToSend = {
    //     'startDate': (formVal.startDate == '' || formVal.startDate == 'Invalid date') ? ageCaldate = '' : ageCaldate = moment(formVal.startDate).format('DD/MM/YYYY'),

    //   };
    //   this._OtherReportService.postData(dataToSend).subscribe(
    //     (data) => {
    //       Swal.fire("Success!", "Data Added Successfully !", "success");
    //       this.formSubmitted = false;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );


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
    // this.createForm();
    this.showRepo = false;
  }
 
}
