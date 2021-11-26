import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S4Service } from '../../../../shared/elements/s4.service';
import { Ac4Service } from '../../../../shared/elements/ac4.service';
import { S15Service } from '../../../../shared/elements/s15.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-deposit-loan-interest-rate-edit-change',
  templateUrl: './deposit-loan-interest-rate-edit-change.component.html',
  styleUrls: ['./deposit-loan-interest-rate-edit-change.component.scss']
})

export class DepositLoanInterestRateEditChangeComponent implements OnInit {
  angForm: FormGroup;
url = environment.base_url;
  //Datatable

  dtExportButtonOptions: any = {};
  dtExportButtonOptions1: any = {};

  GuarantorTrue = false;

  simpleOption: Array<IOption> = this.S4Service.getCharacters();
  Ac: Array<IOption> = this.Ac4Service.getCharacters();
  Ac2: Array<IOption> = this.S15Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  // isRecovery: boolean = false;
  isIncrease: boolean = true;

  message = {
    schemecode: "",
    interestrate: "",
    startingaccno: "",
    endingaccno: "",
    effectdate: "",
    increase: "",
    decrease: "",
    sameintrateaddition: "",
  };

  constructor(private fb: FormBuilder, public S4Service: S4Service, public Ac4Service: Ac4Service, public S15Service: S15Service) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/deposit-loan-irec.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'schemecode'
        },
        {
          title: 'Effect Date',
          data: 'effectdate'
        },
        {
          title: 'Starting Account No.',
          data: 'startingaccno'
        },
        {
          title: 'Ending A/C No.',
          data: 'endingaccno'
        },
        {
          title: 'Increase',
          data: 'increase'
        },
        {
          title: 'Decrease',
          data: 'decrease'
        },
        {
          title: 'Same Int. Rate Addition',
          data: 'sameintrateaddition'
        },
        {
          title: 'Account Name',
          data: 'accountname'
        },
        {
          title: 'Interest Rate',
          data: 'interestrate'
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
      ajax: 'fake-data/deposit-loan-irec.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'schemecode'
        },
        {
          title: 'Effect Date',
          data: 'effectdate'
        },
        {
          title: 'Starting Account No.',
          data: 'startingaccno'
        },
        {
          title: 'Ending A/C No.',
          data: 'endingaccno'
        },
        {
          title: 'Increase',
          data: 'increase'
        },
        {
          title: 'Decrease',
          data: 'decrease'
        },
        {
          title: 'Same Int. Rate Addition',
          data: 'sameintrateaddition'
        },
        {
          title: 'Account Name',
          data: 'accountname'
        },
        {
          title: 'Interest Rate',
          data: 'interestrate'
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
    this.dataSub = this.S4Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac4Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.S15Service.loadCharacters().subscribe((options) => {
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
      Date: ['', [Validators.required]],
      startingaccno: ['', [Validators.required]],
      endingaccno: ['', [Validators.required]],
      interestrate: ['', [Validators.pattern, Validators.required]]
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
    this.message.schemecode = info.schemecode;
    this.message.interestrate = info.interestrate;
    this.message.startingaccno = info.startingaccno;
    this.message.endingaccno = info.endingaccno;
    this.message.effectdate = info.effectdate;
    this.message.increase = info.increase;
    this.message.decrease = info.decrease;
    this.message.sameintrateaddition = info.sameintrateaddition;

    this.showButton = false;
    this.updateShow = true;

    //code for radio button
    if (this.message.increase == "Yes") {
      this.isIncrease = true;      //return boolean value and display checked radio button
    }
    else {
      this.isIncrease = false;   //return boolean value and display unchecked radio button
    }
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.schemecode = info.schemecode;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete scheme code." + this.message.schemecode + "  data",
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

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
  }
}
