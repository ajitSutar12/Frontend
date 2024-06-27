import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { env } from 'process';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {

  angForm: FormGroup;
  obj: any[];
  schemeType: string = 'SH'
  dschemeType: string = 'LN'
  clicked = false;
  showRepo: boolean = false;
  url = environment.base_url;
  // selectedValue
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient
  ) {
    // this.selectedValue=null
    this.dates = moment().format('DD/MM/YYYY');

  }
  dates
  //ngfor variables
  branch_code
  Schemecode
  introducerACNo
  demand_Scheme
  purpose_Loan
  g_One
  g_Two
  g_Three
  g_four
  tableData


  //ngmodel variables
  selectedTransBranch
  selectedTransScheme
  selectedTransMemno
  selectedApplNo
  selectedDScheme
  selectedpfLoan
  selectedG1
  selectedG2
  selectedG3
  selectedG4

  ngacno: any;
  tScheme: any;
  transferSchemeDetails: any;

  demandAmt
  totsalary
  totDeduc
  purpose_id
  sancAmt
  ShareDedu: number
  Deposit: number
  basicDA
  intRate
  loanPer
  sanShif
  othSanDed
  InsattAmt
  sanName
  ngOnInit(): void {
    this.createForm();

    //for Branch Dropdown
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.getIntroducer()
    })

    //Scheme Code Dropdown
    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   this.Schemecode = data
    //   // this.Schemecode = data[0].value
    //   this.getIntroducer()

    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (Schemecode) {
        return (Schemecode.name == 'SH');
      });
      this.Schemecode = filtered;


      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })

    //Demand Scheme Code Dropdown
    // this.schemeCodeDropdownService.getSchemeCodeList(this.dschemeType).pipe(first()).subscribe(data => {
    //   this.demand_Scheme = data
    //   // this.Schemecode = data[0].value
    //   this.getIntroducer()
    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (demand_Scheme) {
        return (demand_Scheme.name == 'LN');
      });
      this.demand_Scheme = filtered.slice(0, 5);

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

    })

    // this.http.get('http://192.168.1.180:3000/employee/purposeloan').subscribe((data: any) => {
    this.http.get(this.url+'/employee/purposeloan').subscribe((data: any) => {

      this.purpose_Loan = data
      this.purpose_id = data[2].id
      console.log("new", this.purpose_Loan)
    })

  }
  oldLoan
  bankacno
  Actype
  sanctionAmt
  ledgBal
  IntAmt
  seValue
  AcNotype
  oldInt
  tablescheme: any[] = []
  Odate
  Cdate
  salarydiv
  subsalarydiv
  memnumber(event) {
    this.seValue = this.selectedTransMemno
    console.log("mem", this.seValue)
    let formValues = this.angForm.value;
    let mydate = formValues.loandDate
    let edate: any;
    if (this.dates == formValues.loandDate) {
      edate = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
    } else {
      edate = moment(formValues.loandDate, 'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let userData = JSON.parse(localStorage.getItem('user'));
    let branchcode = userData.branch.CODE
    let obj = {
      'BRANCH_CODE': branchcode,
      'AC_MEMBNO': event.AC_MEMBNO,
      'LOANDEMANDATE': edate
    }
    // this.http.post('http://192.168.1.180:3000/employee/detail', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/detail', obj).subscribe((data: any) => {

      // console.log(data);

      this.tableData = data
      for (let i = 0; i < this.tableData.length; i++) {
        this.AcNotype = this.tableData[i].AC_ACNOTYPE
        this.ledgBal = this.tableData[i].LEDGER_BAL;
        this.IntAmt = this.tableData[i].InterestAmount;
        this.bankacno = this.tableData[i].BANKACNO
        this.Actype = this.tableData[i].AC_TYPE
        this.sanctionAmt = this.tableData[i].AC_SANCTION_AMOUNT
        this.salarydiv = this.tableData[i].AC_SALARYDIVISION_CODE,
          this.subsalarydiv = this.tableData[i].SUB_SALARYDIVISION_CODE,
          this.tablescheme.push(this.tableData[i].S_NAME)
      }

      console.log("table data", this.tableData)
      console.log("table scheme", this.tablescheme)
      this.g_One.forEach(item => {
        item.disabled = (this.selectedTransMemno && this.selectedTransMemno.AC_MEMBNO === item.AC_MEMBNO);
      });


      this.g_Two.forEach(item => {
        item.disabled = (this.selectedTransMemno && this.selectedTransMemno.AC_MEMBNO === item.AC_MEMBNO);

      });


      this.g_Three.forEach(item => {
        item.disabled = (this.selectedTransMemno && this.selectedTransMemno.AC_MEMBNO === item.AC_MEMBNO);
      });

      this.g_four.forEach(item => {
        item.disabled = (this.selectedTransMemno && this.selectedTransMemno.AC_MEMBNO === item.AC_MEMBNO);
      });


    });

  }




  loanDate
  forGetDate(event) {
    this.loanDate = event.value

  }

  getIntroducer() {
    // debugger
    this.obj = [this.selectedTransScheme, this.selectedTransBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      // console.log(data);

      this.introducerACNo = data;
      this.g_One = data;
      this.g_Two = data;
    })
    let formValues = this.angForm.value;


  }
  DeApp
  applicationNo
  branchCode
  getbranchid(event) {
    this.branchCode = event.value
    let obj = {
      'BRANCH_CODE': event.value
    }

    // this.http.post('http://192.168.1.180:3000/employee/Application_no', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/Application_no', obj).subscribe((data: any) => {

      this.applicationNo = data
      this.DeApp = this.applicationNo
      console.log("new", this.applicationNo)
    })

  }

  Mem_number
  schemeid
  mem_num
  getScheme(event) {
    this.schemeid = event.value
    let obj = {
      'Scheme_Id': event.value
    }
    // this.http.post('http://192.168.1.180:3000/employee/membno', obj).subscribe((data: any) => {
    this.http.post(this.url+'/employee/membno', obj).subscribe((data: any) => {

      this.Mem_number = data
      this.mem_num = data[2].AC_MEMBNO
      this.g_One = data
      this.g_Two = data
      this.g_Three = data
      this.g_four = data
      this.g_One = data.map((item: any) => ({ ...item, disabled: false }));
      this.g_Two = data.map((item: any) => ({ ...item, disabled: false }));
      this.g_Three = data.map((item: any) => ({ ...item, disabled: false }));
      this.g_four = data.map((item: any) => ({ ...item, disabled: false }));

      console.log("memno", this.Mem_number)
    })
  }
  id
  getLoan(event) {
    this.id = event.id
  }

  createForm() {
    this.angForm = this.fb.group({
      demandApplNo: ['', [Validators.required]],
      loandDate: ['', [Validators.required]],
      meetDate: ['', [Validators.required]],
      ReDate: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      scode: ['', [Validators.required]],
      memno: ['', [Validators.required]],
      demandScheme: ['', [Validators.required]],
      demandAmt: ['', [Validators.required]],
      basicDa: ['', [Validators.required]],
      totalS: ['', [Validators.required]],
      totalD: ['', [Validators.required]],
      iRate: ['', [Validators.required]],
      loanPeriod: ['', [Validators.required]],
      asAmt: ['', [Validators.required]],
      sanShifaras: ['', [Validators.required]],
      pfLoan: ['', [Validators.required]],
      oldLDues: ['', [Validators.required]],
      oldLInterest: ['', [Validators.required]],
      totpayamt: ['', [Validators.required]],
      Insamt: ['', [Validators.required]],
      shDeduct: ['', [Validators.required]],

      deposits: ['', [Validators.required]],
      othSName: ['', [Validators.required]],
      othSdeduct: ['', [Validators.required]]

    });
  }

  // tableData = [
  //   { Type:1, Scheme : 1, acno: 1, opendate: 'abc', expiredate: 1200, sanction: 30, LedgerBal: 2 ,Interest:50 },
  //   { Type:1, Scheme : 1, acno: 2, opendate: 'xyz', expiredate: 1200, sanction: 20, LedgerBal: 2, Interest:20 }

  // ];
  reset() {
    this.angForm.controls['branch'].reset()
    this.angForm.controls['demandApplNo'].reset()
    this.angForm.controls['loandDate'].reset()
    this.angForm.controls['meetDate'].reset()
    this.angForm.controls['scode'].reset()
    this.angForm.controls['memno'].reset()
    this.angForm.controls['demandScheme'].reset()
    this.angForm.controls['demandAmt'].reset()
    this.angForm.controls['basicDa'].reset()
    this.angForm.controls['totalS'].reset()
    this.angForm.controls['totalD'].reset()
    this.angForm.controls['iRate'].reset()
    this.angForm.controls['loanPeriod'].reset()
    this.angForm.controls['asAmt'].reset()
    this.angForm.controls['sanShifaras'].reset()
    this.angForm.controls['pfLoan'].reset()
    this.angForm.controls['oldLDues'].reset()
    this.angForm.controls['gOne'].reset()
    this.angForm.controls['shDeduct'].reset()
    this.angForm.controls['gTwo'].reset()
    this.angForm.controls['deposits'].reset()
    this.angForm.controls['othSName'].reset()
    this.angForm.controls['othSdeduct'].reset()

  }
  close() {
    this.resetForm()
  }

  resetForm() {
    this.showRepo = false;
    this.clicked = false;
  }
  demScheme
  selectedScheme
  legbal
  checkscheme
  getDeScheme(event) {
    this.demScheme = event.value
    this.selectedScheme = event.label

    for (let i = 0; i < this.tableData.length; i++) {

      if (this.selectedScheme === this.tableData[i].S_NAME) {
        this.oldLoan = this.tableData[i].LEDGER_BAL
        this.oldInt = this.tableData[i].InterestAmount
        // this.Odate = this.tableData[i].AC_OPDATE
        // this.Cdate = this.tableData[i].AC_EXPIRE_DATE
        break;
      }
      else {
        this.oldLoan = 0;
        this.oldInt = 0;
      }
    }



  }
  guranterid
  guranterid2
  guranterid3
  guranterid4
  getGuranter(event) {
    this.guranterid = event
  }
  getGuranter2(event) {
    this.guranterid2 = event.AC_MEMBNO
  }
  getGuranter3(event) {
    this.guranterid3 = event.AC_MEMBNO
  }
  getGuranter4(event) {
    this.guranterid4 = event.AC_MEMBNO
  }
  TotAmount
  Add
  oldLoan1: number = 5;
  oldInt1: number = 5;
  totPayamt(event) {
    this.sanShif = Number(this.sanShif)
    this.oldLoan = Number(this.oldLoan);
    this.oldInt = Number(this.oldInt);
    this.ShareDedu = Number(this.ShareDedu);
    this.Deposit = Number(this.Deposit);
    this.othSanDed = Number(this.othSanDed)
    this.Add = this.sanShif + this.oldLoan + this.oldInt + this.ShareDedu + this.Deposit + this.othSanDed
    // this.Add = this.ShareDedu + this.Deposit
    this.TotAmount = this.sancAmt - this.Add;
    console.log('amt', this.TotAmount)
  }

  getamt(event) {
    this.compoundInterestCalculation();
  }
  date1
  date2: Date
  result: number
  months
  compoundInterestCalculation() {
    const formVal = this.angForm.value;
    const moment = require('moment');
    let userData = JSON.parse(localStorage.getItem("user"));
    this.date1 = userData.branch.syspara.CURRENT_DATE;
    this.months = formVal.loanPeriod
    var Quarters = Math.floor(this.angForm.controls['loanPeriod'].value) / 1;

    // var startdate = moment('2023-08-27'); 
    // var enddate = startdate.clone().add( this.months, 'months'); 
    // var result = enddate.diff(startdate, 'days');

    var dateParts = this.date1.split('/');
    var day = parseInt(dateParts[0], 10);
    var month = parseInt(dateParts[1], 10) - 1;
    var year = parseInt(dateParts[2], 10);

    var startDate = new Date(year, month, day);
    var endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + this.months);
    var oneDay = 1000 * 60 * 60 * 24;
    var timeDiff = endDate.getTime() - startDate.getTime();
    var result = Math.ceil(timeDiff / oneDay);

    console.log(" end date:", endDate);

    var amount = this.angForm.controls['asAmt'].value
    var maturityAmount = this.angForm.controls['Insamt'].value

    for (let i = 1; i <= Quarters; i++) {
      let totalInterest: number
      var sample = parseFloat(amount);
      var totalInt = (parseFloat(amount) * (this.angForm.controls['iRate'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
      totalInterest = Number(totalInt)
      amount = (parseFloat(amount) + (totalInterest)).toFixed(10)

      totalInterest = 0


    }

    maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * Number(this.angForm.controls['iRate'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)
    console.log("amt", maturityAmount)
    this.angForm.patchValue({
      Insamt: maturityAmount
    })
    console.log("amt", maturityAmount)
  }

  usercode
  submit() {
    if (this.angForm.invalid) {
      return;
    }

    // let selected = this.shemeDetails[0];
    let formValues = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let userData = JSON.parse(localStorage.getItem("user"));
    this.usercode = userData.id;
    // this.salaryDiv=data;

    // console.log(selected);

    let obj = {
      'APPLICATION_NO': this.DeApp,
      'APPLICATION_DATE': moment(formValues.loandDate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      'MEETING_DATE': moment(formValues.meetDate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      'AC_TYPE': this.schemeid,
      'AC_NO': this.mem_num,
      'AC_OLDACNOTYPE': this.AcNotype,
      'AC_OLDACTYPE': this.Actype,
      'AC_OLDACNO': this.bankacno,
      'DEMAND_AMOUNT': this.demandAmt,
      'TOTAL_SALARY': this.totsalary,
      'TOTAL_DEDUCTION': this.totDeduc,
      'RESON': this.purpose_id,
      'AC_GURR1': this.guranterid,
      'AC_GURR2': this.guranterid2,
      'SANCTION_AMT': this.sancAmt,
      'SHARE_DEDUCTION': this.ShareDedu,
      'DEPOSIT': this.Deposit,
      'AC_DRAWPOWER_AMT': this.demandAmt,
      'REQUEST_ACTYPE': this.demScheme,
      'BASIC_DA': this.basicDA,
      'INT_RATE': this.intRate,
      'MONTHS': this.loanPer,
      'ACTUAL_SANCTION_AMOUNT': this.sancAmt,
      'SANSTHA_SHIFARAS': this.sanShif,
      'OTHER_SANSTHA_NAME': this.sanName,
      'LEGDSER_BALANCE': this.oldLoan,
      'OTHER_SANASTA_DEDUCATION': this.othSanDed,
      'AC_GURR3': this.guranterid3,
      'AC_GURR4': this.guranterid4,
      'AC_SALARYDIVISION_CODE': this.salarydiv,
      'SUB_SALARYDIVISION_CODE': this.subsalarydiv,
      'AC_INSTALLMENT': this.InsattAmt,
      'AC_MONTHS': this.loanPer,
      'AC_BRANCH': this.branchCode,
      'USER_CODE':this.usercode,
      'OFFICER_CODE':this.usercode
      // 'date': 

    };

    // this.http.post('http://192.168.1.180:3000/employee/insert', obj).subscribe(
    this.http.post(this.url+'/employee/insert', obj).subscribe(

      (response) => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully',
        });
      },

    );
  }
}
