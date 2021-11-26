import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import{environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-term-deposits-master',
  templateUrl: './term-deposits-master.component.html',
  styleUrls: ['./term-deposits-master.component.scss'],
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
export class TermDepositsMasterComponent implements OnInit {
url = environment.base_url;
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      
      Scheme: ['',[Validators.required]],
      AccountNo: ['',[Validators.pattern]],
      InterestRate: ['',[Validators.pattern]],
      CustomerID: ['',[Validators.pattern,Validators.required]],
      Title: ['',[Validators.required]],
      Name: ['',[Validators.pattern,Validators.required]],
      LastIntDate: ['',[Validators.required]],
      UnclearBalance: ['',[Validators.pattern,Validators.required]],
      Member_Balance: ['',[Validators.pattern]],
      MemberScheme:['',[Validators.pattern,Validators.required]],
      LastTranDate: ['',[Validators.pattern]],
      Member_No: ['',[Validators.pattern,Validators.required]],
      Opening_Date: ['',[Validators.pattern,Validators.required]],
      Birth_Date: ['',[Validators.pattern]],
      ManualRefMemberNo: ['',[Validators.pattern]],
      Cast: ['',[Validators.pattern,Validators.required]],
      Occupation: ['',[Validators.pattern,Validators.required]],
      Category: ['',[Validators.pattern,Validators.required]],
      Operation: ['',[Validators.required]],
      Balance_Category: ['',[Validators.pattern,Validators.required]],
      Interest_Category: ['',[Validators.required]],
      pan_no: ['',[Validators.pattern]],
      Receipt_No:['',[Validators.pattern]],
      Month:['',[Validators.pattern]],
      Days:['',[Validators.pattern]],
      Maturity_Date:[''],
      Deposit_Amount:['',[Validators.pattern]],
      Maturity_Amount:['',[Validators.pattern]],
      Int_Rate:['',[Validators.pattern]],
      address1: ['',[Validators.pattern]],
      address2: ['',[Validators.pattern]],
      address3: ['',[Validators.pattern]],
      address4: ['',[Validators.pattern]],
      address5: ['',[Validators.pattern]],
      address6: ['',[Validators.pattern]],
      City_Code: ['',[Validators.required]],
      City_Code2: ['',[Validators.required]],
      Pin: ['',[Validators.pattern]],
      R:['',[Validators.pattern]],
      O:['',[Validators.pattern]],
      birthDate:[''],
      Guardian_Name: ['',[Validators.pattern]],
      Relation: ['',[Validators.pattern]],
      Branch: [''],
      Account_Type: [''],
      Account_Code: [''],
      Name1: ['',[Validators.pattern]],
      Signature_Authority: ['',[Validators.pattern]],
      Name2: ['',[Validators.pattern,Validators.required]],
      AttorneyName: ['',[Validators.pattern,Validators.required]],
      Relation1: ['',[Validators.pattern]],
      address7: ['',[Validators.pattern]],
      address8: ['',[Validators.pattern]],
      address9: ['',[Validators.pattern]],
      Mobile:['',[Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      Nomination_Date: ['',[Validators.pattern,Validators.required]],
      Age: ['',[Validators.pattern]],
      NomineeAge: ['',[Validators.pattern]],
      City: ['',[Validators.pattern,Validators.required]],
      JointName: ['',[Validators.pattern,Validators.required]],
      City1: ['',[Validators.pattern,Validators.required]],
      Pin2:['',[Validators.pattern]],
      NomineePin:['',[Validators.pattern]],
      Name3: ['',[Validators.pattern,Validators.required]],
      Name4: ['',[Validators.pattern,Validators.required]],
      Appointed_on:['',[Validators.required]],
      Expiry_Date:['',[Validators.required]],
      NomineeCity:['',[Validators.required]],
      LedgerBalance: ['',],
      FreezeStatus: [''],
      AccountLienMarked: [''],
      InterestInstruction: [''],
      Acstatus: [''],
      AsOnDate:['']
      // AC_CUSTID: ['', Validators.pattern,Validators.required],
      // Account: [''],
      
    });
  }
  submit(){
    console.log(this.angForm.valid);
  
    if(this.angForm.valid){
      console.log(this.angForm.value);
    }
  }
  //variable for checkbox 
  isRecovery: boolean = false; //return boolean value and display unchecked checkbox in basic tab
  isDiscounted: boolean = false; //return boolean value and display unchecked checkbox in basic tab
  isMinor: boolean = false; //return boolean value and display unchecked checkbox in Minor tab
  isPowerofAttorney: boolean = false; //return boolean value and display unchecked checkbox in Nominee/Joint a/cs/Attorney tab
  
  dtExportButtonOptions: any = {}; //Datatable variable for main form
  dtnomineeOptions: any = {};   //Datatable variable for nominee tab
  dtjointAccountsOptions: any = {};  //Datatable variable for Joint account
  dtpowerofAttorneyOptions:any={};    //Datatable variable for Power of Attorney 
  dtdocumentOptions: any = {}; //Datatable variable for document tab

  //display code according choice
  NomineeTrue:boolean = false;
  JointAccountsTrue: boolean = false;
  PowerofAttorneyTrue: boolean=  false;

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
  //title select variables
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  accountOption: Array<IOption> = this.AccountcodeService.getCharacters();
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
    Scheme: "",
    AccountNo: "",
    LastIntDate: "",
    CustomerID: "",
    Title: "",
    Name: "",
    InterestRate:"",
    AccountLienMarked: "",
    InterestInstruction: "",
    FreezeStatus: "",
    Acstatus: "",
    LastTranDate: "",
    LedgerBalance: ""
  };

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.LastIntDate = info.LastIntDate;
    this.message.CustomerID = info.CustomerID;
    this.message.Title = info.Title;
    this.message.Name = info.Name;
    this.message.InterestRate = info.InterestRate;
    this.message.AccountLienMarked = info.AccountLienMarked;
    this.message.InterestInstruction = info.InterestInstruction;
    this.message.FreezeStatus = info.FreezeStatus;
    this.message.Acstatus = info.Acstatus;
    this.message.LastTranDate = info.LastTranDate;
    this.message.LedgerBalance = info.LedgerBalance;
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info:any):void  {
    this.message.Scheme=info.Scheme;
        Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Scheme." + this.message.Scheme + "  data", 
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

  constructor(public TitleService: TitleService,public AccountcodeService: AccountcodeService,private fb: FormBuilder) {  this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/term-deposit-master.json',
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
          data: 'InterestRate',
          title: 'Interest Rate'
        },
        {
          data: 'LastTranDate',
          title: 'Last Tran. Date'
        },
        {
          data: 'LastIntDate',
          title: 'Last Int. Date'
        },
        {
          data: 'AccountLienMarked',
          title: 'Account Lien Marked?'
        },
        {
          data: 'InterestInstruction',
          title: 'Interest Instruction '
        },
        {
          data: 'FreezeStatus',
          title: 'Freeze Status '
        },
        {
          data: 'Acstatus',
          title: 'A/c Status'
        },
        {
          data: 'LedgerBalance',
          title: 'Ledger Balance'
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
    this.dtnomineeOptions = {
      ajax: 'fake-data/nominee.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Name',
          title: 'Code'
        },
        {
          data: 'Relation',
          title: 'Relation'
        },
        {
          data: 'Age',
          title: 'Age'
        },
        {
          data: 'NominationDate',
          title: 'Nomination Date'
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
    this.dtjointAccountsOptions = {
      ajax: 'fake-data/joint-accounts.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'IsOperative',
          title: 'IsOperative'
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
    this.dtpowerofAttorneyOptions = {
      ajax: 'fake-data/power-of-attorney.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'DateAppointed',
          title: 'Date Appointed'
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
    this.runTimer();
    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.AccountcodeService.loadCharacters().subscribe((options) => {
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
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
}
