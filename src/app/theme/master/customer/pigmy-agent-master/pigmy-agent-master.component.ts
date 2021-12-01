
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

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

import { PigmyAgentMasterService } from './pigmy-agent-master.service';
// for dropdown
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';

import Swal from 'sweetalert2';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { id } from '@swimlane/ngx-datatable';
import { first } from 'rxjs/operators';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { environment } from 'src/environments/environment';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface PigmyAgentMaster {

  AC_TYPE: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_OPDATE: string;
  PIGMY_ACTYPE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
}
interface Nominee {
  //nominee controls (NOMINEELINK table)
  AC_NNAME: string
  AC_NRELA: string
  AC_NDATE: Date
  AGE: number
  AC_NHONO: String
  AC_NWARD: string
  AC_NADDR: string
  AC_NGALLI: string
  AC_NAREA: string
  AC_NCTCODE: string
  AC_NPIN: number

}

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

export class PigmyAgentMasterComponent implements OnInit, AfterViewInit, OnDestroy {

  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // For reloading angular datatable after CRUD operation
  @ViewChild('modalLarge') modalLarge: ElementRef;

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}
  newbtnShow: boolean = false;
  //Nominee variables
  multiNominee = [];
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  //temp address flag variable
  tempAddress: boolean = true;
  nomineeupdateid
  nomineeID
  recovery: boolean = false;
  nomineeTrue: boolean = false;
  //title select variables
  nomineeIndex: number

  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  pigmyAgentMaster: PigmyAgentMaster[];
  nominee: Nominee[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //Scheme type variable
  schemeType: string = 'AG'

  //variable to get ID to update
  updateID: number = 0;
  page: number = 1;
  //filter variable
  filterData = {};
  counter = 1;
  obj: any;
  rowData = [];
  //dropdown\
  Cust_ID: any[]

  CastMasterDropdown: any[];
  OwnbranchMasterDropdown: any[];
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  cityMasterServiceDropdown: any[];
  SchemeCodeDropdownDropdown: any[];
  //for modal
  showModalStatus: boolean = false;
  showDialog = false;
  @Input() visible: boolean;
  public config: any;

  //Select option for title
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  scheme: Array<IOption> = this.schemeCodeService.getCharacters();
  // CustomerID: Array<IOption> = this.customerIdService.getCharacters();
  Cast: Array<IOption> = this.castService.getCharacters();
  PimgyScheme: Array<IOption> = this.schemeTypeService.getCharacters();
  City_Code: Array<IOption> = this.cityCodeService.getCharacters();
  IScheme: Array<IOption> = this.schemeCodeService.getCharacters();
  branch: Array<IOption> = this.branchService.getCharacters();
  ncity: Array<IOption> = this.cityCodeService.getCharacters();
  selectedOption = '3';

  // isDisabled = true;

  //temp address flag variable

  id: string = '';
  NomineeTrue: boolean = false;

  //object created to get data when row is clicked

  constructor(public TitleService: TitleService,
    private customerID: CustomerIDMasterDropdownService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    public PigmyAgentMasterService: PigmyAgentMasterService,
    public CastMasterService: CastMasterService,
    public OwnbranchMasterService: OwnbranchMasterService,
    public cityMasterService: cityMasterService,
    public schemeCodeService: SchemeCodeService,
    public customerIdService: CustomerIdService,
    public cityCodeService: CitycodeService,
    public schemeTypeService: SchemeTypeService,
    public branchService: BranchService,
    public castService: CastService,
    private http: HttpClient,
    private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.columns.forEach(element => {
          if (element.search.value != '') {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-agent-master',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyAgentMaster = resp.data;
            console.log('fetch', resp.data)
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Type',
          data: 'AC_ACNOTYPE'
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'AgentNo',
          data: 'AC_NO'
        },
        {
          title: 'CustomerID',
          data: 'AC_CUSTID'
        },

        {
          title: 'Appontied On',
          data: 'AC_OPDATE'
        },

        {
          title: 'Pimgy Scheme',
          data: 'PIGMY_ACTYPE'
        },

        {
          title: 'Branch',
          data: 'AC_INTROBRANCH'
        },
        {
          title: 'Scheme',
          data: 'AC_INTROID'
        },
        {
          title: 'A/c Code',
          data: 'AC_INTRACNO'
        },
        {
          title: 'Name',
          data: 'AC_INTRNAME'
        }
      ],
      dom: 'Blrtip',



    };

    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {

      this.CastMasterDropdown = data;
    })
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {

      this.SchemeCodeDropdownDropdown = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {

      this.cityMasterServiceDropdown = data;
    })
    // this.dtnomineeOptions = {
    //   ajax: 'fake-data/nominee.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //       data: 'Name',
    //       title: 'Code'
    //     },
    //     {
    //       data: 'Relation',
    //       title: 'Relation'
    //     },
    //     {
    //       data: 'Age',
    //       title: 'Age'
    //     },
    //     {
    //       data: 'NominationDate',
    //       title: 'Nomination Date'
    //     },
    //     {
    //       data: 'Address1',
    //       title: 'Address1'
    //     },
    //     {
    //       data: 'Address2',
    //       title: 'Address2'
    //     },
    //     {
    //       data: 'Address3',
    //       title: 'Address3'
    //     },
    //     {
    //       data: 'City',
    //       title: 'City'
    //     },
    //     {
    //       data: 'Pin',
    //       title: 'Pin'
    //     },
    //   ],
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ],

    //   //row click handler code
    //   rowCallback: (row: Node, data: any[] | Object, index: number) => {
    //     const self = this;
    //     $('td', row).off('click');
    //     $('td', row).on('click', '#editbtn', () => {
    //       self.editClickHandler(data);
    //     });
    //     $('td', row).on('click', '#delbtn', () => {
    //       self.delClickHandler(data);
    //     });
    //     return row;
    //   }
    // };
    this.runTimer();
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
    this.runTimer();
    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }
  //show customer modal
  showModal() {
    debugger
    this.showModalStatus = true;
  }

  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }

  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
  }



  getCustomer(id) {
    console.log('in getcustomer', id)
    this.customerIdService.getFormData(id).subscribe(data => {
      console.log('get customer data', data)
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_MEM_BIRTH_DT: data.AC_BIRTH_DT,
        AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        AC_THONO: data.custAddress.AC_THONO,
        AC_TWARD: data.custAddress.AC_TWARD,
        AC_TADDR: data.custAddress.AC_TADDR,
        AC_TGALLI: data.custAddress.AC_TGALLI,
        AC_TAREA: data.custAddress.AC_TAREA,
        AC_TCTCODE: data.custAddress.AC_TCTCODE,
        AC_TPIN: data.custAddress.AC_TPIN,
      })
    })
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
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['',],
      AC_ACNOTYPE: ['AG'],
      AC_CUSTID: ['', [Validators.required]],
      AC_TITLE: ['', [Validators.required]],
      AC_NAME: ['', [Validators.pattern, Validators.required]],
      AC_CAST: ['',],
      AC_OPDATE: ['', [Validators.required]],
      PIGMY_ACTYPE: ['', [Validators.required]],
      AC_HONO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: ['', [Validators.pattern]],
      AC_PIN: ['', [Validators.pattern]],
      AC_ADDR: ['', [Validators.pattern]],
      AC_PHONE_RES: ['', [Validators.pattern]],
      AC_PHONE_OFFICE: ['', [Validators.pattern]],
      AC_MOBILENO: ['', [Validators.pattern]],
      AC_INTRACNO: ['', [Validators.pattern]],
      AC_CTCODE: [''],

      AC_INTROBRANCH: [''],
      AC_INTROID: [''],
      AC_INTRNAME: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: ['',],
      AGE: ['', [Validators.pattern]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['', [Validators.pattern]],
      AC_NPIN: ['', [Validators.pattern]],

    });
  }


  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_OPDATE': formVal.AC_OPDATE,
      'PIGMY_ACTYPE': formVal.PIGMY_ACTYPE,
      'AC_INTRACNO': formVal.AC_INTRACNO,
      'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
      'AC_INTROID': formVal.AC_INTROID,
      'AC_INTRNAME': formVal.AC_INTRNAME,
      'NomineeData': this.multiNominee
    }
    console.log(dataToSend);
    this.PigmyAgentMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });

    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
    this.multiNominee = []
  }


  // Reset Function
  resetForm() {
    this.createForm();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }


  //Method for append data into fields
  editClickHandler(id) {

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.PigmyAgentMasterService.getFormData(id).subscribe(data => {
      console.log('edit', data)
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails

      this.angForm.patchValue({

        AC_TYPE: data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_ACNOTYPE': data.AC_ACNOTYPE,

        'AC_OPDATE': data.AC_OPDATE,
        PIGMY_ACTYPE: data.PIGMY_ACTYPE,
        AC_INTRACNO: data.AC_INTRACNO,
        AC_INTROBRANCH: data.AC_INTROBRANCH,
        AC_INTROID: data.AC_INTROID,
        'AC_INTRNAME': data.AC_INTRNAME,

        //nominee controls (NOMINEELINK table)
        'AC_NNAME': data.AC_NNAME,
        'AC_NRELA': data.AC_NRELA,
        'AC_NDATE': data.AC_NDATE,
        'AGE': data.AGE,
        'ADDR1': data.ADDR1,
        'ADDR2': data.ADDR2,
        'ADDR3': data.ADDR3,
        'CTCODE': data.CTCODE,
        'PIN': data.PIN,
      })
    })
  }


  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['NomineeData'] = this.multiNominee
    data['id'] = this.updateID;
    this.PigmyAgentMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
      this.resetForm();
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Pigmy agent master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.PigmyAgentMasterService.deleteData(id).subscribe(data1 => {
          this.pigmyAgentMaster = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
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




  addNominee() {
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: formVal.AC_NDATE,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
    }
    this.multiNominee.push(object);
    this.resetNominee()

  }

  editNominee(id) {
    this.nomineeIndex = id
    this.nomineeID = this.multiNominee[id].id;
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    this.angForm.patchValue({
      AC_NNAME: this.multiNominee[id].AC_NNAME,
      AC_NRELA: this.multiNominee[id].AC_NRELA,
      AC_NDATE: this.multiNominee[id].AC_NDATE,
      AGE: this.multiNominee[id].AGE,
      AC_NHONO: this.multiNominee[id].AC_NHONO,
      AC_NWARD: this.multiNominee[id].AC_NWARD,
      AC_NADDR: this.multiNominee[id].AC_NADDR,
      AC_NGALLI: this.multiNominee[id].AC_NGALLI,
      AC_NAREA: this.multiNominee[id].AC_NAREA,
      AC_NCTCODE: this.multiNominee[id].AC_NCTCODE,
      AC_NPIN: this.multiNominee[id].AC_NPIN,
    })
  }

  updateNominee() {
    let index = this.nomineeIndex;
    console.log('update nominee', index)
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: formVal.AC_NDATE,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
      id: this.nomineeID
    }
    this.multiNominee[index] = object;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    this.resetNominee()

  }

  delNominee(id) {
    this.multiNominee.splice(id, 1)
  }

  resetNominee() {
    this.angForm.controls['AC_NNAME'].reset();
    this.angForm.controls['AC_NRELA'].reset();
    this.angForm.controls['AC_NDATE'].reset();
    this.angForm.controls['AGE'].reset();
    this.angForm.controls['AC_NHONO'].reset();
    this.angForm.controls['AC_NWARD'].reset();
    this.angForm.controls['AC_NADDR'].reset();
    this.angForm.controls['AC_NGALLI'].reset();
    this.angForm.controls['AC_NAREA'].reset();
    this.angForm.controls['AC_NCTCODE'].reset();
    this.angForm.controls['AC_NPIN'].reset();
  }
}