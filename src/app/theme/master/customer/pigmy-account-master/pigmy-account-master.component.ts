import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';

import { animate, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// Multiple Selection


import Swal from 'sweetalert2';

@Component({
  selector: 'app-pigmy-account-master',
  templateUrl: './pigmy-account-master.component.html',
  styleUrls: ['./pigmy-account-master.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PigmyAccountMasterComponent implements OnInit {

  angForm: FormGroup;
  SchemeCodeService: Array<IOption> = this.schemeCodeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  NomineeTrue = false;
  JointAccountsTrue = false;
  PowerofAttorneyTrue = false;
  //variable for checkbox and radio button 
  isOperation: boolean = false
  dtExportButtonOptions: any = {};
  dtNomineeOptions: any = {};
  dtJointOptions: any = {};
  dtPowerOptions: any = {};
  dtdocumentOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder, public schemeCodeService: SchemeCodeService,) { this.createForm(); }

  message = {
    PGScheme: "",
    AccountNo: "",
    CustomerID: "",
    Name: "",
    LastTranDate: "",
    LastInterestDate: "",
    AccountLienMarked: "",
    FreezeStatus: "",
    AcStatus: "",
    LedgerBalance: "",

    //fields in nominee
    Name1: "",
    Relation: "",
    NominationDate: "",
    Age: "",
    Address1: "",
    Address2: "",
    Address3: "",
    City: "",
    Pin: "",

    //fields in joint accounts
    Name2: "",
    Operation: "",

    //fields for Power of antonomy
    Name3: "",
    Appointedon: "",
    ExpiryDate: ""

  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/pigmyam-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'PGScheme',
          title: 'PG Scheme'
        },
        {
          data: 'AccountNo',
          title: 'Account No'
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'Name',
          title: 'Name'
        }
        ,
        {
          data: 'LastTranDate',
          title: 'Last Tran Date'
        },
        {
          data: 'LastInterestDate',
          title: 'Last Interes Date'
        },
        {
          data: 'AccountLienMarked',
          title: 'Account Lien Marked?'
        },
        {
          data: 'FreezeStatus',
          title: 'Freeze Status'
        },

        {
          data: 'AcStatus',
          title: 'A/c Status'
        },
        {
          data: 'LedgerBalance',
          title: 'Ledger Balance'
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
    this.dtNomineeOptions = {
      ajax: 'fake-data/pgam-nominee.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Name1',
          title: 'Name'
        },
        {
          data: 'Relation',
          title: 'Relation'
        },
        {
          data: 'NominationDate',
          title: 'Nomination Date'
        },
        {
          data: 'Age',
          title: 'Age'
        }
        ,
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
          data: 'Pin',
          title: 'Pin'
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

    this.dtJointOptions = {
      ajax: 'fake-data/pgam-joint.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          data: 'Name2',
          title: 'Name'
        },

        {
          data: 'Operation',
          title: 'Operation'
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

    this.dtPowerOptions = {
      ajax: 'fake-data/pgam-power.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          data: 'Name3',
          title: 'Name'
        },

        {
          data: 'Appointedon',
          title: 'Appointed on'
        },
        {
          data: 'ExpiryDate',
          title: 'Expiry Date'
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

    this.dtdocumentOptions = {
      ajax: 'fake-data/documents.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Code',
          title: 'Code'
        },
        {
          data: 'Description',
          title: 'Description'
        },
        {
          data: 'IsAccepted',
          title: 'Is Accepted'
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
    ;
    this.runTimer();
    this.dataSub = this.schemeCodeService.loadCharacters().subscribe((options) => {
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

      PGScheme: ['', [Validators.required]],
      AccountNo: [''],
      CustomerID: ['', [Validators.required, Validators.pattern]],
      LastInterestDate: [''],
      LastTranDate: [''],
      AccountLienMarked: [''],
      FreezeStatus: [''],
      AcStatus: [''],
      LedgerBalance: [''],
      ShortName: ['', [Validators.pattern, Validators.required]],
      ManualReferenceMemberNo: ['', [Validators.pattern]],
      MemberScheme: [''],
      MemberNo: [''],
      Age: ['', [Validators.pattern]],
      OpeningDate: ['', [Validators.required]],
      RenewalDate: [''],
      LastIntDate: [''],
      Cast: ['', [Validators.required]],
      ExpiryDate: ['', [Validators.required]],
      Occupation: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Operation: ['', [Validators.required]],
      InterestCategory: ['', [Validators.required]],
      pan_no: ['', [Validators.pattern]],
      Period: ['', [Validators.pattern, Validators.required]],
      DefaultDepositeAmount: ['', [Validators.pattern, Validators.required]],
      AgentScheme: ['', [Validators.required]],
      AgentCode: ['', [Validators.required]],
      address: ['', [Validators.pattern]],
      address1: ['', [Validators.pattern]],
      address2: ['', [Validators.pattern]],
      City_Code: ['', [Validators.required]],
      tempCity_Code: ['', [Validators.required]],
      Pin: ['', [Validators.pattern]],
      Tempaddress: ['', [Validators.pattern]],
      Tempaddress1: ['', [Validators.pattern]],
      Tempaddress2: ['', [Validators.pattern]],
      TempPin: ['', [Validators.pattern]],
      R: ['', [Validators.pattern]],
      O: ['', [Validators.pattern]],
      Mobile: ['', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      birthDate: [''],
      Guardian_Name: ['', [Validators.pattern]],
      Relation: ['', [Validators.pattern]],
      Branch: [''],
      AccountType: [''],
      AccountCode: [''],
      IntroducerName: ['', [Validators.pattern]],
      NomineeName: ['', [Validators.required, Validators.pattern]],
      NomineeRelation: ['', [Validators.required, Validators.pattern]],
      Nomination_Date: ['', [Validators.required]],
      NomineeAge: ['', [Validators.pattern]],
      Nomineeaddress: ['', [Validators.pattern]],
      Nomineeaddress1: ['', [Validators.pattern]],
      Nomineeaddress2: ['', [Validators.pattern]],
      NomeeniCity: ['', [Validators.required]],
      NomineePin: ['', [Validators.pattern]],
      JointName: ['', [Validators.pattern, Validators.required]],
      PowerofAttorneyName: ['', [Validators.pattern, Validators.required]],
      Appointedon: ['', [Validators.pattern, Validators.required]],
      PowerofAttorneyExpiryDate: ['', [Validators.required]],

    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }


  OpenLink(val) {
    if (val == 1) {
      this.NomineeTrue = true;
      this.JointAccountsTrue = false;
      this.PowerofAttorneyTrue = false;
    }
    if (val == 2) {
      this.JointAccountsTrue = true;
      this.NomineeTrue = false;
      this.PowerofAttorneyTrue = false;
    }
    if (val == 3) {
      this.PowerofAttorneyTrue = true;
      this.JointAccountsTrue = false;
      this.NomineeTrue = false;
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.PGScheme = info.PGScheme;
    this.message.AccountNo = info.AccountNo;
    this.message.CustomerID = info.CustomerID;
    this.message.Name = info.Name;
    this.message.LastTranDate = info.LastTranDate;
    this.message.LastInterestDate = info.LastInterestDate;
    this.message.AccountLienMarked = info.AccountLienMarked;
    this.message.FreezeStatus = info.FreezeStatus;
    this.message.AcStatus = info.AcStatus;
    this.message.LedgerBalance = info.LedgerBalance;

    //message for nominee
    this.message.Name1 = info.Name1;
    this.message.Relation = info.Relation;
    this.message.NominationDate = info.NominationDate;
    this.message.Age = info.Age;
    this.message.Address1 = info.Address1;
    this.message.Address2 = info.Address2;
    this.message.Address3 = info.Address3;
    this.message.City = info.City;
    this.message.Pin = info.Pin;

    //message for joint
    this.message.Operation = info.Operation;
    this.message.Name2 = info.Name2;

    //message for Power
    this.message.Name3 = info.Name3;
    this.message.Appointedon = info.Appointedon;
    this.message.ExpiryDate = info.ExpiryDate;

    //code for chekbox
    if (this.message.Operation == "Yes") {
      this.isOperation = true;   //return boolean value and display checked checkbox
    }
    else {
      this.isOperation = false;   //return boolean value and display unchecked checkbox
    }

    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.PGScheme = info.PGScheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete PG Scheme." + this.message.PGScheme + "  data",
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


