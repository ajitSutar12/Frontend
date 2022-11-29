import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service';





@Component({
  selector: 'app-term-deposit-receipt-printing',
  templateUrl: './term-deposit-receipt-printing.component.html',
  styleUrls: ['./term-deposit-receipt-printing.component.scss']
})
export class TermDepositReceiptPrintingComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;


    //for Formgroup
    ngForm: FormGroup
    
    bsValue = new Date();

    //ngModel
    BranchCode
    schemeCode
    firstno
    fromdate
    todate
    acnumber
    lastno
    scheme
  isTdsForm: boolean;
  branch_code: any;
  
  obj: any;
  introducerACNo: any;
  selectedBranch: any;
  narrationList: any;

  Scheme 
  ngFnarration: any;

  schemeACNo
  transferSchemeDetails : any;
  schemeType: string = 'TD'

  constructor(  
    private fb: FormBuilder,
    private _service: VoucherEntryService,

     private ownbranchMasterService : OwnbranchMasterService,
    private schemeCodeDropdownService : SchemeCodeDropdownService,
    private schemeAccountNoService : SchemeAccountNoService



  ) { }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    //branchcode
        this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
          this.branch_code = data;
          this.BranchCode = user.branchId;
        })

this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
  this.scheme = data

  
  this.schemeCode = data[0].value
  this.getIntroducer()

})

this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  this.Scheme = data;
});

  //Narration List
  this._service.getNarrationMaster().subscribe(data => {
    this.narrationList = data;
  })

}

getIntroducer() {
this.obj = [this.schemeCode,this.BranchCode]


this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
  
  this.introducerACNo = data;
})

}

  createForm()
  {
    this.ngForm = this.fb.group({

      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FIRST_NO: ['', [Validators.required]],
      LAST_NO: ['', [Validators.required]],
      FROM_DATE : ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      PRINT_NO: ['', [Validators.required]],
      Fnarration : ['']
    });
  }
  
  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;
     
    } else {
      this.isTdsForm = false;
    }
  }

  getNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

}




