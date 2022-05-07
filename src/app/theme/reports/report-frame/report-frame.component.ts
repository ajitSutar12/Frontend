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
  selector: 'app-report-frame',
  templateUrl: './report-frame.component.html',
  styleUrls: ['./report-frame.component.scss']
})
export class ReportFrameComponent implements OnInit {

  @Input() childMessage: string;

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
    private sanitizer: DomSanitizer
  ) {

    if (this.childMessage != undefined) {

      this.submit(this.childMessage);
    }

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
  
    
  }

  
  
  src:any;
  submit(event){}
  Back(event) {
    debugger
    this.showRepo = true;
    let obj = this.angForm.value
    const url="http://localhost:4200/reports/Report_Frame";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   


  }



   close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.showRepo = false;
  }
}
