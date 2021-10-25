import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { RepayModeService } from '../../../../shared/elements/repay-mode.service';
import { InstallmentTypeService } from '../../../../shared/elements/installment-type.service';
import { AccountTypeService } from '../../../../shared/elements/account-type.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { MemberschemeService } from '../../../../shared/elements/memberscheme.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { OccuptionService } from '../../../../shared/elements/occuption.service';
import { S1Service } from '../../../../shared/elements/s1.service';
import { S2Service } from '../../../../shared/elements/s2.service';
import { S3Service } from '../../../../shared/elements/s3.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { MemberTypeService } from '../../../../shared/elements/member-type.service';
import { MemberService } from '../../../../shared/elements/member.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-term-loan-master',
  templateUrl: './term-loan-master.component.html',
  styleUrls: ['./term-loan-master.component.scss'],
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

export class TermLoanMasterComponent implements OnInit {
  angForm: FormGroup;

  //variable for checkbox  
  isRecovery: boolean = false; //return boolean value and display unchecked checkbox in basic tab
  isAggricultureLoan: boolean = false; //return boolean value and display unchecked checkbox in basic tab
  isWeaker: boolean = false; //return boolean value and display unchecked checkbox in other deatils tab

  dtExportButtonOptions: any = {}; //Datatable variable for main form
  securitiesOptions: any = {};     //Datatable variable for securities tab
  guarantorOptions: any = {};      //Datatable variable for gurantor tab
  coborrowerOptions: any = {};     //Datatable variable for coborrower tab
  dtdocumentOptions: any = {};     //Datatable variable for document tab

