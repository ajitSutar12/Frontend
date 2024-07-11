import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-id-wise-tdsreport',
  templateUrl: './customer-id-wise-tdsreport.component.html',
  styleUrls: ['./customer-id-wise-tdsreport.component.scss']
})
export class CustomerIdWiseTDSreportComponent implements OnInit {

  tdsForm: FormGroup
  ngbranch
  //ngfor
  branchOption

  //ngmodel
  branch
  schemetype

  bsValue = new Date();
  Schemewise: boolean = false;

  from_Date: string;
  maxDate: Date;
  minDate: Date;
  showRepo: boolean = false;
  report_url = environment.report_url;
  url = environment.base_url;
  showLoading: boolean = false;
  constructor(private fb: FormBuilder,private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,private http :HttpClient) {
      this.from_Date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

     }
   scheme
   Start_code
   end_code
   scode
  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    this.http.get<any>(this.url + '/gl-account-master/').subscribe(data => {
      this.Start_code = data;
      this.end_code =data
      console.log(this.Start_code)
    })
  }
  createForm() {
    this.tdsForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    StartCode: ["",[ Validators.required]],
    EndCode: ["",[ Validators.required]],
    from_Date: ["", [Validators.required]],
    to_Date: ["", [Validators.required]],
    Schemewise:[""]

    // START_DATE: ['', [Validators.required]],
    // END_DATE: ['', [Validators.required]],

    });

  }
  onLoad() {
    this.showLoading = false;

  }
   //iframe
   formSubmitted = false;
   clicked:boolean=false;
   iframeurl: any = ' ';

  View(event){
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if(this.tdsForm.valid){
      let obj = this.tdsForm.value
      this.showRepo = true;
      let fromDate = moment(obj.from_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.to_Date).format('DD/MM/YYYY');
      let branch = this.branch
      let checkbox = obj.Schemewise 
    
     



      this.iframeurl = this.report_url + "examples/CustIdWiseTDSReport.php?startDate='" + fromDate + "'&endDate='" + toDate  +  "'&type='" + checkbox + "'&branchName='" + branchName  + "'&branchcode='" + branch +  "&bankName=" + bankName + "";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
     
      
     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
     }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    
    this.tdsForm.controls['StartCode'].reset()
    this.tdsForm.controls['EndCode'].reset()
    this.tdsForm.controls['from_Date'].reset()
    this.tdsForm.controls['to_Date'].reset()
    this.showRepo = false;
    this.clicked = false;
  }
}
