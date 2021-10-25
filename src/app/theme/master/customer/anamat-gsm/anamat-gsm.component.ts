import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { MsService } from '../../../../shared/elements/ms.service';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-anamat-gsm',
  templateUrl: './anamat-gsm.component.html',
  styleUrls: ['./anamat-gsm.component.scss'],
})

export class AnamatGSMComponent implements OnInit {

  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable

  //title select variables
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  scheme: Array<IOption> = this.MsService.getCharacters();
  Ac_NO: Array<IOption> = this.accountCodeService.getCharacters();
  CustomerID: Array<IOption> = this.customerIdService.getCharacters();
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
  isRecovery: boolean = false;
  isDebit: boolean = true;

  //object created to get data when row is clicked
  message = {
    Scheme: "",
    Account: "",
    CustomerID: "",
    Title: "",
    Name: "",
    MemberScheme: "",
    MemberNo: "",
    Address1: "",
    Address2: "",
    Address3: "",
    City: "",
    Pincode: "",
    OpenDate: "",
    Reason: "",
    Recovery: "",
    Debit: "",
    Credit: ""
  };

  constructor(public TitleService: TitleService, public MsService: MsService, public customerIdService: CustomeridService, public accountCodeService: AccountcodeService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/anamat-gsm.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Scheme',
          title: 'Scheme'
        },
        {
          data: 'Account',
          title: 'Account'
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'Title',
          title: 'Title'
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'MemberScheme',
          title: 'Member Scheme'
        },
        {
          data: 'MemberNo',
          title: 'Member No'
        },
        {
          data: 'Address1',
          title: 'Address1'
        },
        {
          data: 'Address2',
          title: 'Address2'
        },
        {
          data: 'Address3',
          title: 'Address3'
        },
        {
          data: 'City',
          title: 'City'
        },
        {
          data: 'Pincode',
          title: 'Pincode'
        },
        {
          data: 'OpenDate',
          title: 'Open Date'
        },
        {
          data: 'Recovery',
          title: 'Recovery'
        },
        {
          data: 'Debit',
          title: 'Debit'
        },
        {
          data: 'Credit',
          title: 'Credit'
        },
        {
          data: 'Reason',
          title: 'Reason'
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
    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.dataSub = this.MsService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.accountCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.customerIdService.loadCharacters().subscribe((options) => {
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
      Ac_NO: [''],


      CustomerID: ['', [Validators.pattern]],
      Title: ['', [Validators.required]],
      Name: ['', [Validators.pattern, Validators.required]],
      MemberScheme: ['', [Validators.pattern]],
      MemberNo: ['', [Validators.pattern]],
      Address1: ['', [Validators.pattern]],
      Address2: ['', [Validators.pattern]],
      Address3: ['', [Validators.pattern]],
      City: ['', [Validators.pattern]],
      Pincode: ['', [Validators.pattern]],
      OpenDate: ['', [Validators.required]],
      Reason: ['', [Validators.pattern]],
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.Account = info.Account;
    this.message.CustomerID = info.CustomerID;
    this.message.Title = info.Title;
    this.message.Name = info.Name;
    this.message.MemberScheme = info.MemberScheme;
    this.message.MemberNo = info.MemberNo;
    this.message.Address1 = info.Address1;
    this.message.Address2 = info.Address2;
    this.message.Address3 = info.Address3;
    this.message.City = info.City;
    this.message.Pincode = info.Pincode;
    this.message.OpenDate = info.OpenDate;
    this.message.Reason = info.Reason;
    this.message.Recovery = info.Recovery;
    this.message.Debit = info.Debit;
    this.message.Credit = info.Credit;
    //code for chekbox
    if (this.message.Recovery == "Yes") {
      this.isRecovery = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isRecovery = false;   //return boolean value and display unchecked checkbox
    }
    //code for radio button
    if (this.message.Debit == "Yes") {
      this.isDebit = true;      //return boolean value and display checked radio button
    }
    else {
      this.isDebit = false;   //return boolean value and display unchecked radio button
    }
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme" + this.message.Scheme + "  data",
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