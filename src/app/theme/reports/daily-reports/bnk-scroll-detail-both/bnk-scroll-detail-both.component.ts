import {AfterViewInit,Component,OnDestroy,OnInit,ViewChild,Input,Output,EventEmitter,ElementRef,}from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
import { first } from "rxjs/operators";
@Component({
  selector: 'app-bnk-scroll-detail-both',
  templateUrl: './bnk-scroll-detail-both.component.html',
  styleUrls: ['./bnk-scroll-detail-both.component.scss']
})
export class BnkScrollDetailBothComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  branchOption: any;
  ngbranch
  showRepo: boolean = false;
  clicked=false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  iframe1url: any = ' ';
  report_url = environment.report_url
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer
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

    //cashier code
    
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngbranch = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }
  


  createForm(){
      this.angForm = this.fb.group({
        Scroll_Type:  new FormControl('cash'),
        Branch: ['', [Validators.required]],
        // Cashier_Code: ['',[Validators.required]],
        Cashier_Code: [''],
        Print_Code: new FormControl('Debit'),
        DATE:  ['',[Validators.required]],
        radio: new FormControl('none'),
      })
  }
  src:any;
  view(event) {
   
   
    event.preventDefault();
    this.formSubmitted = true;
    if(this.angForm.valid){
 
    this.showRepo = true;
    let obj = this.angForm.value
   
    let Startdate = moment(obj.DATE).format('DD/MM/YYYY');
    // let Enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let stype = obj.Scroll_Type
    let branch = obj.Branch  
    let ccode = obj.Cashier_Code
    let pcode = obj.Print_Code
    let rdio  = obj.radio
    //  const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&ccode='"+ccode+"'&pcode='"+pcode+"'&rdio='"+rdio+"'";
    // console.log(url);
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.iframe1url=this.report_url + "/ScrollBookReport.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&ccode='"+ccode+"'&pcode='"+pcode+"'&rdio='"+rdio+"''"  ;
  this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
  
  
 }
 else {
   Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
 }

  }

  

  
  obj1: any
  getBranch() {
    this.obj1 = [this.ngbranch]
  }
 
  close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
     this.clicked=false;
  }

  


}


