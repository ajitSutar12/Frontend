
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { PigmyAgentMasterService } from './pigmy-agent-master.service';
// for dropdown
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API 
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { environment } from 'src/environments/environment';
//date pipe
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';

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
  AC_ACNOTYPE: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_OPDATE: string;
  AC_NAME: string;
  PIGMY_ACTYPE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
  SIGNATURE_AUTHORITY: string;
  AC_NNAME: string;
  AC_NRELA: string;
  AC_NDATE: string;
  AGE: number;
  AC_ADDFLAG: boolean;
  AC_NHONO: string;
  AC_NWARD: string;
  AC_NADDR: string;
  AC_NGALLI: string;
  AC_NAREA: string;
  AC_NCTCODE: string;
  AC_NPIN: number;
  BANKACNO: number
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
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // For reloading angular datatable after CRUD operation
  @ViewChild('modalLarge') modalLarge: ElementRef;
  //Scheme type variable
  schemeType: string = 'AG'
  pgScheme: string = 'PG'
  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
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
  introducerACNo //account no for introducer
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  pigmyAgentMaster: PigmyAgentMaster[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  maxDate: any;
  minDate: Date;
  //variable to get ID to update
  updateID: number = 0;
  page: number = 1;
  //filter variable
  filterData = {};
  counter = 1;
  obj: any;
  rowData = [];
  //dropdown
  Cust_ID: any[]
  logDate
  schemeCode
  CastMasterDropdown: any[];
  OwnbranchMasterDropdown: any[];
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  cityMasterServiceDropdown: any[];
  SchemeCodeDropdownDropdown: any[];
  PGSchemeCode: any[] = [];
  //for modal
  showModalStatus: boolean = false;
  showDialog = false;
  @Input() visible: boolean;
  public config: any;
  public visible1 = false;
  public visibleAnimate = false;
  selectedOption = '3';

  // id: string = '';
  NomineeTrue: boolean = false;
  datemax: string;

  AC_TYPE: boolean = false
  code: any = null
  id: any = null
  ngPigmy: any = null
  ngBranch: any = null
  acno: any = null
  ngIntroducer: any = null
  ngNcity: any = null
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false
  constructor(
    private customerID: CustomerIDMasterDropdownService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    public PigmyAgentMasterService: PigmyAgentMasterService,
    public CastMasterService: CastMasterService,
    public OwnbranchMasterService: OwnbranchMasterService,
    public cityMasterService: cityMasterService,
    private datePipe: DatePipe,
    public customerIdService: CustomerIdService,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,
    private fb: FormBuilder,
    private translate:TranslateService
    ) {
  
      this.translate.setDefaultLang(environment.setLang);
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage, 1);
    }
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.logDate = data.CURRENT_DATE
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-agent-master',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyAgentMaster = resp.data;
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
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.Customer.Scheme'),
          data: 'AC_TYPE'
        },
        {
          title: this.translate.instant('master.Pigmy_Agent.Agent_No'),
          data: 'BANKACNO'
        },
        {
          title: this.translate.instant('master.Customer.Cust_Id'),
          data: 'AC_CUSTID'
        },
        {
          title: this.translate.instant('master.Customer.Member_Name'),
          data: 'AC_NAME'
        },
        {
          title: this.translate.instant('master.Pigmy_Agent.Pigmi_Scheme'),
          data: 'PIGMY_ACTYPE'
        },
        {
          title: this.translate.instant('master.Customer.Appointed'),
          data: 'AC_OPDATE'
        },
      ],
      dom: 'Blrtip',

    };

    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {

      this.CastMasterDropdown = data;
    })
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      this.SchemeCodeDropdownDropdown = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'AG');
      });
      this.scheme = filtered;

      this.code = this.scheme[0].value
    })
    this.schemeCodeDropdownService.getSchemeCodeList('TD').pipe(first()).subscribe(data2 => {
      var filtered = data2.filter(function (scheme) {
        return (scheme.IS_RECURRING_TYPE == '1');
      });
      this.PGSchemeCode = this.PGSchemeCode?.concat(filtered);
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.pgScheme).pipe(first()).subscribe(data1 => {
      var filtered = data1.filter(function (scheme) {
        return (scheme.id == 'PG');
      });
      this.PGSchemeCode = this.PGSchemeCode?.concat(filtered);
    })
    // this.schemeCodeDropdownService.getSchemeCodeList('TD').pipe(first()).subscribe(data2 => {

    //   var filtered = data2.filter(function (scheme) {

    //     return (scheme.IS_RECURRING_TYPE == '1');
    //   });
    //   this.PGSchemeCode = this.PGSchemeCode.concat(filtered);
    // })

    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {
      this.cityMasterServiceDropdown = data;
    })
    this.runTimer();
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })

  }
  openingDate: any
  tempopendate: any
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.openingDate = data.CURRENT_DATE
      this.tempopendate = data.CURRENT_DATE

      if (data.ON_LINE === '1') {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
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
    this.getSystemParaDate() //function to set date
    this.customerIdService.getFormData(id).subscribe(data => {
      this.id = data.id
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.angForm.patchValue({
        // AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_PANNO: data.AC_PANNO,
      })
      let permadd
      let temp
      data.custAddress.forEach(async (element) => {
        if (element.AC_ADDTYPE == 'P') {
          permadd = element
        }
      })
      this.angForm.patchValue({
        AC_ADDFLAG: permadd?.AC_ADDFLAG,
        AC_HONO: permadd?.AC_HONO,
        AC_WARD: permadd?.AC_WARD,
        AC_ADDR: permadd?.AC_ADDR,
        AC_GALLI: permadd?.AC_GALLI,
        AC_AREA: permadd?.AC_AREA,
        AC_CTCODE: permadd?.city?.CITY_NAME,
        AC_PIN: permadd?.AC_PIN,
      })
    })
    this.onCloseModal();
  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible1 = false, 300);
  }
  OpenLink(val) {
    if (val == 1) {
      this.NomineeTrue = true;
    }
  }

  createForm() {
    // debugger
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_ACNOTYPE: ['AG'],
      AC_NO: ['',],
      AC_CUSTID: ['', [Validators.required]],
      AC_TITLE: [''],
      AC_NAME: ['', [Validators.pattern]],
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
      // AC_INTRACNO: ['', [Validators.pattern]],
      BANKACNO: [''],
      AC_CTCODE: [''],
      AC_INTROBRANCH: ['', []],
      AC_INTROID: [''],
      AC_INTRACNO: [''],
      AC_INTRNAME: ['', [Validators.pattern]],
      SIGNATURE_AUTHORITY: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: ['',],
      AGE: ['', [Validators.pattern, Validators.min(1), Validators.max(100)]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['', [Validators.pattern]],
      AC_NPIN: ['', [Validators.pattern]],

    });
    let sysdate = new Date()
    let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd")
    this.angForm.patchValue({
      'AC_NDATE': sysDate,
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['AC_INTROBRANCH'].enable()
      this.ngBranch = result.branch.id

    }
    else {
      this.angForm.controls['AC_INTROBRANCH'].disable()
      this.angForm.patchValue({
        'AC_INTROBRANCH': result.branch.id
      })
      this.ngBranch = result.branch.id

    }
  }
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.acno, this.ngBranch]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;
    }
  }

  //get introducer name according account no
  getIntroducerName(value: any) {
    this.angForm.patchValue({
      AC_INTRNAME: value.name
    })
  }

  getScheme(value) {
    this.schemeCode = value.name
  }

  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    let opdate
    let temdate

    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      let schecode
      if (this.tempopendate != this.openingDate) {
        temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY')
      } else {
        temdate = this.openingDate
      }
      this.scheme.forEach(async (element) => {
        if (element.value == this.code) {
          schecode = element.name
        }
      })
      //get bank code and branch code from session
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      let bankCode = Number(result.branch.syspara.BANK_CODE)
      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_NAME': formVal.AC_NAME,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_OPDATE': this.openingDate,
        'PIGMY_ACTYPE': formVal.PIGMY_ACTYPE,
        'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
        'AC_INTROID': formVal.AC_INTROID,
        'AC_INTRACNO': formVal.AC_INTRACNO,
        'AC_INTRNAME': formVal.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': formVal.SIGNATURE_AUTHORITY,
        'NomineeData': this.multiNominee
      }
      this.PigmyAgentMasterService.postData(dataToSend).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully!',
          html:
            '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
        })
        this.formSubmitted = false;
        // to reload after insertion of data
        this.switchNgBTab('Details')
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
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  // Reset Function
  resetForm() {
    this.code = null
    this.id = null
    // this.ngBranch = null
    this.acno = null
    this.ngIntroducer = null
    this.openingDate = null
    this.ngPigmy = null
    this.ngNcity = null
    this.resetNominee();
    this.createForm();
    this.switchNgBTab('Details')


  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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
  updatecheckdata: any

  //Method for append data into fields
  editClickHandler(id, status) {
    this.angForm.controls['AC_TYPE'].disable()
    this.switchNgBTab('Details')
    this.PigmyAgentMasterService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      let opdate
      if (data.SYSCHNG_LOGIN != null && data.status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && status == 0) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.ngPigmy = Number(data.PIGMY_ACTYPE)
      // this.id =data.AC_CUSTID
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails
      if ((data.AC_INTROBRANCH != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.AC_INTROBRANCH != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {

        this.ngBranch = data.AC_INTROBRANCH,
          this.acno = Number(data.AC_INTROID),
          this.obj = [this.acno, this.ngBranch]

        this.SchemeCodeDropdownDropdown.forEach(async (element) => {
          if (element.value == this.acno) {
            this.getschemename = element.name
          }
        })
        switch (this.getschemename) {
          case 'SB':
            this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'SH':
            this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'CA':
            this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'LN':
            this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'DS':
            this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'CC':
            this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'GS':
            this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'AG':
            this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;

          case 'IV':
            this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
              this.introducerACNo = data;

            })
            break;
        }
        this.ngIntroducer = Number(data.AC_INTRACNO)

      } else {
        this.code = null
        this.acno = null
        this.obj = null
      }

      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_NO': data.AC_NO,
        'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
        'BANKACNO': data.BANKACNO,
        'AC_INTRNAME': data.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
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

  age() {
    if (this.angForm.controls['AGE'].value > 100) {
      Swal.fire(
        'Cancelled',
        'Please Input Proper Age',
        'error'
      );
      this.angForm.controls['AGE'].reset()
    }

  }

  //Method for update data 
  updateData() {
    let opdate
    this.angForm.controls['AC_TYPE'].enable()
    let data = this.angForm.value;
    data['NomineeData'] = this.multiNominee
    data['id'] = this.updateID;
    if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
      (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = this.openingDate
    }
    data['PIGMY_ACTYPE'] = this.ngPigmy

    this.PigmyAgentMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.switchNgBTab('Details')
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
      this.resetForm();
    })
  }

  addNewData() {
    this.angForm.controls['AC_TYPE'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.code = null
    this.resetForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Share master data.",
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
  disableForm(id) {
    this.editClickHandler(id, 0)
  }
  NbirthDate: any
  cityName: boolean = false
  ngnomineedate: any
  //Nominee
  addNominee() {
    const formVal = this.angForm.value;
    let date1 = moment(formVal.AC_NDATE).format('DD/MM/YYYY');
    this.cityName = true
    this.NbirthDate = date1;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: this.NbirthDate,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
    }
    if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
      Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
    }
    else if (formVal.AC_NNAME != "") {
      if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {

        Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
      } else if (formVal.AC_NRELA != "") {

        if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {

          Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        } else if (formVal.AC_NCTCODE != "") {

          if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {

            Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
          } else {

            if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {

              Swal.fire('', 'This Nominee is Already Exists!', 'error');

            } else {

              object['AC_NCTCODE'] = formVal.AC_NCTCODE.id,
                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
              this.multiNominee.push(object);
            }
          }
        }
      }
      else {
        object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
        object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
        this.multiNominee.push(object);
      }
    }
    else {
      object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
      object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
      this.multiNominee.push(object);
    }
    this.resetNominee()
  }
  nomineedataedit: any
  editNominee(id) {
    this.nomineeIndex = id
    this.nomineeID = this.multiNominee[id].id;
    this.nomineedataedit = this.multiNominee[id]
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    this.ngnomineedate = this.multiNominee[id].AC_NDATE
    this.ngNcity = this.multiNominee[id].AC_CITYNAME,
      this.angForm.patchValue({
        AC_NNAME: this.multiNominee[id].AC_NNAME,
        AC_NRELA: this.multiNominee[id].AC_NRELA,
        AGE: this.multiNominee[id].AGE,
        AC_NHONO: this.multiNominee[id].AC_NHONO,
        AC_NWARD: this.multiNominee[id].AC_NWARD,
        AC_NADDR: this.multiNominee[id].AC_NADDR,
        AC_NGALLI: this.multiNominee[id].AC_NGALLI,
        AC_NAREA: this.multiNominee[id].AC_NAREA,
        AC_NPIN: this.multiNominee[id].AC_NPIN,
      })
  }

  updateNominee() {
    let index = this.nomineeIndex;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    let date1
    const formVal = this.angForm.value;
    if (this.nomineedataedit.AC_NDATE != formVal.AC_NDATE) {
      date1 = moment(formVal.AC_NDATE).format('DD/MM/YYYY');
    } else {
      date1 = formVal.AC_NDATE
    }

    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: date1,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE.id,
      AC_NPIN: formVal.AC_NPIN,
      AC_CITYNAME: formVal.AC_NCTCODE.CITY_NAME,
      id: this.nomineeID
    }
    if (typeof (formVal.AC_NCTCODE) == 'string') {
      object['AC_CITYNAME'] = formVal.AC_NCTCODE
    }
    else {
      object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
    }
    if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
      Swal.fire("Please Insert Mandatory Record For Nominee");
    }
    else if (formVal.AC_NNAME != "") {
      if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
        Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
      } else if (formVal.AC_NRELA != "") {
        if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
          Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        } else if (formVal.AC_NCTCODE != "") {
          if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
            Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
          }
          else {
            this.multiNominee[index] = object;
          }
        }
      }
      else {
        this.multiNominee[index] = object;
      }

    }
    else {
      this.multiNominee[index] = object;
    }
    this.resetNominee()
  }

  de

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
    this.ngNcity = null
    this.ngnomineedate = null
  }



  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  nominee($event) {
    if ($event.target.checked) {
      this.nomineeTrue = true
    } else {
      this.nomineeTrue = false
    }
  }
  @ViewChild('ctdTabset') ctdTabset;
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.PigmyAgentMasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Pigmy Agent Account approved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.PigmyAgentMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Pigmy Agent Account rejected successfully',
        'success'
      );

      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.PigmyAgentMasterService.unapporve(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
}