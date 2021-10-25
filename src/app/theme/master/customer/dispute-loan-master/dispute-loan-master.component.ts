import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { RepayModeService } from '../../../../shared/elements/repay-mode.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dispute-loan-master',
  templateUrl: './dispute-loan-master.component.html',
  styleUrls: ['./dispute-loan-master.component.scss'],
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
export class DisputeLoanMasterComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {}; //Datatable variable for main form
  securitiesOptions: any = {};     //Datatable variable for securities tab
  guarantorOptions: any = {};      //Datatable variable for gurantor tab
  dtdocumentOptions: any = {}; //Datatable variable for document form

  //Select option for title, repay mode
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  repayModeOption: Array<IOption> = this.RepayModeService.getCharacters();
  simpleOption: Array<IOption> = this.RepayModeService.getCharacters();
  statementOption: Array<IOption> = this.SchemeCodeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  GuarantorTrue = false;
  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public TitleService: TitleService,public SchemeCodeService: SchemeCodeService, public RepayModeService: RepayModeService,private fb: FormBuilder) {  this.createForm(); }

    //object created to get data when row is clicked
    message = {
      Scheme: "",
      AccountNo: "",
      LastIntDate: "",
      CustomerID: "",
      Title: "",
      Name: "",
      TransferfromScheme: "",
      TransferfromAcNo: "",
      LedgerBalance: "",
      NormalInterestRate:""
    };

  createForm() {
    this.angForm = this.fb.group({
      
      Scheme: ['',[Validators.required]],
      AccountNo: [''],
      NormalInterestRate: [''],
      TransferFromScheme: ['',[Validators.pattern]],
      TransferFromAcNo: ['',[Validators.pattern]],
      CustomerID1: ['',[Validators.required]],
      Name: ['',[Validators.required, Validators.pattern]],
      Title: ['',[Validators.required]],
      LastIntDate: [''],
      LedgerBalance: [''],
      Opening_Date:['',[Validators.required]],
      MemberScheme:[''],
      MemberNo:[''],
      Cast:['',[Validators.required]],
      Occupation:['',[Validators.required]],
      InterestCategory:['',[Validators.required]],
      HealthCode:['',[Validators.required]],
      RepayMode:['',[Validators.required]],
      SanctionLimit:['',[Validators.required, Validators.pattern]],
      SanctionDate:['',[Validators.required]],
      DrawingPower:['',[Validators.required]],
      InstallmentAmount:['',[Validators.pattern]],
      Period:['',[Validators.pattern, Validators.required]],
      MoratoriumPeriod:['',[Validators.pattern]],
      GracePeriod:['',[Validators.pattern]],
      ExpiryDate1:['',[Validators.pattern]],
      NormalIntRate:['',[Validators.pattern, Validators.required]],
      PenalIntRate:['',[Validators.pattern]],
      EffectiveDate:['',[Validators.required]],

      Authority: ['',[Validators.required]],
      RecommendedBy: ['',[Validators.required]],
      Priority: ['',[Validators.required]],
      Industry: ['',[Validators.required]],
      WeakerSection: ['',[Validators.required]],
      Purpose:['',[Validators.required]],
      AccountType:['',[Validators.required]],
      Director:['',[Validators.pattern]],
      Director_Relation: ['',[Validators.pattern]],
      R_No:['',[Validators.pattern]],
      R_Date:[''],
      Amount:['',[Validators.pattern]],
      ResolutionNo:['',[Validators.pattern]],
      ResolutionDate:[''],
      address: ['',[Validators.pattern]],
      address1: ['',[Validators.pattern]],
      address2: ['',[Validators.pattern]],
      City_Code: ['',[Validators.required]],
      Pin: ['',[Validators.pattern]],
      Tempaddress: ['',[Validators.pattern]],
      Tempaddress1: ['',[Validators.pattern]],
      Tempaddress2: ['',[Validators.pattern]],
      tempCity_Code: ['',[Validators.required]],
      TempPin: ['',[Validators.pattern]],
      Add_R: ['',[Validators.pattern]],
      Add_O: ['',[Validators.pattern]],
      Add_Mobile: ['',[Validators.pattern]],
      CustomerID:['',[Validators.required]],
      member_type:['',[Validators.required]],
      member_code: ['',[Validators.required]],
      GName: ['',[Validators.pattern]],
      ExpiryDate:[''],
      G_address:['',[Validators.pattern]],
      G_address1:['',[Validators.pattern]],
      G_address2:['',[Validators.pattern]],
      city:[''],
      SecurityDetails:['',[Validators.pattern]],
      TotalSecurityAmount:['',[Validators.pattern]],
      G_Remark:[''],
      SuiteDate:[''],
      CourtInterestRate:['',[Validators.pattern]],
      CourtInstallment:['',[Validators.pattern]],
      CourtOrderDate:[''],
      SuiteAmount:['',[Validators.pattern,Validators.required]],
      ResultDate:[''],
      BranchCode:['',[Validators.required]],
      RecoverableAmount:['',[Validators.pattern,Validators.required]],
      IntCalculationDate:[''],
      RecoverableInterest:['',[Validators.pattern]],
      CASE_NO:['',[Validators.pattern]],
      OldScheme:['',[Validators.pattern]],
      OldScheme1:['',[Validators.pattern,Validators.required]],
      Advocate:['',[Validators.required]],
      LoanStage:['',[Validators.required]],
      Court:['',[Validators.pattern]],
      Remark: ['',[Validators.pattern]],
    });
  }
  submit(){
    console.log(this.angForm.valid);
  
    if(this.angForm.valid){
      console.log(this.angForm.value);
    }
  }


  //display code according choice

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/dispute-loan-master.json',
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
          data: 'AccountNo',
          title: 'Account No'
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'NormalInterestRate',
          title: 'Normal Interest Rate'
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
          data: 'TransferfromScheme',
          title: 'Transfer from Scheme'
        },
        {
          data: 'TransferfromAcNo',
          title: 'Transfer from A/c No'
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
    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
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


    //function executes when edit button clicked
    editClickHandler(info: any): void {
      this.message.Scheme = info.Scheme;
      this.message.AccountNo = info.AccountNo;
      this.message.LastIntDate = info.LastIntDate;
      this.message.CustomerID = info.CustomerID;
      this.message.Title = info.Title;
      this.message.Name = info.Name;
      this.message.TransferfromScheme = info.TransferfromScheme;
      this.message.TransferfromAcNo = info.TransferfromAcNo;
      this.message.LedgerBalance = info.LedgerBalance;
      this.message.NormalInterestRate = info.NormalInterestRate;
      this.showButton = false;
      this.updateShow = true;
    }

      //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
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
}