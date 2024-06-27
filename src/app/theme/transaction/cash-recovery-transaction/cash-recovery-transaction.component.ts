import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cash-recovery-transaction',
  templateUrl: './cash-recovery-transaction.component.html',
  styleUrls: ['./cash-recovery-transaction.component.scss']
})
export class CashRecoveryTransactionComponent implements OnInit {
  jointUpdateShow = false
  clicked = false;
  showRepo: boolean = false;

  angForm: FormGroup;
  isTransfer: boolean = false
  Cust_ID: any;
  obj: any[];
  branch_code: any;
  selectedBranch: any;
  ngacno: any;
  tScheme: any;
  multigrid = [];
  transferSchemeDetails: any;
  // selectedTransScheme: any;
  transferTotalAmount: any;
  resetgrid: any;
  date: any;
  url = environment.base_url;
  report_url = environment.report_url;
  bankacno: any;
  formSubmitted: boolean;
  ChequeDate: string;
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  user: any = [];
  // model: any = [];
  CASE_SUITE_DATE: string;
  Totalamount
  TotalAmt
  response: any;



  constructor(private fb: FormBuilder,
    private customerID: CustomerIDMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,) {
    this.CASE_SUITE_DATE = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }


  selectedCId
  selectedScode
  selectedMemno

  //variable for checkbox
  isIsRestrictTransactionEntry: boolean = false;


  //dropdown variables
  cId: any
  schemeCode: any
  memNo: any[]
  tableData
  schemeCode1
  isactive = 0;
  Scheme
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.createForm();

