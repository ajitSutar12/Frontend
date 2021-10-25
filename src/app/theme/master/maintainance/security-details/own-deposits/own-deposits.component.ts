
import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S2Service } from '../../../../../shared/elements/s2.service';
import { Ac2Service } from '../../../../../shared/elements/ac2.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-own-deposits',
  templateUrl: './own-deposits.component.html',
  styleUrls: ['./own-deposits.component.scss']
})
export class OwnDepositsComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.S2Service.getCharacters();
  Ac: Array<IOption> = this.Ac2Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder, public S2Service: S2Service, public Ac2Service: Ac2Service) { this.createForm(); }

  message = {
    branch: "",
    scheme: "",
    acc_no: "",
    subm_date: "",
    receipt_no: "",
    deposit_amount: "",
    remarks: "",
    maturity_date: "",
    margin: "",
    LedgerBalance: ""
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Account No',
          data: 'acc_no'
        },
        {
          title: 'Submission Date',
          data: 'subm_date'
        }, {
          title: 'Maturity Date',
          data: 'maturity_date'
        }, {
          title: 'Receipt No.',
          data: 'receipt_no'
        }, {
          title: 'Deposit Bal.',
          data: 'deposit_bal'
        }, {
          title: 'Deposit Amount',
          data: 'deposit_amount'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Remarks',
          data: 'remarks'
        },
        {
          title: 'Ledger Balance',
          data: 'LedgerBalance'
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
          self.delClickHandler(data);
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.S2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac2Service.loadCharacters().subscribe((options) => {
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

      branch: ['', [Validators.pattern, Validators.required]],
      scheme: ['', [Validators.required]],
      acc_no: ['', [Validators.required]],
      subm_date: ['', [Validators.required]],
      receipt_no: ['', [Validators.pattern]],
      deposit_amount: ['', [Validators.pattern]],
      remarks: ['', [Validators.pattern]],
      maturity_date: ['', [Validators.max]],
      margin: ['', [Validators.pattern]],
      LedgerBal: ['', [Validators.pattern]]
    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.branch = info.branch;
    this.message.scheme = info.scheme;
    this.message.acc_no = info.acc_no;
    this.message.subm_date = info.subm_date;
    this.message.receipt_no = info.receipt_no;
    this.message.deposit_amount = info.deposit_amount;
    this.message.remarks = info.remarks;
    this.message.maturity_date = info.maturity_date;

    this.message.margin = info.margin;

    this.message.LedgerBalance = info.LedgerBalance;

    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.acc_no = info.acc_no;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delect Account." + this.message.acc_no + "  data",
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
}
