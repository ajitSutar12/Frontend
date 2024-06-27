import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {

  url = environment.base_url
  angForm: FormGroup;
  obj: any[];
  scheme_code: any;
  ngIntroducer: any = null;
  schemeList: any[];
  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private http: HttpClient

  ) { }

  //ngfor variables
  introducerACNo


  //ngmodel variables
  selectedMemno

  ngOnInit(): void {

    this.createForm();

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let code = 1;
    this.obj = [code, branchCode]

    this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);

      this.introducerACNo = data;

    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.schemeList = filtered;
      this.ngIntroducer = null;
    })


  }

  View() { }
  // printTextArea() {
  //   this.calculateTotalBalance();
  //   this.calculateTotalBalance1();
  // }
  accountArray = []

  getSchemCode(event) {
    this.accountArray = []
    let obj = {
      'AC_TYPE': event.value
    }
    this.http.post('http://192.168.1.195:7276/ledger-view/memShare', obj).subscribe((data: any[]) => {
      console.log(data)
      this.accountArray = data
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      scheme_code: ["", [Validators.required]],
      Differ: ["", [Validators.required]],
      memNo: ['', [Validators.required]],
      empNo: ['', [Validators.required]],
      date: ['', [Validators.required]],
      Division: ['', [Validators.required]],
      Date_of_Birth: ['', [Validators.required]],
      Joiningdate: ['', [Validators.required]],
      Retairmentdate: ['', [Validators.required]],
      tlAmt: ['', [Validators.required]],
      tdAmt: ['', [Validators.required]],
      tioLoan: ['', [Validators.required]],
      tioDep: ['', [Validators.required]],
      AC_NAME: ['', [Validators.required]],
    });
  }


  totalBalance
  TotalBalance
  loanIntRate
  calculateTotalBalance() {
    let balance = 0.0;
    let intRate = 0.0;
    for (let i = 0; i < this.tableArray.length; i++) {
      balance += parseFloat(this.tableArray[i]['LEDGER_BAL']);
      intRate += parseFloat(this.tableArray[i]['loanIntamount']);

    }
    this.totalBalance = `${balance.toFixed(2)}`
    this.loanIntRate = `${intRate.toFixed(2)}`

  }



  myArray
  name = null
  tableArray = []
  depositTableArray = []
  accountNumber(event) {
    this.myArray = this.accountArray
    this.name = event.AC_NAME
    this.angForm.patchValue({
      empNo: event.EMP_NO,
      date: event.EMP_NO,
      Date_of_Birth: event.AC_BIRTH_DT,
      Joiningdate: event.AC_JOIN_DATE,
      Retairmentdate: event.AC_RETIRE_DATE,
      Division: event.AC_SALARYDIVISION_CODE,
      // AC_NAME: this.myArray.AC_NAME,
    });


    this.accId = event.idmasterID

    let obj = {
      'idmasterID': event.idmasterID
    }

    this.http.post('http://192.168.1.195:7276/ledger-view/memberLoanView', obj).subscribe((data: any[]) => {
      console.log(data);
      this.tableArray = data
      this.calculateTotalBalance()
    })

    this.secondtableData()
  }

  accId
  secondtableData() {
    let obj = {
      'idmasterID': this.accId
    }

    this.http.post('http://192.168.1.195:7276/ledger-view/memberDepoLoan', obj).subscribe((response: any[]) => {
      console.log(response);
      this.depositTableArray = response
      this.depositeCalculation()
    })
  }

  totalDepositCal
  depoIntRate
  depositeCalculation() {
    let balance = 0.0;
    let intRate = 0.0;

    for (let i = 0; i < this.depositTableArray.length; i++) {
      balance += parseFloat(this.depositTableArray[i]['LEDGERBALANCE']);
      intRate += parseFloat(this.depositTableArray[i]['depoIntamount']);
    }
    this.totalDepositCal = Math.abs(balance).toFixed(2)
    this.depoIntRate = `${intRate.toFixed(2)}`
    this.differ()
  }


  diffLoanAndDepo
  differ() {
    let diff = this.loanIntRate - this.depoIntRate
    this.diffLoanAndDepo = Math.abs(diff).toFixed(2)

  }
}
