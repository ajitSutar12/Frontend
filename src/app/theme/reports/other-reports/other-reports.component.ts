import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
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
import { OtherReportService } from './other-reports.service'
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-other-reports',
  templateUrl: './other-reports.component.html',
  styleUrls: ['./other-reports.component.scss']
})
export class OtherReportsComponent implements OnInit {


  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  // ng model variable
  ageCaldate: any = null

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    public _OtherReportService: OtherReportService,
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
  createForm() {
    this.angForm = this.fb.group({
      MINAGECAl_DATE:["",[Validators.pattern, Validators.required]]
  });
  }
  
  
  src:any;
  submit(event) {
    debugger
    this.showRepo = true;
    let obj = this.angForm.value
    let date = moment(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
    const url="http://localhost/NewReport/report-code/Report/examples/MinorList.php?startDate='"+date+"'";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // let ageCaldate

    // event.preventDefault();
    // this.formSubmitted = true;

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



  // Reset Function
  resetForm() {
    this.createForm();
  }



  //   //Crreating HTTP params
  // //e.g. http://localhost/api/something.php?title=value&content=value
  // let httpParams = new HttpParams()
  // .set('title', this.createNewForm.controls['title'].value)
  // .set('content', this.createNewForm.controls['content'].value);

  // //Then pass the Http params object to the http.get) method
  // this.http.get('http://localhost/api/something.php', {httpParams}).then();
}
