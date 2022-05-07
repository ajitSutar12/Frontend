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
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-bnk-instructions-standing-debit',
  templateUrl: './bnk-instructions-standing-debit.component.html',
  styleUrls: ['./bnk-instructions-standing-debit.component.scss']
})
export class BnkInstructionsStandingDebitComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;

  selectedType
  Types = [
    { id: 1, name: "Success" },
    { id: 2, name: "Failure" },
  ];

  selectedSorting
  SortingOn = [
    { id: 1, name: "Debit Scheme" },
    { id: 2, name: "Credit Scheme" },
  ];


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      STATUS: ["", [Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.pattern, Validators.required]],
      END_DATE: ["", [Validators.pattern, Validators.required]],
      SORT_ON: ["", [Validators.pattern, Validators.required]],
     
    });
  }
  src: any;
  submit(event) {
    debugger
    event.preventDefault(); 
    this.formSubmitted = true;
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    this.showRepo = true;

    let obj = this.angForm.value
    // let Startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    // let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');


    // const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?startDate='"+Startdate+"'&endDate='"+Enddate+"'";
    // console.log(url);
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
   
    //To clear form
    // this.resetForm();
    this.formSubmitted = false;
    // }

  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }

}

