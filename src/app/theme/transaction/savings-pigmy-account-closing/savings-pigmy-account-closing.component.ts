import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { Scheme14Service } from '../../../shared/elements/scheme14.service';
import { Scheme15Service } from '../../../shared/elements/scheme15.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OtherChargesGLAccountService } from '../../../shared/elements/OtherChargesGLAccount.service';
import { NarrationService } from '../../../shared/elements/Narration.service';



@Component({
  selector: 'app-savings-pigmy-account-closing',
  templateUrl: './savings-pigmy-account-closing.component.html',
  styleUrls: ['./savings-pigmy-account-closing.component.scss']
})
export class SavingsPigmyAccountClosingComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  dtExportButtonOptions1: any = {};

  simpleOption: Array<IOption> = this.Scheme14Service.getCharacters();
  accountNo: Array<IOption> = this.Scheme15Service.getCharacters();
  OtherChargesGLAccount: Array<IOption> = this.OtherChargesGLAccountService.getCharacters();
  Narration: Array<IOption> = this.NarrationService.getCharacters();
  
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  CashTrue = true
  TransferTrue = false

  
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  GuarantorTrue = false;
  ATrue = false;

  

  //object created to get data when row is clicked
  message = {
    OpeningDate: "",
    BranchCode: "",
    schemeCode: "",
    Date: "",
    AccountNo: "",
    Voucher_Number: "",
    DepositAmt: "",
    maturityDate: "",
    asOnDate: "",
    Receipt_No: "",
    Operation: "",
    Months:"",
    Days:"",
    Interest_Rate:"",
    LastInterestDate:"",
    InterestRate:"",
    Quarters:"",
    QuartersInterest:"",
    month:"",
    monthInterest:"",
    day:"",
    dayInterest:"",
    TotalInterest:"",
    paid_postInterest:"",
    netInterest:"",
    LedgerBalance:"",
    maturedamt:"",
    PayableInterest:"",
    Net_Interest:"",
    TDS_Amount:"",
    Sercharge_Amount:"",
    Penal_Interest:"",
    NetPayableAmount:"",
    Cheque:"",
    Narration:"",
    RenewalDate:"",
    OtherChargesGLAccount:"",
    TokenNo:"",
    OtherChargesAmount:"",
    SchemeCode:"",
    AccountNumber:"",
    HOSubGL:"",
    Amount:"",
    AccountName:"",
    Cheque1:"",
    
  };

  constructor(public NarrationService: NarrationService,public OtherChargesGLAccountService: OtherChargesGLAccountService,public Scheme14Service: Scheme14Service, public Scheme15Service: Scheme15Service, private fb: FormBuilder) {this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/Savingpigmyaccountclosing.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Branch Code',
          data: 'BranchCode'
        }, {
          title: 'Date',
          data: 'Date'
        }, {
          title: 'Scheme Code',
          data: 'schemeCode'
        }, {
          title: 'Voucher Number',
          data: 'Voucher_Number'
        }, {
          title: 'Account Number',
          data: 'AccountNumber'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', '#editbtn', () => {
          self.editClickHandler(data);
        });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler(data);
        });
        return row;
      }
    };
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/Savingpigmyaccountclosing1.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        }, {
          title: 'Account Number',
          data: 'AccountNumber'
        }, {
          title: 'HO Sub GL',
          data: 'HOSubGL'
        }, {
          title: 'Amount',
          data: 'Amount'
        }, {
          title: 'Account Name',
          data: 'AccountName'
        }, 
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', '#editbtn', () => {
          self.editClickHandler(data);
        });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler(data);
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.Scheme14Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.Scheme15Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.OtherChargesGLAccountService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.NarrationService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  createForm() {
    this.angForm = this.fb.group({
      BranchCode: [''],
      schemeCode: ['', [Validators.required]],
      Date: [''],
      AccountNo: ['',[Validators.required]],
      Voucher_Number: [''],
      DepositAmt: [''],
      maturityDate: [''],
      maturityAmt: [''],
      asOnDate: [''],
      Receipt_No: [''],
      Operation: [''],
      Months: [''],
      Days: [''],
      Interest_Rate: [''],
      LastInterestDate: [''],
      OpeningDate: [''],
      InterestRate: [''],
      Quarters: [''],
      QuartersInterest: [''],
      month: [''],
      monthInterest: [''],
      day: [''],
      dayInterest: [''],
      TotalInterest: ['',[Validators.pattern]],
      paid_postInterest: [''],
      netInterest: [''],
      LedgerBalance: [''],
      maturedamt: [''],
      PayableInterest: [''],
      Net_Interest: [''],
      TDS_Amount: [''],
      Sercharge_Amount: [''],
      Penal_Interest: [''],
      NetPayableAmount: [''],
      Cheque: [''],
      Cheque1: [''],
      Narration: [''],
      RenewalDate: [''],
      OtherChargesGLAccount: [''],
      TokenNo: [''],
      OtherChargesAmount: ['',[Validators.pattern]],
    

    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BranchCode = info.SchemeCode;
    this.message.OtherChargesGLAccount = info.OtherChargesGLAccount;
    this.message.TokenNo = info.TokenNo;
    this.message.InterestRate = info.InterestRate;
    this.message.TotalInterest = info.TotalInterest;
    this.message.OtherChargesAmount = info.OtherChargesAmount;
    this.message.SchemeCode = info.SchemeCode;
    this.message.AccountNumber = info.AccountNumber;
    this.message.HOSubGL = info.HOSubGL;
    this.message.Amount = info.Amount;
    this.message.AccountName = info.AccountName;

    // this.showButton = false;
    // this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.BranchCode = info.title;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete title." + this.message.BranchCode + "  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }

  OpenLink(val) {
    // debugger
    if (val == 1) {
      this.CashTrue = true;
      this.TransferTrue = false;
    }
    if (val == 2) {
      this.CashTrue = false;
      this.TransferTrue = true;
    }
  }

  
}
