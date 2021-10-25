import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import {Scheme12Service} from '../../../../shared/elements/scheme12.service';
import {Scheme13Service} from '../../../../shared/elements/scheme13.service';

import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-passbook-entry-print',
  templateUrl: './passbook-entry-print.component.html',
  styleUrls: ['./passbook-entry-print.component.scss']
})
export class PassbookEntryPrintComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};

  //Select option for title, account type
  simpleOption: Array<IOption> = this.Scheme12Service.getCharacters();
  a : Array<IOption> = this.Scheme13Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  GuarantorTrue = false;
  ATrue = false;

  //variable for checkbox and radio button 
  isfirstPage: boolean = false;


  //object created to get data when row is clicked
  message = {
    SchemeCode: "",
    AccountNo: "",
    SinglePage: "",
    Passbook: "",
    firstPage: "",
    balancePage: "",
    PrintFromDate: "",
    

  };
  constructor(public Scheme12Service: Scheme12Service,public Scheme13Service: Scheme13Service,private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/passbook-entry-print.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        }, {
          title: 'Account No.',
          data: 'AccountNo'
        }, {
          title: 'Single Page',
          data: 'SinglePage'
        }, {
          title: 'PASSBOOK',
          data: 'Passbook'
        }, {
          title: 'First Page',
          data: 'firstPage'
        }, {
          title: 'Balance Page',
          data: 'balancePage'
        },
        {
          title: 'Print From Date',
          data: 'PrintFromDate'
        }],
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
    this.dataSub = this.Scheme12Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.Scheme13Service.loadCharacters().subscribe((options) => {
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
      SchemeCode: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]],
      SinglePage: ['', [Validators.pattern]],
      Passbook: ['', [Validators.pattern]],
      PrintFromDate: ['', [Validators.required]],
      firstPage: [''],
      balancePage: [''],
      // title: ['',Validators.required],


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
    this.message.SchemeCode = info.SchemeCode;
    this.message.AccountNo = info.AccountNo;
    this.message.SinglePage = info.SinglePage;
    this.message.Passbook = info.Passbook;
    this.message.balancePage = info.balancePage;
    this.message.firstPage = info.firstPage;
    this.message.PrintFromDate = info.PrintFromDate;

    //code for chekbox
    if (this.message.firstPage == "Yes") {
      this.isfirstPage = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isfirstPage = true;   //return boolean value and display unchecked checkbox
    }
  }
  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.SchemeCode = info.title;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete title." + this.message.SchemeCode + "  data",
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
  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;

    }
    if (val == 2) {
      this.ATrue = true;

    }
  }

}
