import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { SchemeTypeService } from '../../../../shared/elements/scheme-type.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { CastService } from '../../../../shared/elements/cast.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pigmy-agent-master',
  templateUrl: './pigmy-agent-master.component.html',
  styleUrls: ['./pigmy-agent-master.component.scss'],
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

export class PigmyAgentMasterComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable for main form
  dtnomineeOptions: any = {};         //Datatable variable for nominee tab

  //display code according choice
  NomineeTrue = false;

  //Select option for title
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  scheme: Array<IOption> = this.schemeCodeService.getCharacters();
  CustomerID: Array<IOption> = this.customerIdService.getCharacters();
  Cast: Array<IOption> = this.castService.getCharacters();
  PimgyScheme: Array<IOption> = this.schemeTypeService.getCharacters();
  City_Code: Array<IOption> = this.cityCodeService.getCharacters();
  IScheme: Array<IOption> = this.schemeCodeService.getCharacters();
  branch: Array<IOption> = this.branchService.getCharacters();
  ncity: Array<IOption> = this.cityCodeService.getCharacters();
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
    AgentNo: "",
    CommissionDate: "",
    CustomerID: "",
    Title: "",
    Name: "",
    FreezeStatus: "",
    Acstatus: "",
    LastTranDate: "",
    LedgerBalance: ""
  };

  constructor(public TitleService: TitleService, public schemeCodeService: SchemeCodeService, public customerIdService: CustomeridService,
    public cityCodeService: CitycodeService, public schemeTypeService: SchemeTypeService, public branchService: BranchService, public castService: CastService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/pigmy-agent-master.json',
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
          data: 'AgentNo',
          title: 'Agent No'
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
          data: 'LastTranDate',
          title: 'Last Tran. Date'
        },
        {
          data: 'CommissionDate',
          title: 'Commission Date '
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
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      Scheme: ['', [Validators.required]],
      AgentNo: ['',],
      CustomerID: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Name: ['', [Validators.pattern, Validators.required]],
      LastTranDate: ['',],
      CommissionDate: ['',],
      FreezeStatus: ['',],
      Acstatus: ['',],
      Cast: ['',],
      AppontiedOn: ['', [Validators.required]],
      PimgyScheme: ['', [Validators.required]],
      address1: ['', [Validators.pattern]],
      address2: ['', [Validators.pattern]],
      address3: ['', [Validators.pattern]],
      Pin: ['', [Validators.pattern]],
      R: ['', [Validators.pattern]],
      O: ['', [Validators.pattern]],
      Mobile: ['', [Validators.pattern]],
      AC_Code: ['', [Validators.pattern]],
      Age: ['', [Validators.pattern]],
      naddress1: ['', [Validators.pattern]],
      naddress2: ['', [Validators.pattern]],
      naddress3: ['', [Validators.pattern]],
      nPin: ['', [Validators.pattern]],
      IName: ['', [Validators.pattern]],
      City_Code: ['', [Validators.required]],
      Nomination_Date: ['', [Validators.required]],
      ncity: ['', [Validators.required]],
      NName: ['', [Validators.required, Validators.pattern]],
      Relation: ['', [Validators.required, Validators.pattern]],
      Branch: [''],
      IScheme: [''],
      LedgerBalance: [''],
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
    this.message.AgentNo = info.AgentNo;
    this.message.CommissionDate = info.CommissionDate;
    this.message.CustomerID = info.CustomerID;
    this.message.Title = info.Title;
    this.message.Name = info.Name;
    this.message.FreezeStatus = info.FreezeStatus;
    this.message.Acstatus = info.Acstatus;
    this.message.LastTranDate = info.LastTranDate;
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
