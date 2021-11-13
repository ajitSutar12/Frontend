import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { FrequencyService } from '../../../../shared/elements/frequency.service';
import { Observable } from 'rxjs/Observable';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-interest-instruction',
  templateUrl: './interest-instruction.component.html',
  styleUrls: ['./interest-instruction.component.scss']
})

export class InterestInstructionComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();
  frequencyOption: Array<IOption> = this.FrequencyService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  //variable for checkbox and radio button 
  isIsDiscountedInterestApplicable: boolean = false;
  isCash: boolean = true;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;

  cash1True: boolean = true;
  transfer1True: boolean = false;

  message = {
    Date: "",
    StartFrom: " ",
    NextExecutionOn: " ",
    InstructionNo: " ",
    Cash: "",
    Transfer: "",
    LastExecutedOn: " ",
    StatementType: " ",
    Scheme: " ",
    AccountNo: " ",
    Particulars: " ",
    Scheme2: " ",
    AccountNo2: " ",
    AdviceNarration: " ",
    Particulars2: " ",
    RevokeDate: " ",
    IsDiscountedInterestApplicable: " ",
  };

  constructor(private fb: FormBuilder, public FrequencyService: FrequencyService, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/intrest-instruction.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';

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
          title: 'Next Execution On',
          data: 'NextExecutionOn'
        },
        {
          title: 'Instruction No',
          data: 'InstructionNo'
        },
        {
          title: 'Cash',
          data: 'Cash'
        },
        {
          title: 'Transfer',
          data: 'Transfer'
        },
        {
          title: 'Last Executed On',
          data: 'LastExecutedOn'
        }, {
          title: 'Statement Type',
          data: 'StatementType'
        },
        {
          title: 'Scheme',
          data: 'Scheme'
        }, {
          title: 'Account No',
          data: 'AccountNo'
        }, {
          title: 'Particulars',
          data: 'Particulars'
        }, {
          title: 'Scheme',
          data: 'Scheme2'
        },
        {
          title: 'Account No',
          data: 'AccountNo2'
        }, {
          title: 'Advice Narration',
          data: 'AdviceNarration'
        },
        {
          title: 'Particulars',
          data: 'Particulars2'
        },
        {
          title: 'Revoke Date',
          data: 'RevokeDate'
        },
        {
          title: 'Is Discounted Interest Applicable',
          data: 'IsDiscountedInterestApplicable'
        },],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code

      /**
* @rowCallback function for editClickHandler and delClickHandler to passes table data to there filds
  @return row 
*/
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
    this.dataSub = this.FrequencyService.loadCharacters().subscribe((options) => {
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

  OpenLink(val) {
    // 
    if (val == 1) {
      this.cash1True = true;
      this.transfer1True = false;
    }

    if (val == 2) {
      this.cash1True = false;
      this.transfer1True = true;
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      Date: ['',],
      StartFrom: ['', [Validators.required]],
      NextExecutionOn: [''],
      InstructionNo: [''],
      TransactionNo: ['',],
      Particulars: ['', [Validators.pattern, Validators.required]],
      Particular: ['', [Validators.pattern, Validators.required]],
      AdviceNarration: ['', [Validators.pattern, Validators.required]],
      StatementType: ['', [Validators.required]],
      LastExecutedOn: [''],
      Scheme: ['', [Validators.required]],
      RevokeDate: ['', [Validators.required]],
      AccountNo: ['',]
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  /**
* @editClickHandler function for edit button clicked
*/

  editClickHandler(info: any): void {
    this.message.Date = info.Date;
    this.message.StartFrom = info.StartFrom;
    this.message.NextExecutionOn = info.NextExecutionOn;
    this.message.InstructionNo = info.InstructionNo;
    this.message.Cash = info.Cash;
    this.message.Transfer = info.Transfer;
    this.message.LastExecutedOn = info.LastExecutedOn;
    this.message.StatementType = info.StatementType;
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.Particulars = info.Particulars;
    this.message.Scheme2 = info.Scheme2;
    this.message.AccountNo2 = info.AccountNo2;
    this.message.AdviceNarration = info.AdviceNarration;
    this.message.Particulars2 = info.Particulars2;
    this.message.RevokeDate = info.RevokeDate;
    this.message.IsDiscountedInterestApplicable = info.IsDiscountedInterestApplicable;

    //code for chekbox
    if (this.message.IsDiscountedInterestApplicable == "Yes") {
      this.isIsDiscountedInterestApplicable = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isIsDiscountedInterestApplicable = false;   //return boolean value and display unchecked checkbox
    }
    //code for radio button
    if (this.message.Cash == "Yes") {
      this.isCash = true;      //return boolean value and display checked radio button
    }
    else {
      this.isCash = false;   //return boolean value and display unchecked radio button
    }
    this.showButton = false;
    this.updateShow = true;
  }

  /**
  * @updateData function for update data 
  */
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }


  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
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
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
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
