import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-open-passing',
  templateUrl: './account-open-passing.component.html',
  styleUrls: ['./account-open-passing.component.scss']
})

export class AccountOpenPassingComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {}; //Datatable variable
  a: Array<IOption> = this.Scheme1Service.getCharacters();
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
    Scheme: "",
    AccountNo: "",
    Name: "",
    BankCode: "",
    BranchCode: "",
    ReceiptNo: "",
    AcOpenDate: "",
    AsOnDate: "",
    MaturityDate: "",
    Months: "",
    Days: "",
    DepositAmount: "",
    IntRate: "",
    MaturityAmount: ""
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/account-open-passing.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme',
          data: 'Scheme'
        },
        {
          title: 'Account No.',
          data: 'AccountNo'
        },
        {
          title: 'Name',
          data: 'Name'
        },
        {
          title: 'Bank Code',
          data: 'BankCode'
        },
        {
          title: 'Branch Code',
          data: 'BranchCode'
        },
        {
          title: 'Receipt No.',
          data: 'ReceiptNo'
        },
        {
          title: 'A/c Open Date',
          data: 'AcOpenDate'
        },
        {
          title: 'As On Date',
          data: 'AsOnDate'
        },
        {
          title: 'Maturity Date',
          data: 'MaturityDate'
        },
        {
          title: 'Months',
          data: 'Months'
        },
        {
          title: 'Days',
          data: 'Days'
        },
        {
          title: 'Deposit Amount',
          data: 'DepositAmount'
        },
        {
          title: 'Int. Rate',
          data: 'IntRate'
        },
        {
          title: 'Maturity Amount',
          data: 'MaturityAmount'
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

    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
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
      Name: ['',],
      Scheme: ['', [Validators.required]],
      AccountNo: ['', [Validators.pattern, Validators.required]],
      BankCode: ['',],
      BranchCode: ['',],
      ReceiptNo: ['',],
      Date: ['',],
      AsOnDate: [''],
      MaturityDate: [''],
      Months: ['',],
      Days: ['',],
      DepositAmount: ['',],
      IntRate: ['',],
      MaturityAmount: ['',]
    });
  }

  submit() {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.Name = info.Name;
    this.message.BankCode = info.BankCode;
    this.message.BranchCode = info.BranchCode;
    this.message.ReceiptNo = info.ReceiptNo;
    this.message.AcOpenDate = info.AcOpenDate;
    this.message.AsOnDate = info.AsOnDate;
    this.message.MaturityDate = info.MaturityDate;
    this.message.Months = info.Months;
    this.message.Days = info.Days;
    this.message.DepositAmount = info.DepositAmount;
    this.message.IntRate = info.IntRate;
    this.message.MaturityAmount = info.MaturityAmount;
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme." + this.message.Scheme + "  data",
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
