import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lien-mark-clear',
  templateUrl: './lien-mark-clear.component.html',
  styleUrls: ['./lien-mark-clear.component.scss']
})
export class LienMarkClearComponent implements OnInit {
  angForm: FormGroup;

  //Datatable
  dtExportButtonOptions: any = {};

  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isIsLienMarkClear: boolean = false;

  //object created to get data when row is clicked
  message = {
    Scheme: "",
    AccountNo: "",
    SecurityCode: "",
    LedgerBalance: "",
    DepositAmount: "",
    TDReceiptNo: "",
    IsLienMarkClear: "",
    LoanAcNo: "",
    LoanOsBalance: "",
    LoanExpiryDate: ""
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/lien-mark-clear.json',
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
          title: 'Account No',
          data: 'AccountNo'
        },
        {
          title: 'Security Code',
          data: 'SecurityCode'
        },
        {
          title: 'Ledger Balance',
          data: 'LedgerBalance'
        },
        {
          title: 'Deposit Amount',
          data: 'DepositAmount'
        },
        {
          title: 'TD Receipt No',
          data: 'TDReceiptNo'
        },
        {
          title: 'IsLienMarkClear',
          data: 'IsLienMarkClear'
        },
        {
          title: 'Loan Ac No',
          data: 'LoanAcNo'
        },
        {
          title: 'Loan Os Balance',
          data: 'LoanOsBalance'
        },
        {
          title: 'Loan Expiry Date',
          data: 'LoanExpiryDate'
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

    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.AcountnoService.loadCharacters().subscribe((options) => {
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
      Scheme: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]],
      SecurityCode: ['', [Validators.pattern, Validators.required]],
      Date: ['', [Validators.required]]
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
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.SecurityCode = info.SecurityCode;
    this.message.LedgerBalance = info.LedgerBalance;
    this.message.DepositAmount = info.DepositAmount;
    this.message.TDReceiptNo = info.TDReceiptNo;
    this.message.IsLienMarkClear = info.IsLienMarkClear;
    this.message.LoanAcNo = info.LoanAcNo;
    this.message.LoanOsBalance = info.LoanOsBalance;
    this.message.LoanExpiryDate = info.LoanExpiryDate;

    //code for chekbox
    if (this.message.IsLienMarkClear == "Yes") {
      this.isIsLienMarkClear = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isIsLienMarkClear = false;   //return boolean value and display unchecked checkbox
    }
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
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

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
}
