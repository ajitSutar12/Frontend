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
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { NgSelectConfig } from "@ng-select/ng-select";
import { data } from "jquery";
import { CashDenominationService } from "src/app/theme/transaction/cash-denomination/cash-denomination.service";
import { CashierUmService } from "src/app/theme/utility/cashier-um/cashier-um.service";


@Component({
  selector: 'app-bnk-scroll-detail-both',
  templateUrl: './bnk-scroll-detail-both.component.html',
  styleUrls: ['./bnk-scroll-detail-both.component.scss']
})
export class BnkScrollDetailBothComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;
  fromdate: any = null;
  branchOption: any;
  ngbranch
  showRepo: boolean = false;
  clicked=false;
  // Created Form Group
  angForm: FormGroup;
  bsValue = new Date();
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe1url: any = ' ';
  Cashiercode: any[];
  branch_list: any;
  SelectedBranch: any;
  cashiar:any;
  branchno: any;
  cashier_list :any;
  selectedScrollType: string = 'cash';
  isTransferSelected: boolean = false;
 
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _services: CashDenominationService,    private _service : CashierUmService,

  ) {
    this.fromdate = moment().format('DD/MM/YYYY'); 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
  
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data2 => {
     
      this.branchOption = data2;
      
     
    });
    // this.castMasterService.getcastList().pipe(first()).subscribe(data => {
    //   this.Cashiercode = data;
    //   console.log(data);
    // });
    let user = JSON.parse(localStorage.getItem('user'));
    this._services.getOwnbranchList().subscribe(data=>{
      console.log(data);
      
      this.branch_list = data;
      this.SelectedBranch = user.branchId;
    this._services.getList({branch_id : this.SelectedBranch}).subscribe(data=>{
      console.log(data);

      this.Cashiercode = data;
      console.log(data);
      
    })
  })

  this._service.getUserDetails().subscribe(data=>{
      
    this.cashier_list = data;
  
    console.log(this.cashier_list);
},err=>{
  console.log(err);
})

    //get date from syspara current_date
  this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.fromdate = data.CURRENT_DATE;
  })

    //cashier code
    
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH_CODE'].enable()
    //   this.ngbranch = result.branch.id
    // }
    // else {
    //   this.angForm.controls['BRANCH_CODE'].disable()
    //   this.ngbranch = result.branch.id
    // }
  }
  


  createForm(){
      this.angForm = this.fb.group({
        Scroll_Type:  new FormControl('cash'),
        Branch: ['', [Validators.required]],
        // Cashier_Code: ['',[Validators.required]],
        Cashier_Code: [''],
        Print_Code: new FormControl('Debit'),
        CURRENT_DATE:  ['',[Validators.required]],
        // radio: new FormControl('none'),
      });

      let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['Branch'].enable()
    }
    else {
      this.angForm.controls['Branch'].disable()
      this.ngbranch = result.branch.id
    }
  }
  onScrollTypeChange() {
    this.isTransferSelected = this.selectedScrollType === 'transfer';
}
  src:any;
  view(event) {
   
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME
    this.branchno = userData.branch.CODE

   
    if (this.selectedScrollType === 'cash' && this.angForm.valid) {
    if(this.angForm.controls['Print_Code'].value=="Debit" && this.angForm.valid || this.selectedScrollType === 'cash'){
    
    this.showRepo = true;
    let obj = this.angForm.value
  // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');

  let Startdate:any;
  let OpeningData:any;
   if (this.fromdate == obj.CURRENT_DATE) {
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   }else{ 
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   };

  let stype = obj.Scroll_Type
  let branch = obj.Branch  
  let ccode = obj.Cashier_Code
  let pcode = obj.Print_Code
  // let rdio  = obj.radio

    this.iframe1url=this.report_url+"examples/ScrollBookDebit.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&branchcode='"+this.branchno+"'&ccode='"+ccode+"'&pcode='"+pcode+"'&bankName="+bankName+"&opDate="+OpeningData  ;
    this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url); 
 }
}
else if (this.selectedScrollType === 'transfer') {
  this.showRepo = true;
    let obj = this.angForm.value
  // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');

  let Startdate:any;
  let OpeningData:any;
   if (this.fromdate == obj.CURRENT_DATE) {
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   }else{ 
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   };

  let stype = obj.Scroll_Type
  let branch = obj.Branch  
  // let ccode = obj.Cashier_Code
  let pcode = obj.Print_Code
  // let rdio  = obj.radio

    this.iframe1url=this.report_url+"examples/ScrollBookDebit.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&branchcode='"+this.branchno+"'&pcode='"+pcode+"'&bankName="+bankName+"&opDate="+OpeningData  ;
    this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url); 
} 

 else if(this.angForm.controls['Print_Code'].value=="Credit" && this.angForm.valid){
  if (this.selectedScrollType === 'cash' && this.angForm.valid) {
  this.showRepo = true;
  let obj = this.angForm.value
  // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');

  let Startdate:any;
  let OpeningData:any;

   if (this.fromdate == obj.CURRENT_DATE) {
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   }else{ 
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   };

  let stype = obj.Scroll_Type
  let branch = obj.Branch  
  let ccode = obj.Cashier_Code
  let pcode = obj.Print_Code
  let rdio  = obj.radio

  this.iframe1url=this.report_url+"examples/ScrollBookCredit.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&branchcode='"+this.branchno+"'&ccode='"+ccode+"'&pcode='"+pcode+"'&rdio='"+rdio+"&bankName="+bankName+"&opDate="+OpeningData  ;
  this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url); 
}
 else if (this.selectedScrollType === 'transfer') {
  this.showRepo = true;
  let obj = this.angForm.value
  // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');

  let Startdate:any;
  let OpeningData:any;

   if (this.fromdate == obj.CURRENT_DATE) {
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   }else{ 
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   };

  let stype = obj.Scroll_Type
  let branch = obj.Branch  
  // let ccode = obj.Cashier_Code
  let pcode = obj.Print_Code
  let rdio  = obj.radio

  this.iframe1url=this.report_url+"examples/ScrollBookCredit.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&branchcode='"+this.branchno+"'&pcode='"+pcode+"'&rdio='"+rdio+"&bankName="+bankName+"&opDate="+OpeningData  ;
  this.iframe1url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url); 
}
 }
else if(this.angForm.controls['Print_Code'].value=="Both" && this.angForm.valid){
  
  this.showRepo = true;
  let obj = this.angForm.value
  // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');

  let Startdate:any;
  let OpeningData:any;

   if (this.fromdate == obj.CURRENT_DATE) {
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   }else{ 
    Startdate = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY');
    OpeningData = moment(Startdate,'DD/MM/YYYY').subtract(1,'days').format('DD/MM/YYYY');

   };
   
  let stype = obj.Scroll_Type
  let branch = obj.Branch  
  let ccode = obj.Cashier_Code
  let pcode = obj.Print_Code
  let rdio  = obj.radio 

  this.iframe1url=this.report_url+"examples/ScrollBookBoth.php?Startdate='"+Startdate+"'&stype='"+stype+ "'&branch='"+branch+"'&ccode='"+ccode+"'&pcode='"+pcode+"'&rdio='"+rdio+"&bankName="+bankName+"&opDate='"+OpeningData+"'" ;
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
    // this.createForm();
    this.angForm.controls.Cashier_Code.reset();
    this.showRepo = false;
     this.clicked=false;
  }

    


}


