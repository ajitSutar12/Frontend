import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { revokeSpecialService } from '../../../../shared/elements/revoke-special.service'
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-revoke-special-instruction',
  templateUrl: './revoke-special-instruction.component.html',
  styleUrls: ['./revoke-special-instruction.component.scss']
})
export class RevokeSpecialInstructionComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  //title select variables
  simpleOption: Array<IOption> = this.revokeSpecialService.getCharacters();
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
  isIsRestrictTransactionEntry: boolean = false;

  //object created to get data when row is clicked
  message = {
    InstructionNo: "",
    Date: "",
    Scheme: "",
    AccountNo: "",
    StartFrom: "",
    UptoDate: "",
    ExecuteOn: "",
    IsRestrictTransactionEntry: "",
    Details: "",
    RevokeDate: ""
  };

  constructor(private fb: FormBuilder, public revokeSpecialService: revokeSpecialService, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/revoke-special.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Instruction No',
          data: 'InstructionNo'
        },
        {
          title: 'Date',
          data: 'Date'
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
    this.dataSub = this.revokeSpecialService.loadCharacters().subscribe((options) => {
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
      StartFrom: ['',],
      UptoDate: ['',],
      Scheme: ['',],
      RevokeDate: ['', [Validators.required]],
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.InstructionNo = info.InstructionNo;
    this.message.Date = info.Date;
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.StartFrom = info.StartFrom;
    this.message.UptoDate = info.UptoDate;
    this.message.ExecuteOn = info.ExecuteOn;
    this.message.IsRestrictTransactionEntry = info.IsRestrictTransactionEntry;
    this.message.Details = info.Details;
    this.message.RevokeDate = info.RevokeDate;

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

  //function for delete button clicked
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






