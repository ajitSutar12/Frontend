import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { MemberTypeService } from '../../../../shared/elements/member-type.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { SignTypeService } from '../../../../shared/elements/sign-type.service';
import { A2Service } from '../../../../shared/elements/a2.service';
import { CatService } from '../../../../shared/elements/cat.service';
import { City1Service } from '../../../../shared/elements/city1.service';
import { City2Service } from '../../../../shared/elements/city2.service';
import { Sal1Service } from '../../../../shared/elements/sal1.service';
import { Sal2Service } from '../../../../shared/elements/sal2.service';
import { City3Service } from '../../../../shared/elements/city3.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { valHooks } from 'jquery';

@Component({
  selector: 'app-shares-master',
  templateUrl: './shares-master.component.html',
  styleUrls: ['./shares-master.component.scss'],

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
export class SharesMasterComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};
  recovery: boolean = false;
  GuarantorTrue: boolean = false;
  //Title
  simpleOption: Array<IOption> = this.StatementTypeService.getCharacters();
  a: Array<IOption> = this.A1Service.getCharacters();
  b: Array<IOption> = this.A2Service.getCharacters();
  c: Array<IOption> = this.CatService.getCharacters();
  d: Array<IOption> = this.City1Service.getCharacters();
  e: Array<IOption> = this.City2Service.getCharacters();
  f: Array<IOption> = this.Sal1Service.getCharacters();

  g: Array<IOption> = this.Sal2Service.getCharacters();
  h: Array<IOption> = this.City3Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  //Member-type
  simpleOption1: Array<IOption> = this.MemberTypeService.getCharacters();
  selectedOption1 = '3';
  isDisabled1 = true;
  characters1: Array<IOption>;
  selectedCharacter1 = '3';
  timeLeft1 = 5;
  private dataSub1: Subscription = null;
  //Sign-type
  simpleOption2: Array<IOption> = this.SignTypeService.getCharacters();
  selectedOption2 = '3';
  isDisabled2 = true;
  characters2: Array<IOption>;
  selectedCharacter2 = '3';
  timeLeft2 = 5;
  private dataSub2: Subscription = null;
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(public City3Service: City3Service, public Sal2Service: Sal2Service, public Sal1Service: Sal1Service, public City2Service: City2Service, public City1Service: City1Service, public CatService: CatService, public A2Service: A2Service, public A1Service: A1Service, public StatementTypeService: StatementTypeService, public MemberTypeService: MemberTypeService, public SignTypeService: SignTypeService, private fb: FormBuilder) { this.createForm(); }
  message = {
    title: "",
    scheme: "",
    Member_no: "",
    Customer_id: "",
    Customer_name: "",
    Category: "",
    Employee_no: "",
    recovery: "",
    relation: "",
    birthDate: "",
    JoiningDate: "",
    City: "",
    RepresentBy: "",
    House: "",
    Ward: "",
    Detail: "",
    Galli: "",
    Area: "",
    PinCode: "",
    TempGalli: "",
    TempCity: "",
    RetirementDate: "",
    Age: "",
    Signtype: "",
    MembershipType: "",
    TempHouse: "",
    TempWard: "",
    TempDetail: "",
    TempArea: "",
    TempPinCode: "",
    TelePh: "",
    R: "",
    TotalRecords: "",
    customer_email: "",
    Customer_mobile: "",
    OpenDate: "",
    ExpiryDate: "",
    DeathDate: "",
    Customer_Cast: "",
    Customer_Occupation: "",
    Customer_Director: "",
    Sub_Sal_Div: "",
    Customer_Bank_AC: "",
    ResoNo: "",
    Installment: "",
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/customer.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Scheme',
          data: 'Member_scheme'
        }, {
          title: 'Member No',
          data: 'Member_no'
        }, {
          title: 'Customer ID',
          data: 'Customer_id'
        }, {
          title: 'Title',
          data: 'title'
        }, {
          title: 'Name',
          data: 'Customer_name'
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

    this.dtExportButtonOptions2 = {
      ajax: 'fake-data/documents.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Code',
          data: 'Code'
        }, {
          title: 'Description',
          data: 'Description'
        }, {
          title: 'IsAccepted',
          data: 'IsAccepted'
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
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/customer.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'Customer_name'
        }, {
          title: 'Relation',
          data: 'relation'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Nomination Date',
          data: 'birthDate'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'City',
          data: 'Customer_city'
        }, {
          title: 'Pin Code',
          data: 'Customer_pin_code'
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
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.A1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.A2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.CatService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.City1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.City2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Sal1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.dataSub = this.Sal2Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.City3Service.loadCharacters().subscribe((options) => {
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

      scheme: ['', [Validators.required]],
      Member_no: [''],
      Customer_id: ['', [Validators.pattern]],
      title: ['', [Validators.required]],
      Customer_name: ['', [Validators.pattern]],

      Category: ['', [Validators.required]],
      Employee_no: ['', [Validators.pattern]],
      birthDate: [''],
      JoiningDate: [''],
      RetirementDate: [''],
      Age: ['', [Validators.pattern]],
      Signtype: ['', [Validators.required]],
      RepresentBy: ['', [Validators.pattern]],
      MembershipType: ['', [Validators.required]],
      House: ['', [Validators.pattern]],
      Ward: ['', [Validators.pattern]],
      Galli: ['', [Validators.pattern]],
      Detail: ['', [Validators.pattern]],
      City: [''],
      Area: ['', [Validators.pattern]],
      PinCode: ['', [Validators.pattern]],
      TempHouse: ['', [Validators.pattern]],
      TempWard: ['', [Validators.pattern]],
      TempGalli: ['', [Validators.pattern]],
      TempDetail: ['', [Validators.pattern]],
      TempCity: ['', [Validators.pattern]],
      TempArea: ['', [Validators.pattern]],
      TempPinCode: ['', [Validators.pattern]],
      TelePh: ['', [Validators.pattern]],
      R: ['', [Validators.pattern]],
      TotalRecords: ['', [Validators.pattern]],
      customer_email: ['', [Validators.pattern]],
      Customer_mobile: ['', [Validators.pattern]],
      OpenDate: ['', [Validators.required]],
      ExpiryDate: [''],
      DeathDate: [''],
      cast: ['', [Validators.required]],
      Customer_Occupation: ['', [Validators.required]],
      Customer_Director: ['', [Validators.required]],
      Sub_Sal_Div: [''],
      Sal_Div: [''],
      Customer_Bank_AC: ['', [Validators.pattern]],
      ResoNo: ['', [Validators.pattern, Validators.required]],
      ResolDate:['',[Validators.required]],
      Installment: ['', [Validators.pattern]],
      ManualReferanceMember: ['', [Validators.pattern]],
      Reason_Remarks: ['', [Validators.pattern]],
      Customer_Branch: ['', [Validators.required]],
      NomiName:['',[Validators.pattern,Validators.required]],
      Relation: ['', [Validators.pattern, Validators.required]],
      NominationDate: ['', [Validators.required]],
      Nomi_age: [''],
      Nomi_Address: ['', [Validators.pattern]],
      Nomi_Address1: ['', [Validators.pattern]],
      Nomi_Address2: ['', [Validators.pattern]],
      City1: ['', [Validators.required]],
      Customer_pin_code1: ['', [Validators.pattern]],
      SharesUpToDate:[''],
      TotalShares:['',[Validators.pattern]],
      FaceValue:['',[Validators.pattern]],
      TotalAmount:['',[Validators.pattern]],
      MarathiName:['',[Validators.pattern]],
      MarathiWard:['',[Validators.pattern]],
      Marathiaddress:['',[Validators.pattern]],
      MarathiGalli:['',[Validators.pattern]],
      MarathiArea:['',[Validators.pattern]],
      MarathiCity:[''],

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
      this.GuarantorTrue = true;
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    this.message.Member_no = info.Member_no;
    this.message.Customer_id = info.Customer_id;
    this.message.Customer_name = info.Customer_name;
    this.message.recovery = info.recovery;
    this.message.title = info.title;
    this.message.relation = info.relation;
    this.message.birthDate = info.birthDate;
    this.message.Age = info.Age;
    this.showButton = false;
    this.updateShow = true;

    if (this.message.recovery == "Yes") {
      this.recovery = true;   //return boolean value and display checked checkbox
    }
    else {
      this.recovery = false;   //return boolean value and display unchecked checkbox
    }
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  
  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.scheme = info.scheme;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Member scheme." + this.message.scheme + "  data",
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