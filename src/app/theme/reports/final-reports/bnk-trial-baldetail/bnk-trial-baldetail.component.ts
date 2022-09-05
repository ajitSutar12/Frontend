import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-bnk-trial-baldetail',
  templateUrl: './bnk-trial-baldetail.component.html',
  styleUrls: ['./bnk-trial-baldetail.component.scss'],
  providers:[OwnbranchMasterService]
})
export class BnkTrialBaldetailComponent implements OnInit {
 // Date variables
 todate: any = null;
 fromdate: any = null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();

  showRepo: boolean = false;
  clicked:boolean=false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
 //Dropdown option variable
 ngbranch
 branchOption: any;
 iframeurl: any = ' ';

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
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      TRANSCATION:["",],
  });
  }
  
  
  view(event) {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let start2date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let end1date = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branched2 = obj.BRANCH_CODE;
      let tran = obj.TRANSCATION;

      this.iframeurl = this.report_url+"examples/TrialBalDetail.php?start2date='" + start2date +"'&end1date='"+end1date+"'&branchName='"+branchName+"'&tran='"+tran+"'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }
  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
