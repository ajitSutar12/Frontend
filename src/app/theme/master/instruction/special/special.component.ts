import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { ExucuteOnService } from '../../../../shared/elements/exucute-on.service';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  angForm: FormGroup;

  //Datatable
  dtExportButtonOptions: any = {};

  excuteonOption: Array<IOption> = this.ExucuteOnService.getCharacters();
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
  isIsRestrictTransactionEntry: boolean = false;

  message = {
    InstructionNo: " ",
    Date: "",
    Scheme: " ",
    AccountNo: " ",
    StartFrom: " ",
    UptoDate: " ",
    ExecuteOn: " ",
    Details: " ",
    Date2: " ",
    IsRestrictTransactionEntry: " ",

  };

  constructor(private fb: FormBuilder, public ExucuteOnService: ExucuteOnService, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/special.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Instruction No',
          data: 'InstructionNo'
        }, {
          title: 'Date',
          data: 'Date'
        },
        {
          title: 'Scheme',
          data: 'Scheme'
        }, {
          title: 'Account No',
          data: 'AccountNo'
        },
        {
          title: 'Start From',
          data: 'StartFrom'
        },
        {
          title: 'Upto Date',
          data: 'UptoDate'
        },
        {
          title: 'Execute On',
          data: 'ExecuteOn'
        },
        {
          title: 'Is Restrict Transaction Entry',
          data: 'IsRestrictTransactionEntry'
        },

        {
          title: 'Details',
          data: 'Details'
        },
        {
          title: 'Date2',
          data: 'Date2'
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
    this.dataSub = this.ExucuteOnService.loadCharacters().subscribe((options) => {
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
      Date2: ['',],
      StartFrom: ['', [Validators.required]],
      UptoDate: ['', [Validators.required]],
      // ExecuteOn: ['', [Validators.required]], 
      InstructionNo: ['',],
      Particulars: ['', [Validators.pattern, Validators.required]],
      Scheme: ['', [Validators.required]],
      ExecuteOn: ['', [Validators.required]],
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
    this.message.InstructionNo = info.InstructionNo;
    this.message.Date = info.Date;
    this.message.Scheme = info.Scheme;
    this.message.StartFrom = info.StartFrom;
    this.message.UptoDate = info.UptoDate;
    this.message.AccountNo = info.AccountNo;
    this.message.ExecuteOn = info.ExecuteOn;
    this.message.Details = info.Details;
    this.message.Date2 = info.Date2;
    this.message.IsRestrictTransactionEntry = info.IsRestrictTransactionEntry;

    this.showButton = false;
    this.updateShow = true;
    //code for chekbox
    if (this.message.IsRestrictTransactionEntry == "Yes") {
      this.isIsRestrictTransactionEntry = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isIsRestrictTransactionEntry = false;   //return boolean value and display unchecked checkbox
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
    this.message.InstructionNo = info.InstructionNo;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Instruction No." + this.message.InstructionNo + "  data",
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
