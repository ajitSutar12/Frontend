import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { revokeStandingService } from '../../../../shared/elements/revoke-standing.service'
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-revoke-standing-instructions',
  templateUrl: './revoke-standing-instructions.component.html',
  styleUrls: ['./revoke-standing-instructions.component.scss']
})
export class RevokeStandingInstructionsComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  //title select variables
  simpleOption: Array<IOption> = this.revokeStandingService.getCharacters();
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
  isIsAuto: boolean = false;

  //object created to get data when row is clicked
  message = {
    Date: "",
    StartFrom: "",
    InstructionNo: "",
    Day: "",
    Frequency: "",
    NextExecutionOn: "",
    LastExecutionOn: "",
    Scheme: "",
    AccountNo: "",
    DebitNarration: "",
    Scheme1: "",
    AccountNo1: "",
    CreditNarration: "",
    IsAuto: "",
    TransactionAmount: "",
    RevokeDate: ""
  };

  constructor(private fb: FormBuilder, public revokeStandingService: revokeStandingService, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/revoke-standing.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Date',
          data: 'Date'
        },
        {
          title: 'Start From',
          data: 'StartFrom'
        },
        {
          title: 'Instruction No',
          data: 'InstructionNo'
        },
        {
          title: 'Day',
          data: 'Day'
        },
        {
          title: 'Frequency',
          data: 'Frequency'
        },
        {
          title: 'Next Execution On',
          data: 'NextExecutionOn'
        },


        {
          title: 'Last Execution On',
          data: 'LastExecutionOn'
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
          title: 'DebitNarration',
          data: 'DebitNarration'
        },
        {
          title: 'Scheme1',
          data: 'Scheme1'
        },
        {
          title: 'Account No1',
          data: 'AccountNo1'
        },
        {
          title: 'Credit Narration',
          data: 'CreditNarration'
        },
        {
          title: 'Is Auto Balance Transfer Remaining this Minimum Balance :',
          data: 'IsAuto'
        },

        {
          title: 'Transaction Amount',
          data: 'TransactionAmount'
        },
        {
          title: 'Revoke Date',
          data: 'RevokeDate'
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
    this.dataSub = this.revokeStandingService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
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
      Date: ['',],
      TransactionNo: ['',],
      RevokeDate: ['', [Validators.required]],
      Scheme: ['', [Validators.required]],
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
    this.message.Date = info.Date;
    this.message.StartFrom = info.StartFrom;
    this.message.InstructionNo = info.InstructionNo;
    this.message.Day = info.Day;
    this.message.Frequency = info.Frequency;
    this.message.NextExecutionOn = info.NextExecutionOn;
    this.message.LastExecutionOn = info.LastExecutionOn;
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.DebitNarration = info.DebitNarration;
    this.message.Scheme1 = info.Scheme1;
    this.message.AccountNo1 = info.AccountNo1;
    this.message.CreditNarration = info.CreditNarration;
    this.message.IsAuto = info.IsAuto;
    this.message.TransactionAmount = info.TransactionAmount;
    this.message.RevokeDate = info.RevokeDate;

    //code for chekbox
    if (this.message.IsAuto == "Yes") {
      this.isIsAuto = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isIsAuto = false;   //return boolean value and display unchecked checkbox
    }

    //return boolean value and toggle add to update button

    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.Date = info.Date;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Date." + this.message.Date + "  data",
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