  //display code according choice
  GuarantorTrue: boolean = false;
  CoBorrowerTrue: boolean = false;

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
    NormalInterestRate: "",
    LedgerBalance: ""
  };

  //Select option for title, repay mode, installment type option, account type
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  repayModeOption: Array<IOption> = this.RepayModeService.getCharacters();
  installmentTypeOption: Array<IOption> = this.InstallmentTypeService.getCharacters();
  accountTypeOption: Array<IOption> = this.AccountTypeService.getCharacters();
  Scheme: Array<IOption> = this.schemeCodeService.getCharacters();
  CustomerID: Array<IOption> = this.customerIdService.getCharacters();
  MemberScheme: Array<IOption> = this.memberSchemeService.getCharacters();
  MemberNo: Array<IOption> = this.memberNoService.getCharacters();
  Cast: Array<IOption> = this.castService.getCharacters();
  Occupation: Array<IOption> = this.occuptionService.getCharacters();
  InterestCategory: Array<IOption> = this.A1Service.getCharacters();
  SanctionAuthority: Array<IOption> = this.A1Service.getCharacters();
  RecommendedBy: Array<IOption> = this.A1Service.getCharacters();
  RecoveryCleark: Array<IOption> = this.A1Service.getCharacters();
  Priority: Array<IOption> = this.A1Service.getCharacters();
  WeakerSection: Array<IOption> = this.A1Service.getCharacters();
  Purpose: Array<IOption> = this.A1Service.getCharacters();
  Industry: Array<IOption> = this.A1Service.getCharacters();
  HealthCode: Array<IOption> = this.A1Service.getCharacters();
  AccountType: Array<IOption> = this.AccountTypeService.getCharacters();
  Director: Array<IOption> = this.A1Service.getCharacters();
  DirectorRelation: Array<IOption> = this.A1Service.getCharacters();
  City_Code: Array<IOption> = this.cityCodeService.getCharacters();
  City_Code1: Array<IOption> = this.cityCodeService.getCharacters();
  SecurityDetails: Array<IOption> = this.A1Service.getCharacters();
  gCustomerID: Array<IOption> = this.customerIdService.getCharacters();
  MemberType: Array<IOption> = this.memberSchemeService.getCharacters();
  member_code: Array<IOption> = this.memberNoService.getCharacters();
  GCity_Code: Array<IOption> = this.cityCodeService.getCharacters();
  CCustomerID: Array<IOption> = this.customerIdService.getCharacters();
  CCity: Array<IOption> = this.cityCodeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  createForm() {
    this.angForm = this.fb.group({
      Scheme: ['', [Validators.required]],
      Account: ['',],
      CustomerID: ['', [Validators.required]],
      NormalInterestRate: [''],
      LastIntDate: [''],
      LedgerBalance: [''],
      RenewalDate: [''],
      Birth_Date: [''],
      MemberScheme: [''],
      MemberNo: [''],
      Title: ['', [Validators.required]],
      Name: ['', [Validators.pattern, Validators.required]],
      Opening_Date: ['', [Validators.required]],
      Cast: ['', [Validators.required]],
      Occupation: ['', [Validators.required]],
      InterestCategory: ['', [Validators.required]],
      age: ['', [Validators.pattern]],
      ManualRefMemberNo: ['', [Validators.pattern]],
      DepositAcNo: ['', [Validators.pattern]],
      SanctionLimit: ['', [Validators.pattern, Validators.required]],
      DrawingPower: ['', [Validators.pattern, Validators.required]],
      Period: ['', [Validators.pattern, Validators.required]],
      InterestRate: ['', [Validators.pattern, Validators.required]],
      SanctionDate: ['', [Validators.required]],
      ExpiryDate: ['', [Validators.required]],
      EffectiveDate: ['', [Validators.required]],
      RepayMode: ['', [Validators.required]],
      InstallmentType: ['', [Validators.required]],
      Installment: ['', [Validators.pattern]],
      MoratoriumPeriod: ['', [Validators.pattern]],
      GracePeriod: ['', [Validators.pattern]],
      AcreArea: ['', [Validators.pattern]],
      SanctionAuthority: ['', [Validators.required]],
      RecommendedBy: ['', [Validators.required]],
      RecoveryCleark: ['', [Validators.required]],
      Priority: ['', [Validators.required]],
      WeakerSection: ['', [Validators.required]],
      Purpose: ['', [Validators.required]],
      Industry: ['', [Validators.required]],
      HealthCode: ['', [Validators.required]],
      AccountType: ['', [Validators.required]],
      RNo: ['', [Validators.pattern]],
      RAmount: ['', [Validators.pattern]],
      ReNo: ['', [Validators.pattern]],
      address1: ['', [Validators.pattern]],
      address2: ['', [Validators.pattern]],
      address3: ['', [Validators.pattern]],
      taddress1: ['', [Validators.pattern]],
      taddress2: ['', [Validators.pattern]],
      taddress3: ['', [Validators.pattern]],
      Pin: ['', [Validators.pattern]],
      tPin: ['', [Validators.pattern]],
      R: ['', [Validators.pattern]],
      O: ['', [Validators.pattern]],
      Mobile: ['', [Validators.pattern]],
      TotalSecurityAmount: ['', [Validators.pattern]],
      Remark: ['', [Validators.pattern]],
      City_Code: ['', [Validators.required]],
      City_Code1: ['', [Validators.required]],
      gCustomerID: ['', [Validators.required]],
      MemberType: ['', [Validators.required]],
      member_code: ['', [Validators.required]],
      CCustomerID: ['', [Validators.required]],
      GName: ['', [Validators.pattern]],
      Gaddress1: ['', [Validators.pattern]],
      Gaddress2: ['', [Validators.pattern]],
      Gaddress3: ['', [Validators.pattern]],
      CName: ['', [Validators.pattern]],
      Caddress1: ['', [Validators.pattern]],
      Caddress2: ['', [Validators.pattern]],
      Caddress3: ['', [Validators.pattern]],
      DepositScheme: [''],
      Director: [''],
      DirectorRelation: [''],
      RDate: [''],
      ReDate: [''],
      SecurityDetails: [''],
      GExpiryDate: [''],
      GCity_Code: [''],
      CCity: [''],

    });
  }

  constructor(public TitleService: TitleService, public RepayModeService: RepayModeService, public InstallmentTypeService: InstallmentTypeService,
    public AccountTypeService: AccountTypeService, public schemeCodeService: SchemeCodeService,
    public customerIdService: CustomeridService, public memberSchemeService: MemberschemeService, public memberNoService: MembernoService,
    public castService: CastService, public occuptionService: OccuptionService, public S1Service: S1Service, public S2Service: S2Service,
    public S3Service: S3Service, public A1Service: A1Service, public cityCodeService: CitycodeService,
    public memberTypeService: MemberTypeService,
    public memberService: MemberService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/term-loan-master.json',
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
          data: 'NormalInterestRate',
          title: 'Normal Interest Rate'
        },
        {
          data: 'LastIntDate',
          title: 'Last Int. Date'
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
    this.securitiesOptions = {
      ajax: 'fake-data/securities.json',
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
    this.guarantorOptions = {
      ajax: 'fake-data/guarantor.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'MemberType',
          title: 'Member Type'
        },
        {
          data: 'Membercode',
          title: 'Member code'
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'ExpiryDate',
          title: 'Expiry Date'
        },
        {
          data: 'AddressLine1',
          title: 'Address Line1'
        },
        {
          data: 'AddressLine2',
          title: 'Address Line2'
        },
        {
          data: 'AddressLine3',
          title: 'Address Line3'
        },
        {
          data: 'City',
          title: 'City'
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
    this.coborrowerOptions = {
      ajax: 'fake-data/coborrower.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'AddressLine1',
          title: 'Address Line1'
        },
        {
          data: 'AddressLine2',
          title: 'Address Line2'
        },
        {
          data: 'AddressLine3',
          title: 'Address Line3'
        },
        {
          data: 'CityCode',
          title: 'City Code'
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

    this.runTimer();
    this.dataSub = this.RepayModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.InstallmentTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.runTimer();
    this.dataSub = this.AccountTypeService.loadCharacters().subscribe((options) => {
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
      this.GuarantorTrue = true;
    }
    if (val == 2) {
      this.CoBorrowerTrue = true;
    }
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
    this.message.NormalInterestRate = info.NormalInterestRate;
    this.message.LedgerBalance = info.LedgerBalance;
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