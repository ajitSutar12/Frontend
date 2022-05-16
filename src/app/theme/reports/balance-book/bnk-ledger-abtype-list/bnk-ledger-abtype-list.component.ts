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
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
@Component({
  selector: 'app-bnk-ledger-abtype-list',
  templateUrl: './bnk-ledger-abtype-list.component.html',
  styleUrls: ['./bnk-ledger-abtype-list.component.scss']
})
export class BnkLedgerABTypeListComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  selectedValue: any = null
  formSubmitted = false;
  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  scheme: any;
  SchemeCodeDropdownDropdown: any;
//Scheme type variable
schemeType: string = 'TD'
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    // this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    //   this.SchemeCodeDropdownDropdown = data;
    // })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.selectedValue = this.scheme[0].value
    })
  
  }
  createForm() {
    this.angForm = this.fb.group({
      START_DATE:["",[Validators.pattern, Validators.required]],
      END_DATE:["",[Validators.pattern, Validators.required]],
      AC_TYPE:["",[Validators.pattern, Validators.required]],
      REPOTYPE:["",[Validators.pattern, Validators.required]],
  });
  }
  
  
  src:any;
  submit(event) {
    debugger
    // this.showRepo = true;
    let obj = this.angForm.value
    let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let repotype = obj.REPOTYPE;
    const url="http://localhost/NewReport/report-code/Report/examples/BnkABTypeBALDeposit.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'&repotype='"+repotype+"'";
    // const url="http://localhost/NewReport/report-code/Report/examples/BnkABTypeBALDeposit.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";  // const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    window.open(url, '_blank');

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

  close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
    this.selectedValue = null
  }

}
