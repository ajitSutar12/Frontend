import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {

  
  angForm: FormGroup;
  obj: any[];
  scheme_code: any;
  ngIntroducer: any = null;
  schemeList: any[];
  url = environment.base_url;
  report_url = environment.report_url;
  ngbranch
  branchOption: any;
  iframe5url: any = '';
  clicked: boolean = false;
  showLoading: boolean = false;
  showRepo: boolean = false;
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  constructor(
    private fb: FormBuilder,
    private _schemeService: SchemeAccountNoService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,private systemParameter: SystemMasterParametersService

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }

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
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })

  }


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
    // this.http.post('http://192.168.1.157:4771/ledger-view/memShare', obj).subscribe((data: any[]) => {
    this.http.post(this.url + '/ledger-view/memShare', obj).subscribe((data: any[]) => {
     
    console.log(data)
      this.accountArray = data
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      scheme_code: ['', [Validators.required]],
      Differ: [''],
      memNo: [''],
      empNo: [''],
      END_DATE: [''],
      Division: [''],
      Date_of_Birth: [''],
      Joiningdate: [''],
      Retairmentdate: [''],
      tlAmt: [''],
      tdAmt: [''],
      tioLoan: [''],
      tioDep: [''],
      AC_NAME: [''],
      totalloan: [''],
      DTot: [''],
    });
  }



  add() {

  }


  myArray
  name = null
  tableArray = []
  depositTableArray = []
  sNamesString1
  sacno
  depositebal1
  depositint1
  memno
  s_appl
  accountNumber(event) {
    this.myArray = this.accountArray
    this.name = event.AC_NAME
    this.memno=event.AC_NO
    this.s_appl=event.S_APPL
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

    // this.http.post('http://192.168.1.157:4771/ledger-view/memberLoanView', obj).subscribe((data: any[]) => {
      this.http.post(this.url + '/ledger-view/memberLoanView', obj).subscribe((data: any[]) => {
      
    console.log(data);
      this.tableArray = data
      let sNamesArray1 = [];
      let DBal1=[];
      let acno=[];
      let Ddepointamt1=[];
      this.tableArray.forEach(item => {
          console.log(item.S_NAME);
          sNamesArray1.push(item.S_NAME);
          // acno.push(item.AC_NO,item.S_APPL)
          acno.push(item.AC_NO)

          DBal1.push(item.LEDGER_BAL);
          Ddepointamt1.push(item.loanIntamount);
      });
      // this.sNamesString1 = sNamesArray1.join(', ').split(' .');
      // this.depositebal1 = DBal1.join(', ');
      // this.depositint1 = Ddepointamt1.join(', ');


      this.sNamesString1 = sNamesArray1.map(name => `${name}<br/>`);
      this.sacno = acno.map(acno => `${acno}<br/>`);

      this.depositebal1 = DBal1.map(bal => `${bal}<br/>`);
      this.depositint1 = Ddepointamt1.map(int => `${int}<br/>`);
      this.calculateTotalBalance()
      this.calculateTot()
    })

    this.secondtableData()
  }


  accId
  schemeName
  sNamesString
  depositebal
  depositint
  depoacno
  ledBalanTYPE
  secondtableData() {
    let obj = {
      'idmasterID': this.accId
    }
    // this.http.post('http://192.168.1.157:4771/ledger-view/memberDepoLoan', obj).subscribe((response: any[]) => {
    this.http.post(this.url + '/ledger-view/memberDepoLoan', obj).subscribe((response: any[]) => {
      console.log(response);
      this.depositTableArray = response
      let sNamesArray = [];
      let DBal=[];
      let Dacno=[];
      let Ddepointamt=[];
      let ledBalTYPE=[];
      this.depositTableArray.forEach(item => {
          console.log(item.S_NAME);
          sNamesArray.push(item.S_NAME);
          // Dacno.push(item.AC_NO,item.S_APPL)
          Dacno.push(item.AC_NO);
          // ledBalTYPE.push(item.LEDGERBALANCE_TYPE);
          DBal.push(item.LEDGERBALANCE);
          Ddepointamt.push(item.depoIntamount);
      });
      // this.sNamesString = sNamesArray.join(',').split(' .');
      // this.depositebal = DBal.join(', ');
      // this.depositint = Ddepointamt.join(', ');

      this.sNamesString = sNamesArray.map(name => `${name}<br/>`);
      this.depoacno = Dacno.map(acno => `${acno}<br/>`);
      this.depositebal = DBal.map(bal => `${bal}<br/>`);
      // this.ledBalanTYPE = ledBalTYPE.map(ledBalTYPE => `${ledBalTYPE}<br/>`);

      this.depositint = Ddepointamt.map(int => `${int}<br/>`);
     
      this.depositeCalculation()
      this.depositeTot()
    })
  }

  totalBalance
  TotalBalance
  loanIntRate
  totalString
  total
  calculateTotalBalance() {
    let balance = 0.0;
    let intRate = 0.0;
    for (let i = 0; i < this.tableArray.length; i++) {
      balance += parseFloat(this.tableArray[i]['LEDGER_BAL']);
      intRate += parseFloat(this.tableArray[i]['loanIntamount']);
    }

    this.totalBalance = parseFloat(balance.toFixed(2));
    this.loanIntRate = parseFloat(intRate.toFixed(2));
    //  this.total = this.totalBalance + this.loanIntRate;
    // this.totalString = total.fixed();
  }
  GTot
  calculateTot() {
    const totalBalanceCalNum = parseFloat(this.totalBalance);
    const loanIntRateNum = parseFloat(this.loanIntRate);
    this.GTot =  totalBalanceCalNum + loanIntRateNum;
    this.loanTot()
  }

  totalDepositCal
  depoIntRate
  total1
  depositeCalculation() {
    let balance1 = 0.0;
    let intRate1 = 0.0;

    for (let i = 0; i < this.depositTableArray.length; i++) {
      balance1 += parseFloat(this.depositTableArray[i]['LEDGERBALANCE']);
      intRate1 += parseFloat(this.depositTableArray[i]['depoIntamount']);
    }
    this.totalDepositCal = Math.abs(balance1).toFixed(2)
    this.depoIntRate = `${intRate1.toFixed(2)}`

    this.total1 = this.totalDepositCal + this.depoIntRate;
    this.differ()
  }
  DTot
  depositeTot() {
    let totalDepositCalNum = parseFloat(this.totalDepositCal);
  let depoIntRateNum = parseFloat(this.depoIntRate);
  this.DTot = totalDepositCalNum + depoIntRateNum;
  
  }
  diffLoanAndDepo
  differ() {
    let diff = this.GTot - this.DTot
    this.diffLoanAndDepo = Math.abs(diff).toFixed(2)

  }
  totln
  loanTot(){

  
  }
  View() {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let branch = obj.BRANCH_CODE;
      let schemename=  this.sNamesString;
      let deposbal=this.depositebal;
      let deposint=this.depositint;
      let loanscheme=this.sNamesString1;
      let loanbal=this.depositebal1;
      let loanint=this.depositint1;
      let ac_name=obj.AC_NAME
      let totln= obj.tlAmt  +  obj.tdAmt
     
      let edate = moment(obj.END_DATE).format('DD/MM/YYYY');
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };



      // let iframeData = {
      //   branch: branchName,
      //   bankName: bankName,
      //   schemename: schemename,
      //   depositBal: deposbal,
      //   depositInt: deposint,
      //   loanint: loanint,
      //   loanbal: loanbal,
      //   loanscheme: loanscheme,
      //   loanDepoTotal: obj.tioLoan,
      //   loanBalTotal: obj.tlAmt,
      //   DepoIntTotal: obj.tioDep,
      //   DepoBalTotal: obj.tdAmt,
      //   ac_name: ac_name,
      //   memno: this.memno,
      //   s_appl: this.s_appl,
      //   date: obj.END_DATE,
      //   netdiff: this.diffLoanAndDepo,
      //   loanacno: this.sacno,
      //   depoacno: this.dacno,
      //   ledBalanTYPE:this.ledBalanTYPE,
      //   // Add other parameters as needed
      // };
    
      // let iframeDataString = JSON.stringify(iframeData);
    
      // this.iframe5url = this.report_url + "examples/memberview.php?iframeData=" + iframeDataString + "";
      // console.log(this.iframe5url);


      this.iframe5url = this.report_url + "examples/memberview.php?branch=" + branchName + "&bankName='" + bankName + "'&schemename=" + schemename +"&depositBal=" + deposbal + "&depositInt=" + deposint +"&loanint=" + loanint + "&loanbal=" + loanbal +"&loanscheme=" + loanscheme +"&loanDepoTotal=" +  obj.tioLoan + "&loanBalTotal=" +  obj.tlAmt +"&DepoIntTotal=" +  obj.tioDep + "&DepoBalTotal=" +  obj.tdAmt + "&ac_name=" + ac_name + "&memno=" + this.memno +"&s_appl=" +  this.s_appl +"&date=" + obj.END_DATE +"&netdiff=" + this.diffLoanAndDepo + "&loanacno=" +  this.sacno +"&depoacno=" +   this.depoacno +"";
      console.log(this.iframe5url)
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  onLoad() {
    this.showLoading = false;

  }
  close() {
    this.angForm.reset()
    this.resetForm()
    this.clearTableData()
  }

  clearTableData() {
    this.selectedMemno = '';
    this.tableArray = [];
    this.sNamesString1 =   '';
    this.depositebal1 = '';
    this.depositint1 = '';
    this.depositTableArray = [];
    this.sNamesString = '';
    this.depositebal = '';
    this.depositint = '';
  }
  resetForm() {
    this.angForm.controls.scheme_code.reset();
    this.angForm.controls.memNo.reset();
    this.angForm.controls.DTot.reset();
    this.angForm.controls.totalloan.reset();
    this.angForm.controls.AC_NAME.reset();
    this.angForm.controls.tioDep.reset();
    this.angForm.controls.tioLoan.reset();
    this.angForm.controls.tdAmt.reset();
    this.angForm.controls.tlAmt.reset();
    this.angForm.controls.Retairmentdate.reset();
    this.angForm.controls.Joiningdate.reset();
    this.angForm.controls.Date_of_Birth.reset();
    this.angForm.controls.empNo.reset();
    this.angForm.controls.Division.reset();


    this.showRepo = false;
    this.clicked = false;
  }
}
