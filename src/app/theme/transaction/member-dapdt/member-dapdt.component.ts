import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup,  Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-dapdt',
  templateUrl: './member-dapdt.component.html',
  styleUrls: ['./member-dapdt.component.scss']
})
export class MemberDAPDTComponent implements OnInit {
  angForm: FormGroup;
  date
  maxDate
  minDate
  branchOption
  ngbranch
  selectedMemno
  name
  url = environment.base_url;
  accountArray = []
  type: any;
  public visibleAnimate = false;
  public visible = false;
  isTransfer: boolean = false
  multigrid = []
  selectedCode: string;
  display: string;
  totalPayableAmount: number = 0;
  data = [
    { srNo: 1, schemeCode: 2, accountNumber: 3, accountType: 4, payableAmount: 5, balanceAmount: 6, voucherNumber: 7 }
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private modalService: NgbModal,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) { 
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      memNo: [''],
      Division: [''],
      date: ['',[Validators.required]],
      type: ['cash'],
      tlAmt:[''],
      SAVING_PIGMY: ['FormC'],
      chequeNo: ['', [Validators.pattern]],
      ChequeDate: ['', [Validators.pattern]],
      scheme_type: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      particulars: [null],
      total_amt: [0],
      Dividend: [false],
      MEMBER_GIFT: [false],
      INT_ON_DEBIT: [false],
      REBEAT_INT: [false]
    });
  }
  ngOnInit(): void {
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.date = data.CURRENT_DATE;
    });

  }
 
  //Transfer part
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
      this.multigrid = []
    }
    else if (value == 2) {
      this.isTransfer = true
      this.multigrid = []
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onPayableAmountChange(event: any, index: number) {
    const value = event.target.innerText;
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      this.data[index].payableAmount = amount;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.totalPayableAmount = this.data.reduce((sum, row) => sum + row.payableAmount, 0);
  }
  cancel(){
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    // this.createForm();
    this.angForm.controls.Cashier_Code.reset();
    
  }
  
}
