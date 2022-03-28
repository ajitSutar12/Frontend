import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { NarrationService } from '../../../shared/elements/Narration.service';
import { HttpClient } from '@angular/common/http';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import {SavingPigmyAccountClosingService} from './savings-Pigmy-Account-Closing.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';


@Component({
  selector: 'app-savings-pigmy-account-closing',
  templateUrl: './savings-pigmy-account-closing.component.html',
  styleUrls: ['./savings-pigmy-account-closing.component.scss']
})
export class SavingsPigmyAccountClosingComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  formSubmitted = false;
  //api
  url = environment.base_url;

  angForm: FormGroup;

  

  
  
  

  CashTrue = true
  TransferTrue = false

  // Dropdown variables
  branch_code: any;
  ngBranchCode:any=null;
  ngdate:any=null;
  allScheme: any[];
  ngscheme:any=null;
  accountedit:any=null;
  ngacno:any=null;
  schemeACNo: any[];
  ngglacno:any=null;
  selectedScheme:any=null
  


  multigrid = [];
  
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  dataSub: Subscription;
  characters: IOption[];
  sysparaData: any;

  // for radio button
  isTransfer: boolean = false
  master: any;
  selectedCode:any=null
  allSchemeCode: any//from schme master
  // allScheme = new Array()//from schme master
  narration: any;
  narrationList: any;
  
  
  tranModeList: any;
  particulars: any;
  date: any;
  totalAmt: any;
  showChequeDetails: boolean = false;
  DayOpBal: number;
  headData: any;
  headShow: boolean = false;
  lastday: any;
  mainMaster = new Array();
  showAdd: boolean = true;
  showUpdate: boolean = false;
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';
  introducerACNo: any;
 
 
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;

  constructor(
    // public NarrationService: NarrationService,
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service1: MultiVoucherService,
    private _service:SavingPigmyAccountClosingService
    ) {
      if (this.childMessage != undefined) {

        this.editClickHandler(this.childMessage);
      }
    }

  ngOnInit(): void {
    this.createForm(); 
    this.getSystemParaDate();

     //Narration List
     this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    
    // this.dataSub = this.NarrationService.loadCharacters().subscribe((options) => {
    //   this.narrationList = options;
    // });

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'PG')
      });
      this.allScheme = allscheme;
    })

    // this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
    //  this.allSchemeCode=data;
    //  console.log('data',data)
    //  console.log(this.allSchemeCode);
    // })

    
        // //Scheme Code
        // this._service1.getSchemeCodeList().subscribe(data => {
        //   console.log(data);
          
        //   this.master = data;
        //   this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
          
        // })
    


   
   
  }


  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['',[Validators.required]],
      DATE:['',[Validators.required]],
      AC_TYPE:['',[Validators.required]],
      AC_NO:['',[Validators.required]],
      Voucher_Number:[''],
      OP_Date:[''],
      RENEWAL_DATE:[''],
      INT_RATE:[''],
      LAST_INT:[''],
      MATURITY_DATE:[''],
      INT_RATE2:[''],
      LEDGER_BAL:[''],
      MONTHS:[''],
      INT_RATE3:['',[Validators.pattern]],
      INT_RATE4:[''],
      INT_RATE5:[''],
      AMOUNT:['',[Validators.pattern]],
      INT_RATE6:[''],
      GL_AC:[''],

      SAVING_PIGMY:[''],
      chequeNo:['',[Validators.pattern]],
      ChequeDate:['',[Validators.pattern]],
      Token_Num:['',[Validators.pattern]],
      NARRATION: ['', [Validators.pattern]],
      scheme_type:['',],
      scheme:[''],
      



      // 
      
      temp_over_draft: [''],
      over_draft: [''],
      token: [''], 
      slip_no: [''],
      Intdate:[''],
      amount:[''],
     
    

    });
  }


  obj: any
  getschemename: any

  schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountlist()


  }

  
   
  //  Fetching account from seleted scheme
  getAccountlist() {
     
    this.accountedit = null
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      
    }
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.sysparaData = data
      this.angForm.patchValue({
        'DATE': data.CURRENT_DATE,
      })
    })
  }

  hideImage() {
    // document.getElementById("full").src = "";
    this.previewImg = '';
    this.PreviewDiv = false;
  }
  previewImg:string;
  PreviewDiv : boolean = false;
  showImage(img) {
    var src = img;
    console.log(src)
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }


  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    var object ={
      chequeNo: formVal.chequeNo,
      ChequeDate: formVal.ChequeDate,
      scheme_type: formVal.scheme_type,
      AC_NO: formVal.AC_NO,
      particulars: formVal.particulars,
      amount: formVal.amount,
    }
    if (formVal.chequeNo == "" || formVal.chequeNo == null) {
      Swal.fire("Warning!","Please Insert Mandatory Record for type!","error");
    } else if (formVal.ChequeDate == "" || formVal.ChequeDate == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Mandatory Record for Head!",
        "info"
      );
    } else if (formVal.scheme_type == "" || formVal.scheme_type == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Mandatory Record for Sub Head!",
        "info"
      );
    } 
    else {
      this.multigrid.push(object);
      console.log(this.multigrid)

    }
    // this.multigrid.push(object);
    this.resetgrid();
  }

  resetgrid() {
    this.angForm.controls["chequeNo"].reset();
    this.angForm.controls["ChequeDate"].reset();
    this.angForm.controls["scheme_type"].reset();
    this.angForm.controls["particulars"].reset();
    this.angForm.controls["AC_NO"].reset();
    this.angForm.controls["amount"].reset();


  }

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer=false
    }
    if (value == 2) {
      this.isTransfer=true
    }
  }

  //function toggle update to add button
  updateData() {
    // this.showButton = true;
    // this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    // this.message.BranchCode = info.SchemeCode;
    // this.message.OtherChargesGLAccount = info.OtherChargesGLAccount;
    // this.message.TokenNo = info.TokenNo;
    // this.message.InterestRate = info.InterestRate;
    // this.message.TotalInterest = info.TotalInterest;
    // this.message.OtherChargesAmount = info.OtherChargesAmount;
    // this.message.SchemeCode = info.SchemeCode;
    // this.message.AccountNumber = info.AccountNumber;
    // this.message.HOSubGL = info.HOSubGL;
    // this.message.Amount = info.Amount;
    // this.message.AccountName = info.AccountName;

    // this.showButton = false;
    // this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    // this.message.BranchCode = info.title;
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "Do you want to delete title." + this.message.BranchCode + "  data",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#229954',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your data has been deleted.',
    //       'success'
    //     )
    //   } else if (
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your data is safe.',
    //       'error'
    //     )
    //   }
    // })
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.CashTrue = true;
      this.TransferTrue = false;
    }
    if (val == 2) {
      this.CashTrue = false;
      this.TransferTrue = true;
    }
  }

   //get Narration Details 
   getNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  
}
