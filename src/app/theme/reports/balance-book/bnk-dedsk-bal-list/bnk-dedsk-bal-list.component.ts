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
import { ReportFrameComponent } from "../../report-frame/report-frame.component";

@Component({
  selector: 'app-bnk-dedsk-bal-list',
  templateUrl: './bnk-dedsk-bal-list.component.html',
  styleUrls: ['./bnk-dedsk-bal-list.component.scss']
})
export class BnkDedskBalListComponent implements OnInit {

  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 

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
  createForm() {
    this.angForm = this.fb.group({
      // START_DATE:["",[Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.pattern, Validators.required]],
      END_DATE:["",[Validators.pattern, Validators.required]]
  });
  }
  
  // view(event){
  //   event.preventDefault();
  //   this.formSubmitted = true;
  //   this.router.navigateByUrl('/reports/Report_Frame');

  // }
    // Method to insert data into database through NestJS
    view(event) {
  
      event.preventDefault();
      this.formSubmitted = true;
      if(this.angForm.valid){
        let obj = this.angForm.value
        let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
        let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
        const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    console.log(url);
        this.router.navigateByUrl(url);
      }
      else {
        Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
      }
    }
  
  src:any;
  submit(event) {
    debugger
    this.showRepo = true;
    let obj = this.angForm.value
    let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    
    const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
    

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
    this.createForm();
    this.showRepo = false;
  }

}
