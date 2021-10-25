import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-standing-instruction',
  templateUrl: './standing-instruction.component.html',
  styleUrls: ['./standing-instruction.component.scss']
})

export class StandingInstructionComponent implements OnInit {
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

  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isIsAutoBalanceTransferRemainingthisMinimumBalance: boolean = false;

  message = {
    Date: "",
    StartFrom: "",
    InstructionNo: " ",
    NextExecutionOn: "",
    LastExecutedOn: "",
    Day: " ",
    TransactionAmount: " ",
    IsAutoBalanceTransferRemainingthisMinimumBalance: " ",

  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/standing-instruction.json',
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
          title: 'Instruction No',
          data: 'InstructionNo'
        }, {
          title: 'Next Execution On',
          data: 'NextExecutionOn'
        },
        {
          title: 'Last Executed On',
          data: 'LastExecutedOn'
        },
        {
          title: 'Day',
          data: 'Day'
        }, {
          title: 'Transaction Amount',
          data: 'TransactionAmount'
        },
        {
          title: 'IsAutoBalanceTransferRemainingthisMinimumBalance',
          data: 'IsAutoBalanceTransferRemainingthisMinimumBalance'
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
      Date: [''],
      StartFrom: ['', [Validators.required]],
      InstructionNo: ['',],
      NextExecutionOn: [''],
      LastExecutedOn: [''],
      Day: ['', [Validators.pattern, Validators.required]],
      Scheme: ['', [Validators.required]],
      creditScheme: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]],
      creditAccountNo: ['', [Validators.required]],
      Debit: ['', [Validators.pattern, Validators.required]],
      Credit: ['', [Validators.pattern, Validators.required]],
      TransactionAmount: ['', [Validators.pattern, Validators.required]],
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
    this.message.InstructionNo = info.InstructionNo;
    this.message.NextExecutionOn = info.NextExecutionOn;
    this.message.LastExecutedOn = info.LastExecutedOn;
    this.message.Day = info.Day;
    this.message.TransactionAmount = info.TransactionAmount;
    this.message.IsAutoBalanceTransferRemainingthisMinimumBalance = info.IsAutoBalanceTransferRemainingthisMinimumBalance;


    //code for chekbox
    if (this.message.IsAutoBalanceTransferRemainingthisMinimumBalance == "Yes") {
      this.isIsAutoBalanceTransferRemainingthisMinimumBalance = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isIsAutoBalanceTransferRemainingthisMinimumBalance = false;   //return boolean value and display unchecked checkbox
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
