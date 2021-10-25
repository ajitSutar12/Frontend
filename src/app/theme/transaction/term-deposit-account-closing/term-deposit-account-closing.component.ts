import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../shared/elements/acountno.service';

@Component({
  selector: 'app-term-deposit-account-closing',
  templateUrl: './term-deposit-account-closing.component.html',
  styleUrls: ['./term-deposit-account-closing.component.scss']
})
export class TermDepositAccountClosingComponent implements OnInit {

  angForm: FormGroup;
  simpleOption: Array<IOption> = this.schemeCodeService.getCharacters();
  accountNo: Array<IOption> = this.accountnoService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;


  CashTrue = true
  TransferTrue = false

  dtExportButtonOptions: any = {};
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable to enable view voucher
  viewVouchers = false;

  constructor(public schemeCodeService: SchemeCodeService, public accountnoService: AcountnoService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Position',
          data: 'position'
        }, {
          title: 'Office',
          data: 'office'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Start Date',
          data: 'date'
        }, {
          title: 'Salary',
          data: 'salary'
        }],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
    this.runTimer();
    this.dataSub = this.schemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.accountnoService.loadCharacters().subscribe((options) => {
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
  createForm() {
    this.angForm = this.fb.group({
      BranchCode: [''],
      schemeCode: ['', [Validators.required]],
      Date: [''],
      AccountNo: [''],
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
      TotalInterest: [''],
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
      Narration: [''],
    });
  }

  viewVouchersData(val) {
    if (val == 1) {
      this.viewVouchers = true;
    }
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
}
