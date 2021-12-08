import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { BalanceUpdationService } from '../../../../shared/elements/balance-updation.service';
import { DebitService } from '../../../../shared/elements/debit.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-balance-updation',
  templateUrl: './balance-updation.component.html',
  styleUrls: ['./balance-updation.component.scss'],
})

export class BalanceUpdationComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  //title select variables
  debit: Array<IOption> = this.DebitService.getCharacters();
  simpleOption: Array<IOption> = this.BalanceUpdationService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //object created to get data when row is clicked
  message = {
    BranchCode: "",
    SchemeType: "",
    SchemeCode: "",
    BalanceDate: "",
    FromAcNo: "",
    ToAcNo: "",
    AcNo: "",
    AcName: "",
    LedgerBalance: "",
    ProductAmount: "",
    LastTransDate: "",
    LastInterestPaidDate: "",
    ClosingDate: "",
    DebitCredit: ""
  };

  constructor(public BalanceUpdationService: BalanceUpdationService, public DebitService: DebitService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/balance-updation.json',
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
          title: 'Scheme Type',
          data: 'SchemeType'
        }, {
          title: 'Branch Code',
          data: 'SchemeCode'
        }, {
          title: 'Balance Date',
          data: 'BalanceDate'
        }, {
          title: 'From Ac No',
          data: 'FromAcNo'
        },
        {
          title: 'To Ac No',
          data: 'ToAcNo'
        },
        {
          title: 'Ac No',
          data: 'AcNo'
        },
        {
          title: 'Ac Name',
          data: 'AcName'
        },
        {
          title: 'Ledger Balance',
          data: 'LedgerBalance'
        },
        {
          title: 'Product Amount',
          data: 'ProductAmount'
        },
        {
          title: 'Last TransDate',
          data: 'LastTransDate'
        },
        {
          title: 'Last Interest Paid Date',
          data: 'LastInterestPaidDate'
        },
        {
          title: 'Closing Date',
          data: 'ClosingDate'
        },
        {
          title: 'Debit Credit',
          data: 'DebitCredit'
        }

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
          self.delClickHandler();
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.BalanceUpdationService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.DebitService.loadCharacters().subscribe((options) => {
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
      SchemeCode: ['', [Validators.required, Validators.pattern]],
      BalanceDate: ['', [Validators.required, Validators.pattern]],
      ToAcNo: ['', [Validators.pattern]],
      FromAcNo: ['', [Validators.pattern]],
      LastTransDate: ['', [Validators.pattern]],
      BranchCode: [''],
      SchemeType: ['', [Validators.required]],
      AcName: [''],
      DebitCredit: [''],
    });
  }
ngAfterViewInit():void{
  this.myInputField.nativeElement.focus();

}
  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BranchCode = info.BranchCode;
    this.message.SchemeType = info.SchemeType;
    this.message.SchemeCode = info.SchemeCode;
    this.message.BalanceDate = info.BalanceDate;
    this.message.FromAcNo = info.FromAcNo;
    this.message.ToAcNo = info.ToAcNo;
    this.message.AcNo = info.AcNo;
    this.message.AcName = info.AcName;
    this.message.LedgerBalance = info.LedgerBalance;
    this.message.ProductAmount = info.ProductAmount;
    this.message.LastTransDate = info.LastTransDate;
    this.message.LastInterestPaidDate = info.LastInterestPaidDate;
    this.message.ClosingDate = info.ClosingDate;
    this.message.DebitCredit = info.DebitCredit;
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