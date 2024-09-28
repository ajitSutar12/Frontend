import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from 'src/app/shared/dropdownService/interest-category-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InterestRateForLoanandCCService } from 'src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service';
import { PurposeMasterDropdownService } from 'src/app/shared/dropdownService/purpose-master-dropdown.service';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {

  angForm: FormGroup;

  @Output() reloadTablePassing = new EventEmitter<string>();
  obj: any[];
  schemeType: string = 'SH'
  dschemeType: string = 'LN'
  clicked = false;
  showRepo: boolean = false;
  url = environment.base_url;
  GuarantorShowButton: boolean = true
  GuarantorUpdateShow: boolean = false
  CoBorrowerupdateid
  CoBorrowerShowButton: boolean = true
  CoBorrowerUpdateShow: boolean = false
  CoBorrowerID
  Guarantorupdateid
  GuarantorID
  coBorrowerIndex
  getCustInfo = []
  // selectedValue
  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private customerID: CustomerIDMasterDropdownService,
    private purposeMaster: PurposeMasterDropdownService,
    private http: HttpClient,
    private interstCate: IntrestCategoryMasterDropdownService,
    private customerIdService: CustomerIdService,
    public sanitizer: DomSanitizer,
    private InterestRateForLoanandCC: InterestRateForLoanandCCService,
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
  Cust_ID = []
  CCust_ID = []
  intCat = []
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

    this.purposeMaster.getPurposeMasterList().pipe(first()).subscribe(data => {
      this.purpose_Loan = data;
    })

    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.CCust_ID = data;
    })

    this.interstCate.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.intCat = data;
    })

  }
  oldLoan = 0
  bankacno
  Actype
  sanctionAmt
  ledgBal
  IntAmt
  seValue
  AcNotype
  oldInt = 0
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
    this.http.post(this.url + '/employee/detail', obj).subscribe((data: any) => {

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
    this.http.post(this.url + '/employee/Application_no', obj).subscribe((data: any) => {

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
    this.http.post(this.url + '/employee/membno', obj).subscribe((data: any) => {

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
      othSdeduct: ['', [Validators.required]],

      cust_id: ['', [Validators.required]],
      loan: ['newLoan', [Validators.required]],

      //Modal FormControls
      AC_TYPE: [''],
      AC_CUSTID: [''],
      AC_TITLE: [''],
      AC_NAME: [''],
      OP_DATE: [''],
      BIRTH_DATE: [''],
      MEMB_SCHEME: [''],
      MEMB_NO: [''],
      CAST: [''],
      OCCUPATION: [''],
      AC_INTCATA: ['', [Validators.required]],
      SAN_AMT: ['', [Validators.required]],
      CAC_CUSTID: ['', [Validators.required]],
      CAC_NAME: [''],

    });
  }

  // tableData = [
  //   { Type:1, Scheme : 1, acno: 1, opendate: 'abc', expiredate: 1200, sanction: 30, LedgerBal: 2 ,Interest:50 },
  //   { Type:1, Scheme : 1, acno: 2, opendate: 'xyz', expiredate: 1200, sanction: 20, LedgerBal: 2, Interest:20 }

  // ];
  reset() {
    // this.angForm.controls['branch'].reset()
    this.getCustInfo = []
    this.Cust_ID = []
    this.Deposit = null
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
    // this.angForm.controls['cust_id'].reset()
    this.angForm.controls['cust_id'].setValue(null);


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
  ac_notype
  getDeScheme(event) {

    this.angForm.patchValue({
      "AC_TYPE": event.id + " " + event.label
    })

    this.demScheme = event.value
    this.selectedScheme = event.label
    this.ac_notype = event.name

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
  totPayamt() {
    this.sanShif = isNaN(Number(this.sanShif)) ? 0 : Number(this.sanShif);
    this.oldLoan = isNaN(Number(this.oldLoan)) ? 0 : Number(this.oldLoan);
    this.oldInt = isNaN(Number(this.oldInt)) ? 0 : Number(this.oldInt);
    this.ShareDedu = isNaN(Number(this.ShareDedu)) ? 0 : Number(this.ShareDedu);
    this.Deposit = isNaN(Number(this.Deposit)) ? 0 : Number(this.Deposit);
    this.othSanDed = isNaN(Number(this.othSanDed)) ? 0 : Number(this.othSanDed);
    this.Add = this.oldLoan + this.oldInt + this.ShareDedu + this.Deposit + this.othSanDed
    // this.Add = this.ShareDedu + this.Deposit
    this.TotAmount = this.sancAmt - this.Add;
    console.log('amt', this.TotAmount)
  }

  // ShareDedu
  getLoanPeriod(event) {
    let obj = {
      "period": this.loanPer,
      "acnotype": this.ac_notype
    }

    this.http.post(this.url + '/term-loan-master/getLoanDeductPerct', obj).subscribe(data => {
      let abc = data
      let value = data[0].DEDUCTION_PERCENT
      this.ShareDedu = Number(value / 100 * this.sancAmt)
    })


  }

  getamt(event) {
    this.compoundInterestCalculation();
  }
  date1
  date2: Date
  result: number
  months
  compoundInterestCalculation() {
    // const formVal = this.angForm.value;
    // const moment = require('moment');
    // let userData = JSON.parse(localStorage.getItem("user"));
    // this.date1 = userData.branch.syspara.CURRENT_DATE;
    // this.months = formVal.loanPeriod
    // var Quarters = Math.floor(this.angForm.controls['loanPeriod'].value) / 1;

    // // var startdate = moment('2023-08-27'); 
    // // var enddate = startdate.clone().add( this.months, 'months'); 
    // // var result = enddate.diff(startdate, 'days');

    // var dateParts = this.date1.split('/');
    // var day = parseInt(dateParts[0], 10);
    // var month = parseInt(dateParts[1], 10) - 1;
    // var year = parseInt(dateParts[2], 10);

    // var startDate = new Date(year, month, day);
    // var endDate = new Date(startDate);
    // endDate.setMonth(endDate.getMonth() + this.months);
    // var oneDay = 1000 * 60 * 60 * 24;
    // var timeDiff = endDate.getTime() - startDate.getTime();
    // var result = Math.ceil(timeDiff / oneDay);

    // console.log(" end date:", endDate);

    // var amount = this.angForm.controls['asAmt'].value
    // var maturityAmount = this.angForm.controls['Insamt'].value

    // for (let i = 1; i <= Quarters; i++) {
    //   let totalInterest: number
    //   var sample = parseFloat(amount);
    //   var totalInt = (parseFloat(amount) * (this.angForm.controls['iRate'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
    //   totalInterest = Number(totalInt)
    //   amount = (parseFloat(amount) + (totalInterest)).toFixed(10)

    //   totalInterest = 0


    // }

    // maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * Number(this.angForm.controls['iRate'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)
    // console.log("amt", maturityAmount)
    // this.angForm.patchValue({
    //   Insamt: isNaN(Number(maturityAmount)) ? 0 : Number(maturityAmount)
    // })
    // console.log("amt", maturityAmount)

    let rate = this.intRate / 100

    var totalInt = this.sancAmt * rate * (Math.pow(1 + rate, this.loanPer)) / (Math.pow(1 + rate, this.loanPer) - 1)

    console.log(totalInt)
    this.angForm.patchValue({
      Insamt: isNaN(Number(totalInt)) ? 0 : Number(totalInt).toFixed(2)
    })




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
      'USER_CODE': this.usercode,
      'OFFICER_CODE': this.usercode
      // 'date': 

    };

    // this.http.post('http://192.168.1.180:3000/employee/insert', obj).subscribe(
    this.http.post(this.url + '/employee/insert', obj).subscribe(

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
  display: string;
  display1: string;
  isShowMoedal = false
  openModal() {
    this.isShowMoedal = true
    this.isRenew = false
    this.angForm.patchValue({
      "AC_TYPE" : null
    })
    this.isNew = true
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  CoBorrowerTrue: boolean = false
  clickCoBorrower($event) {
    if ($event.target.checked) {
      this.CoBorrowerTrue = true
    } else {
      this.CoBorrowerTrue = false
    }
  }



  customerDoc
  imageObject
  selectedImgArrayDetails
  selectedImagePreview
  tempAddress: boolean = true;
  ngCity
  int_category
  limit = 0
  balance = 0
  retireMentDate
  getCustomer(event) {
    this.getCustInfo = []

    this.angForm.patchValue({
      "memno": event.AC_MEMBNO + " " + event.AC_NAME
    })
    this.customerIdService.getFormData(event.value).subscribe(data => {
      this.customerDoc = data.custdocument
      let obj = {
        SCHEME_CODE: 'LN'
      }
      this.imageObject = []
      this.selectedImgArrayDetails = []
      this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
        let DocArr: any = resp
        for (const [key, value] of Object.entries(data.custdocument)) {
          DocArr.forEach(ele => {
            if (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE'])) {
              let path = (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE']))
              ele['status'] = true;
              ele['IS_ALLOWED'] = true;
              ele['PATH'] = path['PATH']
            } else {
              ele['status'] = false;
              ele['IS_ALLOWED'] = false;
            }
          })
          let selectedObj = {};
          let id = data.custdocument[key].DocumentMasterID;
          selectedObj[id] = environment.base_url + '/' + data.custdocument[key].PATH;
          this.selectedImagePreview = selectedObj[id];
          this.imageObject.push(selectedObj)
          this.selectedImgArrayDetails.push(selectedObj);
        }
        this.customerDoc = DocArr
      })
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG

      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.id = data.id
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        MEMB_SCHEME: data.AC_MEMBTYPE,
        MEMB_NO: data.AC_MEMBNO,
        CAST: data.AC_CAST,
        OCCUPATION: data.occupMaster.NAME,
        BIRTH_DATE: data.AC_BIRTH_DT,
        AC_CUSTID: data.AC_NO + " " + data.AC_NAME,


      })

    })
    this.onCloseModal();

    //tableData
    let obj = {
      "CUSTID": event.value
    }

    this.http.post(this.url + '/term-loan-master/getLoanAccts', obj).subscribe((data: any[]) => {
      let tableData = []
      tableData = data
      //  this.getCustInfo
      for (let i = 0; i < tableData.length; i++) {
        if (tableData[i]['ledgerbalance'] > 0) {
          this.getCustInfo.push(tableData[i])
        }
      }
      console.log(this.getCustInfo)
      // if (this.getCustInfo[0].AC_RETIRE_DATE == null) {
      //   if (!this.getCustInfo[0].AC_RETIRE_DATE) {
      //     Swal.fire({
      //       title: 'Retirement date not found!',
      //       text: "Do you want to continue?",
      //       icon: 'warning',
      //       showCancelButton: true,
      //       confirmButtonText: 'Yes, continue',
      //       cancelButtonText: 'No, cancel',
      //     }).then((result) => {
      //       if (result.isConfirmed) {
      //         console.log('Proceed with the logic');
      //       } else if (result.dismiss === Swal.DismissReason.cancel) {
      //         console.log('canceled');
      //       }
      //     });
      //   }
      // }
      // else {
        let formVal = this.angForm.value;
        let retirementDateString = this.getCustInfo[0].AC_RETIRE_DATE;

        // Assuming the format is 'DD-MM-YYYY'
        let [day, month, year] = retirementDateString.split('-');
        
        // Convert to the correct date format (year, month - 1, day)
        let retireMentDate = new Date(Number(year), Number(month) - 1, Number(day));
        
        console.log(retireMentDate);
        
        console.log(retireMentDate);  // Should now show the correct date
        
        
        // Calculate the difference in years and months
        // let yearDiff = retireMentDate.getFullYear() - loanDate.getFullYear();
        // let monthDiff = retireMentDate.getMonth() - loanDate.getMonth();
        
        // Adjust for negative month difference
        // if (monthDiff < 0) {
        //   yearDiff--;
        //   monthDiff += 12;
        // }
        
        // // Final months difference (including day adjustment)
        // let totalMonthsDiff = yearDiff * 12 + monthDiff;
        
        // // Adjust if day of month is earlier in retirement date
        // if (retireMentDate.getDate() < loanDate.getDate()) {
        //   totalMonthsDiff--;
        // }
        
        // console.log("Difference in months:", totalMonthsDiff);
        


      // }

      let loanValue = 0
      let loanInt = 0

      this.getCustInfo.forEach(element => {
        loanValue += Number(element.ledgerbalance);
        loanInt += Number(element.AC_INTRATE);

        this.oldLoan = parseFloat(loanValue.toFixed(2));
        this.oldInt = parseFloat(loanInt.toFixed(2));

      });



      this.getGurantors()
    })

    // deposit calculation variables

    let obj1 = {
      "cust_id": event.value
    }

    this.http.post(this.url + '/term-loan-master/getDeposit', obj1).subscribe(data => {
      let deposit = data
      this.limit = data[0].MAX_SHARES_LIMIT
      this.balance = data[0].BALANCE
    })
  }

  gurantors = []
  getGurantors() {
    let obj1 = {
      "bankacno": this.getCustInfo[0].BANKACNO
    }

    this.http.post(this.url + '/term-loan-master/getGuarantors', obj1).subscribe((data: any[]) => {
      this.gurantors = data
    })


  }

  public visibleAnimate = false;
  public visible = false;
  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }


  fileChangeEvent(event, id, valueid) {
    if (this.customerDoc[id]['status'] == true) {
      Swal.fire({
        // title: 'Do You Want To Replace previous document?',
        html: '<span style="text-justify: inter-word; font-weight:600; font-size:20px;">Do You Want To Replace previous document?</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          let result
          let arr = [];
          let me = this;
          let obj = {};
          let selectedObj = {};
          let file = (event.target as HTMLInputElement).files[0];
          this.customerDoc[id]['status'] = true
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async function (ele: any) {
            result = await reader.result;
            let selecetedImg = ele.target.result;
            selectedObj[valueid] = selecetedImg
            obj[valueid] = result;
          };
          reader.onerror = function (error) {
            console.log('Error: ', error);
          };
          let isExist: boolean = false
          for (let element of this.imageObject) {
            if (Number(Object.keys(element)[0]) == valueid) {
              isExist = true
              reader.onload = async function (ele: any) {
                result = await reader.result;
                let selecetedImg = ele.target.result;
                selectedObj[valueid] = selecetedImg
                obj[valueid] = result;
                element[valueid] = result
              };
              this.customerDoc[id]['status'] = true
              break
            }
          }
          if (!isExist) {
            reader.onload = async function (ele: any) {
              result = await reader.result;
              let selecetedImg = ele.target.result;
              selectedObj[valueid] = selecetedImg
              obj[valueid] = result;
            };
            this.imageObject.push(obj);
            this.selectedImgArrayDetails.push(selectedObj);
            this.customerDoc[id]['status'] = true
          }
        } else {
          event.target.value = null
        }
      })
    }
    else {
      let result
      let arr = [];
      let me = this;
      let obj = {};
      let selectedObj = {};

      let file = (event.target as HTMLInputElement).files[0];
      this.customerDoc[id]['status'] = true

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async function (ele: any) {
        result = await reader.result;
        let selecetedImg = ele.target.result;
        selectedObj[valueid] = selecetedImg
        obj[valueid] = result;


      };
      // this.fileuploaded=true,
      // this.filenotuploaded=false

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };

      let isExist: boolean = false
      for (let element of this.imageObject) {
        if (Number(Object.keys(element)[0]) == valueid) {
          isExist = true
          reader.onload = async function (ele: any) {
            result = await reader.result;
            let selecetedImg = ele.target.result;
            selectedObj[valueid] = selecetedImg
            obj[valueid] = result;
            element[valueid] = result
          };
          this.customerDoc[id]['status'] = true
          break
        }
      }

      if (!isExist) {
        reader.onload = async function (ele: any) {
          result = await reader.result;
          let selecetedImg = ele.target.result;
          selectedObj[valueid] = selecetedImg
          obj[valueid] = result;
        };
        this.imageObject.push(obj);
        this.selectedImgArrayDetails.push(selectedObj);
        this.customerDoc[id]['status'] = true
      }
    }
  }
  isImgPreview
  urlMap: SafeResourceUrl
  isPdf: boolean = false
  viewImagePreview(ele, id) {
    if (this.selectedImgArrayDetails.length !== 0) {
      for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
        let jsonObj = value;
        Object.keys(jsonObj).forEach(key => {
          if (id == key) {
            let selectedImage = jsonObj[key];
            if (selectedImage.startsWith('data:image')) {
              this.isImgPreview = true;
              this.isPdf = false;
              this.selectedImagePreview = selectedImage;
              this.urlMap = '';
              this.openModal1()
            } else if (selectedImage.startsWith('data:application/pdf')) {
              this.isImgPreview = false;
              this.isPdf = true;
              this.selectedImagePreview = '';
              this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
              this.openModal1()
            } else if (selectedImage.toLowerCase().endsWith('.jpg') || selectedImage.toLowerCase().endsWith('.png') || selectedImage.toLowerCase().endsWith('.jpeg')) {
              this.isImgPreview = true;
              this.isPdf = false;
              this.selectedImagePreview = selectedImage;
              this.urlMap = '';
              this.openModal1()
            } else if (selectedImage.toLowerCase().endsWith('.pdf')) {
              this.isImgPreview = false;
              this.isPdf = true;
              this.selectedImagePreview = '';
              this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
              this.openModal1()
            } else {
              this.isImgPreview = false;
              this.isPdf = false;
              this.selectedImagePreview = '';
              this.urlMap = '';
              this.openModal1()
            }
            throw 'Break';
          } else {
            this.isImgPreview = false;
            this.isPdf = false;
            this.selectedImagePreview = '';
            this.urlMap = '';
          }
        });
      }
    } else {
      this.isImgPreview = false;
      this.isPdf = false;
      this.selectedImagePreview = '';
      this.urlMap = '';
    }
  }


  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }

  isdocument = false
  openModal1() {
    this.isdocument = true
    this.display1 = "block";

  }

  onClose() {
    this.display1 = "none";
    this.isdocument = true
  }

  Cid: any = null;
  getCCustomer(Cid) {
    this.customerIdService.getFormData(Cid).subscribe(data => {
      this.angForm.patchValue({
        CAC_NAME: data.AC_NAME,
      })
    })
  }


  multiCoBorrower = [];
  addCoBorrower() {
    const formVal = this.angForm.value;
    var object = {
      CAC_CUSTID: formVal.CAC_CUSTID,
      AC_NAME: formVal.CAC_NAME,
    }

    // if (formVal.AC_CUSTID != "") {
    if (object.CAC_CUSTID != undefined) {
      if (this.id != this.Cid) {
        if (this.multiCoBorrower.length == 0) {
          this.multiCoBorrower.push(object);
        }
        else {
          if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
            Swal.fire("This Customer is Already CoBorrower", "error");
          } else {
            this.multiCoBorrower.push(object);
          }
        }
      }
      else {
        // Swal.fire("Please Select Different Customer id", "error");
      }
    }
    else {
      Swal.fire("Please Select CoBorrower Customer Id", "error");
    }

    // } else {
    //   Swal.fire("Please Select Customer Id", "error");
    // }
    this.resetCoBorrower()
  }

  resetCoBorrower() {
    this.angForm.controls['CAC_CUSTID'].reset();
    this.angForm.controls['CAC_NAME'].reset();
  }

  editCoBorrower(id) {
    this.coBorrowerIndex = id
    this.CoBorrowerupdateid = id
    this.CoBorrowerID = this.multiCoBorrower[id].id;
    this.CoBorrowerTrue = true
    this.CoBorrowerShowButton = false;
    this.CoBorrowerUpdateShow = true;
    this.Cid = Number(this.multiCoBorrower[id].CAC_CUSTID)
    this.angForm.patchValue({
      CAC_NAME: this.multiCoBorrower[id].AC_NAME,
    })
  }

  updateCoBorrower() {
    let index = this.coBorrowerIndex;
    this.CoBorrowerShowButton = true;
    this.CoBorrowerUpdateShow = false;

    const formVal = this.angForm.value;
    var object = {
      CAC_CUSTID: formVal.CAC_CUSTID,
      AC_NAME: formVal.CAC_NAME,
      id: this.CoBorrowerID
    }
    if (formVal.AC_CUSTID != "") {
      if (object.CAC_CUSTID != undefined) {
        if (this.id != this.Cid) {
          if (this.multiCoBorrower.length == 0) {
            this.multiCoBorrower[index] = object;
          }
          else {
            if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
              Swal.fire("This Customer is Already CoBorrower", "error");
            } else {
              this.multiCoBorrower[index] = object;
            }
          }
        }
        else {
          // Swal.fire("Please Select Different Customer id", "error");
        }
      }
      else {
        // Swal.fire("Please Select CoBorrower Customer Id", "error");
      }

    } else {
      // Swal.fire("Please Select Customer Id", "error");
    }

    this.resetCoBorrower()
  }

  // Delete CoBorrower 
  delCoBorrower(id) {
    this.multiCoBorrower.splice(id, 1)
    this.resetCoBorrower()
  }

  getInterest(event) {
    let temp
    this.InterestRateForLoanandCC.intData().subscribe(data => {
      data.forEach(async (element) => {

        if (element.INT_CATEGORY == event.name) {
          temp = element
        }
      })
      this.angForm.patchValue({
        iRate: temp?.rate[0]?.INT_RATE,
      })
      this.compoundInterestCalculation()
    })
  }

  deposit
  shareDeduction() {
    let shareDeduction = this.sancAmt * this.oldInt / 100
    this.deposit = this.limit - (this.balance + shareDeduction)

    this.angForm.patchValue({
      "shDeduct": shareDeduction,
      "deposits": (shareDeduction != 0 ? this.deposit : 0).toFixed(2)
    })
    this.totPayamt()
  }

  isRenew = false
  isNew = true
  radioFun() {
    this.isRenew = true
    this.isNew = false
  }

}
