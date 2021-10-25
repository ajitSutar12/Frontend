import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { reminderInstructionService } from '../../../../shared/elements/reminder-instruction.service';
import { UserService } from '../../../../shared/elements/user.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reminder-instruction',
  templateUrl: './reminder-instruction.component.html',
  styleUrls: ['./reminder-instruction.component.scss']
})
export class ReminderInstructionComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  //title select variables
  user: Array<IOption> = this.UserService.getCharacters();
  simpleOption: Array<IOption> = this.reminderInstructionService.getCharacters();
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
    UserID: "",
    Date: "",
    EntryTime: "",
    SrNo: "",
    FromDate: "",
    UpToDate: "",
    Frequency: "",
    Details: "",
    NextExeuDate: ""
  };

  constructor(private fb: FormBuilder, public reminderInstructionService: reminderInstructionService, public UserService: UserService) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/reminder-instruction.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'User ID',
          data: 'UserID'
        },
        {
          title: 'Date',
          data: 'Date'
        },
        {
          title: 'Entry Time',
          data: 'EntryTime'
        },
        {
          title: 'Sr No',
          data: 'SrNo'
        },
        {
          title: 'From Date',
          data: 'FromDate'
        },
        {
          title: 'Up To Date',
          data: 'UpToDate'
        },
        {

          title: 'Frequency',
          data: 'Frequency'
        },
        {
          title: 'Details',
          data: 'Details'

        },
        {
          title: 'Next ExeuDate',
          data: 'NextExeuDate'
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
    this.dataSub = this.reminderInstructionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.UserService.loadCharacters().subscribe((options) => {
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
      UserID: ['', [Validators.required]],
      Details: ['', [Validators.pattern, Validators.required]],
      NextExeuDate: ['', [Validators.required]],
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
    this.message.UserID = info.UserID;
    this.message.Date = info.Date;
    this.message.EntryTime = info.EntryTime;
    this.message.SrNo = info.SrNo;
    this.message.FromDate = info.FromDate;
    this.message.Frequency = info.Frequency;
    this.message.UpToDate = info.UpToDate;
    this.message.Frequency = info.Frequency;
    this.message.Details = info.Details;
    this.message.NextExeuDate = info.NextExeuDate;

    //return boolean value and toggle add to update button

    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.UserID = info.UserID;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete User ID." + this.message.UserID + "  data",
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