    //For Customer Id dropdown
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;

    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //For Scheme Code dropdown

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.schemeCode1 = data;
      console.log(this.schemeCode1)
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var schemeList = data.filter(function (schemeName) {
        return (schemeName.name == 'TD' || schemeName.name == 'SB' || schemeName.name == 'CA' || schemeName.name == 'LN' || schemeName.name == 'CC' || schemeName.name == 'DS' || schemeName.name == 'PG' || schemeName.name == 'GL')
      });
      this.Scheme = schemeList;
      console.log(this.Scheme);
    })


    //  this.Totalamount = 45;
    // this.TotalAmt= 45;

  }
  tabledata: any = [];
  Totaldue;
  Totalpena;
  Totalnt;
  Totalcint;
  TotalPrincipal
  showtable() {
    // this.http.get('http://192.168.1.180:3000/employee/cashrecoverytable').subscribe((data: any) => {
    this.http.get(this.url+'/employee/cashrecoverytable').subscribe((data: any) => {

      this.tabledata = data
      console.log(this.tabledata)
    });
  }


  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  getBranch(event) {

    //debugger
    this.selectedBranch = event.value
    this.getIntroducer()

  }
  custid
  getcustid(event) {
    this.custid = event.value
    let obj = {
      'ac_custid': event.value
    }

    // this.http.post('http://192.168.1.180:3000/employee/cashrecovery', obj).subscribe((data: any) => {
    this.http.post(this.url + '/employee/cashrecovery', obj).subscribe((data: any) => {

      // console.log(data);

      this.schemeCode = data
      for (let i = 0; i < this.schemeCode.length; i++) {
        this.memtype = this.schemeCode[i].AC_MEMBTYPE;
        this.memno = this.schemeCode[i].AC_MEMBNO;
      }

      console.log("schemedata", this.schemeCode)
    })
  }
  brachcode
  branch
  glac
  penalacno
  pen
  current
  due
  rate
  Penalt
  actype
  acno
  Type
  LEDGER
  penal
  int
  memno
  membno
  memtype
  date1
  Seralno
  tranno
  getnum(event) {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.date1 = userData.branch.syspara.CURRENT_DATE;
    // this.brachcode = userData.branch.id
    this.branch = this.selectedBranch
    this.membno = event.AC_MEMBNO
    let obj = {
      'MEMBNO': this.membno,
      'flag': this.isactive,
      'BRANCH_CODE': this.selectedBranch,
      'CURRENT_DATE': this.date1

    }
    // this.http.post('http://192.168.1.180:3000/employee/cashrecoverytable', obj).subscribe((data: any) => {
    this.http.post(this.url +'/employee/cashrecoverytable', obj).subscribe((data: any) => {
      // console.log(data);


      this.tableData = data
      this.TotalPrincipal = this.tableData.reduce((total, row) => total + parseFloat(row.Principal), 0);
      this.Totalcint = this.tableData.reduce((total, row) => total + parseInt(row.loanIntamount), 0);
      this.Totalnt = this.tableData.reduce((total, row) => total + parseFloat(row.INT_RATE_COME), 0);
      this.Totalpena = this.tableData.reduce((total, row) => total + parseFloat(row.PenaltyInterest), 0);
      this.Totaldue = this.tableData.reduce((total, row) => total + parseFloat(row.INT_DUE), 0);
      console.log(this.TotalPrincipal);
      console.log(this.Totalcint);
      console.log(this.Totalnt);
      console.log(this.Totalpena);

      console.log(this.Totaldue);

      this.TotalAmt = this.TotalPrincipal + this.Totalnt + this.Totaldue + this.Totalcint + this.Totalnt;


      console.log(this.TotalAmt);

      console.log("tableData", this.tableData)
      for (let i = 0; i < this.tableData.length; i++) {
        this.glac = this.tableData[i].S_GLACNO,

          this.penalacno = this.tableData[i].S_PENAL_ACNO;
        this.pen = this.tableData[i].Principal;
        this.current = this.tableData[i].loanIntamount;
        this.due = this.tableData[i].INT_DUE;
        this.rate = this.tableData[i].INT_RATE_COME;
        this.Penalt = this.tableData[i].PenaltyInterest;
        this.actype = this.tableData[i].ac_type;
        this.acno = this.tableData[i].ac_no;
        this.Type = this.tableData[i].S_SHRNAME;
        this.LEDGER = this.tableData[i].LEDGER_BAL;
        this.penal = this.tableData[i].S_PENAL_ACNO;
        this.int = this.tableData[i].S_INT_ACNO;


      }
      if (this.tableData.length > 0) {
      
        this.lastRowTranamt = this.tableData[this.tableData.length - 1].TRAN_NO;
      } 
      console.log("amt",this.lastRowTranamt)
    })


  }


  lastRowTranamt
  ischecked(event) {
    if (event.target.checked) {
      this.isactive = 1;
    } else {
      this.isactive = 0
    }
    console.log(this.isactive);
    let obj = {
      'MEMBNO': this.membno,
      'flag': this.isactive,
      'BRANCH_CODE': this.selectedBranch,
      'CURRENT_DATE': this.date1


    }
    // this.http.post('http://192.168.1.180:3000/employee/cashrecoverytable', obj).subscribe((data: any) => {
      this.http.post(this.url +'/employee/cashrecoverytable', obj).subscribe((data: any) => {
   
    // console.log(data);


      this.tableData = data
      this.TotalPrincipal = this.tableData.reduce((total, row) => total + parseFloat(row.Principal), 0);
      this.Totalcint = this.tableData.reduce((total, row) => total + parseInt(row.loanIntamount), 0);
      this.Totalnt = this.tableData.reduce((total, row) => total + parseFloat(row.INT_RATE_COME), 0);
      this.Totalpena = this.tableData.reduce((total, row) => total + parseFloat(row.PenaltyInterest), 0);
      this.Totaldue = this.tableData.reduce((total, row) => total + parseFloat(row.INT_DUE), 0);
      console.log(this.TotalPrincipal);
      console.log(this.Totalcint);
      console.log(this.Totalnt);
      console.log(this.Totalpena);

      console.log(this.Totaldue);

      this.TotalAmt = this.TotalPrincipal + this.Totalnt + this.Totaldue + this.Totalcint + this.Totalnt;


      console.log(this.TotalAmt);

      console.log("tableData", this.tableData)
      for (let i = 0; i < this.tableData.length; i++) {
        this.glac = this.tableData[i].S_GLACNO,

          this.penalacno = this.tableData[i].S_PENAL_ACNO;
        this.pen = this.tableData[i].Principal;
        this.current = this.tableData[i].loanIntamount;
        this.due = this.tableData[i].INT_DUE;
        this.rate = this.tableData[i].INT_RATE_COME;
        this.Penalt = this.tableData[i].PenaltyInterest;
        this.actype = this.tableData[i].ac_type;
        this.acno = this.tableData[i].ac_no;
        this.Type = this.tableData[i].S_SHRNAME;
        this.LEDGER = this.tableData[i].LEDGER_BAL;
        this.penal = this.tableData[i].S_PENAL_ACNO;
        this.int = this.tableData[i].S_INT_ACNO;
        this.tranno = this.tableData[i].TRAN_NO


      }
      if (this.tableData.length > 0) {
      
        this.lastRowTranamt = this.tableData[this.tableData.length - 1].TRAN_NO;
      } 
      console.log("amt",this.lastRowTranamt)
    })
  }



  //For Starting account and Ending Account dropdown
  getschemename: any
  getIntroducer() {
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // let branchCode = result.branch.id;
    this.obj = [this.selectedScode, this.selectedBranch]


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

  addTransferAccount() {

    this.formSubmitted = true;
    let formVal = this.angForm.value;
    var object = {
      Scheme: this.transferSchemeDetails.id,
      TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
      TRANSFER_ACNO: formVal.TschemeAC,
      TRANSFER_ACTYPE: this.selectedTransScheme,
      ACNO: this.ngacno,
      NARRATION: formVal.particulars,
      TRAN_AMOUNT: formVal.amount,
      AC_CLOSED: '0'
    }
    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    } else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }
    else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
      Swal.fire('Info', 'This Account is Already Exists!', 'error');
    }
    else {
      if (object.TRANSFER_ACNO != this.bankacno) {
        let termAmount = 0
        if (this.transferSchemeDetails.name == 'TD' && this.transferSchemeDetails.installmentType == 0) {
          let obj = {
            Scheme: this.transferSchemeDetails.id,
            BANKACNO: object.TRANSFER_ACNO,
            Date: this.date
          }
          let ledgerBal
          this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
            ledgerBal = bal
            termAmount = Number(this.transferAccountDetails.depositAmount) - Number(ledgerBal)
          })
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          if (comparison <= this.transferTotalAmount) {
            if (formVal.amount >= termAmount) {
              this.multigrid.push(object);
              this.resetgrid();
            }
            else {
              Swal.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info')
              this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            }
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
          }
        }
        else if (this.transferSchemeDetails.name == 'LN' || this.transferSchemeDetails.name == 'DS') {
          let obj = {
            Scheme: this.transferSchemeDetails.id,
            BANKACNO: object.TRANSFER_ACNO,
            Date: this.date
          }
          let ledgerBal
          this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
            ledgerBal = bal
            if (Number(ledgerBal) == Number(formVal.amount)) {
              object['AC_CLOSED'] = '1'
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
                this.resetgrid();
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) > Number(formVal.amount)) {
              this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
              let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
              if (comparison >= this.transferTotalAmount) {
                this.multigrid.push(object);
                this.resetgrid();
              }
              else {
                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
                Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
              }
            }
            else if (Number(ledgerBal) < Number(formVal.amount)) {
              Swal.fire('info', `Amount Is Greater Than Closing Balance`, 'info')
            }
          })
        }
        else {
          this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
          let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value)
          if (comparison >= this.transferTotalAmount) {
            this.multigrid.push(object);
            this.resetgrid();
          }
          else {
            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
            Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
          }
        }
      }
      else {
        Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        this.resetgrid();
      }
    }
  }



  createForm() {
    this.angForm = this.fb.group({

      customerid: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      checkActive: [false],
      scode: ['', [Validators.required]],
      memberno: ['', [Validators.required]],
      // totalamount: ['', [Validators.required]],
      CASE_SUITE_DATE: ["", [Validators.required]],
      Tscheme: ['', [Validators.required]],
      totalamount1: [, [Validators.pattern]],
      TschemeAC: [, [Validators.pattern]],
      particulars: [''],
      totalamount2: [''],
      amount: [''],
      chequeNo: [''],




    });
  }

  reset() {
    this.angForm.controls['customerid'].reset()
    this.angForm.controls['checkActive'].reset()
    this.angForm.controls['scode'].reset()
    this.angForm.controls['memberno'].reset()
    // this.angForm.controls['totalamount1'].reset()
    this.angForm.controls['chequeNo'].reset()
    this.angForm.controls['Tscheme'].reset()
    this.angForm.controls['TschemeAC'].reset()
    this.angForm.controls['particulars'].reset()
    this.angForm.controls['amount'].reset()
    // this.angForm.controls['totalamount2'].reset()
    this.angForm.controls['CASE_SUITE_DATE'].reset()


  }
  close() {
    this.resetForm()
  }
  Submit() {

  }

  resetForm() {

    // this.showRepo = false;
    // this.clicked = false;
  }
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
  transferAccountDetails
  schemeACNo
  VALUE
  NAME
  Glac_no
  selectedTransScheme: any = null
  getTransferAccountList(event) {
    this.VALUE = event.value
    this.NAME = event.name
    this.Glac_no = event.glacno,
      this.selectedTransScheme = event.value
    this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerListForClosing().subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }
  BANK
  getTransferAccountDeatil(event) {
    this.BANK = event.bankacno
    this.transferAccountDetails = event
  }
  
  Submitdis(): boolean {
    if (this.selectedPaymentType === 'cash') {
      if (this.TotalAmt === this.Totalamount) {
        return (this.TotalAmt === this.Totalamount)
      }
      else {
        return (this.TotalAmt)
      }
    }
    else {
      if (this.TotalAmt === this.Totalamount) {
        return (this.TotalAmt === this.Totalamount)
      }
    }
  }

  chequeNo
  checkno
  getcheckNo(event) {
    this.checkno = event.target.value
  }
  tot
  gettotatamt(event) {
    this.tot = event.target.value
  }
  amount
  geamt(event) {
    this.amount = event.target.value
  }
  total
  gettotalAmt(event) {
    this.total = event.target.value
  }

  // getcash(event){

  // }
  getcash() {
    let obj = {
      'BRANCH_CODE': this.branch,
      // 'ac_custid': this.custid,
      // 'TOTAL_AMOUNT1': this.TotalAmt,
      'AC_MEMBTYPE': this.memtype,
      'AC_MEMBNO': this.memno,
      // 'INT_DUE': this.due,
      // 'PenaltyInterest': this.Penalt,
      // 'INT_RATE_COME': this.rate,
      // 'Principal': this.pen,
      // 'ac_type': this.actype,
      // 'ac_no': this.acno,
      'TYPE': this.Type,
      // 'S_GLACNO': this.glac,
      'DATA': this.tableData,
      'CURRENT_DATE': this.date1


    }
    
    // this.http.post('http://192.168.1.180:3000/employee/cash', obj).subscribe(
    this.http.post(this.url+'/employee/cash', obj).subscribe(

      (response) => {
        console.log(response)
        if (Array.isArray(response) && response.length > 0) {
          const lastRowTranamt = response[response.length - 1].TRAN_NO;
          console.log("Tranamt from last row:", lastRowTranamt);
          // Display success message using Swal or any other method
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Data submitted successfully',
            html:
              '<b>Please Note down Voucher No : </b>' +response[response.length - 1].TRAN_NO + '<br>' 
              // '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>',
          
            
          });
        } 
        
      },

    );
  }
  selectedPaymentType: string;
  submit() {
    if (this.selectedPaymentType === 'cash') {
      this.getcash();
    }
    else {

      let formValues = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);

      let obj1 = {
        "CHEQUENUMBER": this.checkno,
        'CHEQUE_DATE': moment(formValues.CASE_SUITE_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'),
        'ac_type1': this.VALUE,
        'TYPE1': this.NAME,
        'ac_no1': this.BANK,
        'BRANCH_CODE': this.branch,
        'AC_MEMBTYPE': this.memtype,
        'AC_MEMBNO': this.memno,
        'GLACNO': this.Glac_no,
        'TYPE': this.Type,
        'CURRENT_DATE': this.date1,

        'TRAN_AMOUNT': this.amount,
        'DATA': this.tableData

      };

      // this.http.post('http://192.168.1.180:3000/employee/transfer', obj1).subscribe(
      this.http.post(this.url+'/employee/transfer', obj1).subscribe(

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
    this.reset()
  }

  Add() {
    this.user.push(this.angForm.value);
    console.log(this.user);
    // this.Totalamount = this.user.reduce((total, item) => total + parseFloat(item.amount), 0);
    this.Totalamount = parseFloat(this.user.reduce((total, item) => total + parseFloat(item.amount), 0));
    console.log(this.Totalamount);
    // this.reset()
  }
  myvalue: any;
  model: any = {}
  editdata(k: any) {
    this.angForm.patchValue({
      Tscheme: this.user[k].Tscheme,
      TschemeAC: this.user[k].TschemeAC,
      particulars: this.user[k].particulars,
      amount: this.user[k].amount
    })
    this.myvalue = k;
  }
  updatedata() {
    let k = this.myvalue;
    for (let i = 0; i < this.user.length; i++) {
      if (i == k) {
        this.user[i] = this.model;
        this.model = {};
      }
    }
    Swal.fire('success', "record is successfilly Updatedata", 'success')
  }
  deletedata(i: any) {
    this.user.pop(i);
    Swal.fire('success', "record is successfilly delete", 'success')
  }
  showsubmit = true;
  showupdate = false;
  showAdd_AC = true

}
