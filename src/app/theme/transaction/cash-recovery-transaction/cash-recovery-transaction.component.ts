import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@Component({
  selector: 'app-cash-recovery-transaction',
  templateUrl: './cash-recovery-transaction.component.html',
  styleUrls: ['./cash-recovery-transaction.component.scss']
})
export class CashRecoveryTransactionComponent implements OnInit {


  angForm : FormGroup;
  
  Cust_ID: any;
  obj: any[];
  branch_code: any;
  selectedBranch: any;
  ngacno: any;
  tScheme: any;
  transferSchemeDetails: any;
  constructor(private fb: FormBuilder,
    private customerID: CustomerIDMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService) { }

  selectedCId
  selectedScode
  selectedMemno

  //variable for checkbox
  isIsRestrictTransactionEntry: boolean = false;


  //dropdown variables
  cId:any
  schemeCode:any
  memNo:any[]

  ngOnInit(): void {
    this.createForm();

    //For Customer Id dropdown
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      
    })

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.getIntroducer()
    })
    
    //For Scheme Code dropdown

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.schemeCode = data;
      
    });

    
    
  }

  getIntro(event){
    this.getschemename = event.name
    this.getIntroducer()
  }

  getBranch(event) {
    
    //debugger
    this.selectedBranch = event.value
    this.getIntroducer()
    
  }


      //For Starting account and Ending Account dropdown
      getschemename: any
  getIntroducer() {
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // let branchCode = result.branch.id;
    this.obj = [this.selectedScode,this.selectedBranch]

    
    switch (this.getschemename) {

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null
        
 
        })
        break;


     case 'SB':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.memNo = data;
      this.selectedMemno = null

         })
         break;
 
       case 'CA':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

         })
         break;
 
       case 'LN':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

         })
         break;
 
       case 'TD':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

         })
         break;
 
       case 'DS':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

 
         })
         break;
 
       case 'CC':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

         })
         break;
 
       case 'GS':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

 
         })
         break;
 
       case 'PG':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null
  
 
         })
         break;
 
       case 'AG':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

 
         })
         break;
 
       case 'IV':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        this.selectedMemno = null

 
         })
         break;
    }
     
   }


  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name
    this.obj = [this.selectedScode, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
          this.memNo = data;
        })
        break;
    }
  }

  createForm(){
    this.angForm = this.fb.group({

      customerid: ['',[Validators.required]],
      branch: ['',[Validators.required]],
      checkActive: [false],
      scode: ['',[Validators.required]],
      memberno: ['',[Validators.required]],
      totalamount: ['',[Validators.required]],
    });
  }

}
