import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { OccuptionService } from '../../../../shared/elements/occuption.service';
import { CategoryService } from '../../../../shared/elements/category.service';
import { OperationService } from '../../../../shared/elements/operation.service';
import { BalanceCategoryService } from '../../../../shared/elements/balancecategory.service';
import { InterestcategoryService } from '../../../../shared/elements/interestcategory.Service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { AccountTypeService } from '../../../../shared/elements/account-type.service';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-current-account-master',
  templateUrl: './current-account-master.component.html',
  styleUrls: ['./current-account-master.component.scss'],
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

export class CurrentAccountMasterComponent implements OnInit {
  angForm: FormGroup;
url =environment.base_url;
  //variable for checkbox 
  isRecovery: boolean = false; //return boolean value and display unchecked checkbox in basic tab
  isMinor: boolean = false; //return boolean value and display unchecked checkbox in Minor tab
  isPowerofAttorney: boolean = false; //return boolean value and display unchecked checkbox in Nominee/Joint a/cs/Attorney tab

  //display code according choice
  NomineeTrue: boolean = false;
  JointAccountsTrue: boolean = false;
  PowerofAttorneyTrue: boolean = false;

  dtExportButtonOptions: any = {}; //Datatable variable for main form
  dtnomineeOptions: any = {};   //Datatable variable for nominee tab
  dtjointAccountsOptions: any = {};  //Datatable variable for Joint account
  dtpowerofAttorneyOptions: any = {};    //Datatable variable for Power of Attorney 
  dtdocumentOptions: any = {}; //Datatable variable for document form

  //title select variables
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  scheme: Array<IOption> = this.schemeCodeService.getCharacters();
  accountNo: Array<IOption> = this.accountnoService.getCharacters();
  cust_ID: Array<IOption> = this.customeridService.getCharacters();
  cast: Array<IOption> = this.castService.getCharacters();
  occupation: Array<IOption> = this.occuptionService.getCharacters();
  category: Array<IOption> = this.categoryService.getCharacters();
  operation: Array<IOption> = this.operationService.getCharacters();
  balance_category: Array<IOption> = this.balanceCategoryService.getCharacters();
  int_category: Array<IOption> = this.interestCategoryService.getCharacters();
  city: Array<IOption> = this.cityCodeService.getCharacters();
  branch: Array<IOption> = this.branchService.getCharacters();
  account_type: Array<IOption> = this.accountTypeService.getCharacters();
  account_code: Array<IOption> = this.accountCodeService.getCharacters();
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
    Account: "",
    LastIntDate: "",
    CustomerID: "",
    Title: "",
    Name: "",
    FreezeStatus: "",
    UnclearBalance: "",
    LedgerBalance: ""
  };

  constructor(public TitleService: TitleService, public schemeCodeService: SchemeCodeService, public accountnoService: AcountnoService,
    public castService: CastService, public customeridService: CustomeridService, public occuptionService: OccuptionService,
    public categoryService: CategoryService, public operationService: OperationService, public balanceCategoryService: BalanceCategoryService,
    public interestCategoryService: InterestcategoryService, public cityCodeService: CitycodeService, public branchService: BranchService,
    public accountTypeService: AccountTypeService, public accountCodeService: AccountcodeService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/current-account-master.json',
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
          data: 'LastIntDate',
          title: 'Last Int. Date'
        },
        {
          data: 'UnclearBalance',
          title: 'Unclear Balance'
        },
        {
          data: 'FreezeStatus',
          title: 'Freeze Status '
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

  createForm() {
    this.angForm = this.fb.group({
      Scheme: ['', [Validators.required]],
      Account: ['',],
      CustomerID: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Name: ['', [Validators.pattern, Validators.required]],
      LastIntDate: ['',],
      UnclearBalance: ['',],
      PropriatorName: ['',[Validators.pattern]],
      Member_Scheme: ['', [Validators.pattern]],
      Member_No: ['', [Validators.pattern]],
      Opening_Date: ['', [Validators.required]],
      Birth_Date: ['',],
      ManualRefMemberNo: ['', [Validators.pattern]],
      Cast: ['', [Validators.required]],
      Occupation: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Operation: ['', [Validators.required]],
      Balance_Category: ['', [Validators.required]],
      Interest_Category: ['', [Validators.required]],
      pan_no: ['', [Validators.pattern]],
      InstallmentAmt: ['', [Validators.pattern]],
      address1: ['', [Validators.pattern]],
      address2: ['', [Validators.pattern]],
      address3: ['', [Validators.pattern]],
      taddress1: ['', [Validators.pattern]],
      taddress2: ['', [Validators.pattern]],
      taddress3: ['', [Validators.pattern]],
      City_Code: ['', [Validators.required]],
      tCity_Code: ['', [Validators.required]],
      Pin: ['', [Validators.pattern]],
      tPin: ['', [Validators.pattern]],
      R: ['', [Validators.pattern]],
      O: ['', [Validators.pattern]],
      Mobile: ['', [Validators.pattern]],
      birthDate: [''],
      Guardian_Name: ['', [Validators.pattern]],
      Relation: ['', [Validators.pattern]],
      IName: ['', [Validators.pattern]],
      Signature_Authority: ['', [Validators.pattern]],
      NName: ['', [Validators.pattern, Validators.required]],
      NRelation: ['', [Validators.pattern, Validators.required]],
      JName: ['', [Validators.pattern, Validators.required]],
      PName: ['', [Validators.pattern, Validators.required]],
      Branch: ['',],
      account_type: ['',],
      account_code: ['',],
      Nomination_Date: ['', [Validators.required]],
      PNomination_Date: ['', [Validators.required]],
      Age: ['', [Validators.pattern]],
      naddress1: ['', [Validators.pattern]],
      naddress2: ['', [Validators.pattern]],
      naddress3: ['', [Validators.pattern]],
      nPin: ['', [Validators.pattern]],
      ncity: ['', [Validators.required]],
      Appointed_on: ['', [Validators.required]],
      Expiry_Date: ['', [Validators.required]],
      LedgerBalance: [''],
      FreezeStatus: [''],
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
    this.message.LastIntDate = info.LastIntDate;
    this.message.CustomerID = info.CustomerID;
    this.message.Title = info.Title;
    this.message.Name = info.Name;
    this.message.FreezeStatus = info.FreezeStatus;
    this.message.UnclearBalance = info.UnclearBalance;
    this.message.LedgerBalance = info.LedgerBalance;
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
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

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
}
