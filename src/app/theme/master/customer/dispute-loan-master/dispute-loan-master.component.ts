import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
//animation
import { animate, style, transition, trigger } from '@angular/animations';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import { RepayModeService } from '../../../../shared/elements/repay-mode.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';

// dynamic dropdown
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { TermLoanMasterDropdownService } from '../../../../shared/dropdownService/term-loan-master-dropdown.service';
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { OccupationMasterService } from '../../../../shared/dropdownService/occupation-master-dropdown.service';
import { HealthMasterDropdownService } from '../../../../shared/dropdownService/health-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { AuthorityMasterDropdownService } from '../../../../shared/dropdownService/authority-master-dropdown.service'
import { PrioritySectorMasterDropdownService } from '../../../../shared/dropdownService/priority-sector-master-dropdown.service';
import { PurposeMasterDropdownService } from '../../../../shared/dropdownService/purpose-master-dropdown.service';
import { IndustryMasterDropdownService } from '../../../../shared/dropdownService/industry-master-dropdown.service';
import { WeakerMasterDropdownService } from '../../../../shared/dropdownService/weaker-master-dropdown.service';
import { AdvocateMasterDropdownService } from '../../../../shared/dropdownService/advocate-master-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service';
import { LoanStageMasterDropdownService } from '../../../../shared/dropdownService/loan-stage-master-dropdown.service'
import { CourtMasterDropdownService } from '../../../../shared/dropdownService/court-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';

import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';

// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { DisputeLoanMasterService } from './dispute-loan-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { CustomerIdService } from "../customer-id/customer-id.service";
import { TermLoanService } from '../term-loan-master/term-loan-master.service'
import { environment } from 'src/environments/environment';



// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DisputeLoanMaster {
id:number;
AC_ACNOTYPE:string

//main
AC_TYPE:string
AC_NO:number
REF_AC_TYPE:string
REF_AC_NO:number
AC_CUSTID:string
AC_NAME:string


// basic
AC_OPDATE:string
AC_MEMBTYPE:string     
AC_MEMBNO:string
AC_CAST:string
AC_OCODE:string
AC_INTCATA:string
AC_HEALTH:string
AC_REPAYMODE:string
AC_SANCTION_AMOUNT:string
AC_SANCTION_DATE:string
AC_DRAWPOWER_AMT:string
AC_INSTALLMENT:string
AC_MONTHS:string
AC_MORATORIUM_PERIOD:string
AC_GRACE_PERIOD:string
AC_EXPIRE_DATE:string
AC_INTRATE:string
AC_PENALINTRATE:string
EFFECT_DATE:string


// other details
AC_AUTHORITY:string
AC_RECOMMEND_BY:string
AC_PRIORITY:string
AC_PURPOSE:string
AC_INDUSTRY:string
AC_WEAKER:string
AC_RELATION_TYPE:string
AC_DIRECTOR:string
AC_DIRECTOR_RELATION:string
AC_COREG_NO:string
AC_COREG_DATE:string
AC_COREG_AMT:string
AC_RESO_NO:string
AC_RESO_DATE:string

// address
AC_HONO:string
AC_WARD:string
AC_ADDR:string
AC_GALLI:string
AC_AREA:string
AC_CTCODE:string
AC_PIN:string
AC_ADDFLAG:boolean
AC_THONO:string
AC_TWARD:string
AC_TADDR:string
AC_TGALLI:string
AC_TAREA:string
AC_TCTCODE:string
AC_TPIN:string
AC_MOBILENO:string
AC_PHONE_RES:string
AC_PHONE_OFFICE:string


// securities
SECURITY_CODE:string
SECURITY_VALUE:string
AC_REMARK:string

// Guarantor
GAC_CUSTID:string
GAC_MEMBNO:string
GAC_MEMBTYPE:string
GAC_NAME:string
EXP_DATE:string
GAC_HONO:string
GAC_WARD:string
GAC_ADDR:string
GAC_GALLI:string
GAC_AREA:string
GAC_CTCODE:string
GAC_PIN:string

// Dispute Details
CASE_SUITE_DATE:string
COURT_INT_RATE:string
COURT_INSTALLMENT:string
COURT_ORDER_DATE:string
SUITE_AMT:string
COURT_RESULT_DATE:string
BRANCH_CODE:string
RECOVERABLE_AMT:string
INT_CALC_DATE:string
RECOVERABLE_INT:string
COURT_CASE_NO:string
REF_OLD_AC_TYPE:string
REF_OLD_AC_NO:string
ADVOCATE:string
LOAN_STAGE:string
COURT:string
D_AC_REMARK:string

// document

}



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
export class DisputeLoanMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  // newCustomerID = [];
  newCustomerID;
  Cust_ID: any;


  basicTab;
  otherTab;

  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  disputelonemaster: DisputeLoanMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {}; //Datatable variable for main form
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  //Scheme type variable
  schemeType: string = 'DS'

  securitiesOptions: any = {};     //Datatable variable for securities tab
  guarantorOptions: any = {};      //Datatable variable for gurantor tab
  dtdocumentOptions: any = {}; //Datatable variable for document form

  // //Select option for title, repay mode
  statementOption: any;
  d: any;
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  simpleOption: Array<IOption> = this.RepayModeService.getCharacters();
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  installment: Array<IOption> = this.installmentMethodService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  // GuarantorTrue = false;
  memno: any[];
  castoption: any[];
  occupationoption: any[];
  intcategoryoption: any[];
  healthcodeoption: any[];
  scheme: any[];
  custid: any[];
  authorityoption: any[];
  priorityoption: any;
  pruposeoption: any[];
  industryoption: any[];
  weakeroption: any;
  directoroption: any;
  advocateoption: any[];
  loanstageoption: any;
  courtoption: any;
  dataSub: Subscription;
  city: any;
  multiCoBorrower: any[];
  multiGuarantor: any[];
  memno1: any[];

  constructor(
    private http: HttpClient,
    private DisputeLoanMasterService: DisputeLoanMasterService,
    public TitleService: TitleService,
    public RepayModeService: RepayModeService,
    private fb: FormBuilder,
    private CustomerIdService: CustomerIdService,
    private TermLoanService: TermLoanService,
    private TermLoanMasterDropdownService: TermLoanMasterDropdownService,
    private HealthMasterDropdownService: HealthMasterDropdownService,
    private IntrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private OccupationMasterService: OccupationMasterService,
    private CastMasterService: CastMasterService,
    private SchemeCodeDropdownService: SchemeCodeDropdownService,
    private CustomerIDMasterDropdownService: CustomerIDMasterDropdownService,
    private AuthorityMasterDropdownService: AuthorityMasterDropdownService,
    private PrioritySectorMasterDropdownService: PrioritySectorMasterDropdownService,
    private PurposeMasterDropdownService: PurposeMasterDropdownService,
    private IndustryMasterDropdownService: IndustryMasterDropdownService,
    private WeakerMasterDropdownService: WeakerMasterDropdownService,
    private AdvocateMasterDropdownService: AdvocateMasterDropdownService,
    private DirectorMasterDropdownService: DirectorMasterDropdownService,
    private LoanStageMasterDropdownService: LoanStageMasterDropdownService,
    private CourtMasterDropdownService: CourtMasterDropdownService,
    private repayModeService: RepayModeService,
    private installmentMethodService: InstallmentMethodService,
    private cityMaster: cityMasterService,
  ) { }

  //display code according choice

  // OpenLink(val) {
  //   if (val == 1) {
  //     this.GuarantorTrue = true;
  //   }
  // }

  ngOnInit(): void {

    this.createForm();
    // Fetching Server side data
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
            this.url + '/term-loan-master',
            // '/dispute-loan-master',
            dataTableParameters
          ).subscribe(resp => {
            this.disputelonemaster = resp.data;
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
          data: 'AC_TYPE',
          title: 'Scheme'
        },
        {
          data: 'AC_NO',
          title: 'Account No'
        },
        {
          data: 'REF_AC_TYPE',
          title: 'Transfer From Scheme'
        },

        {
          data: 'REF_AC_NO',
          title: 'Transfer From A/c No'
        },
        {
          data: 'AC_CUSTID',
          title: 'Customer ID'
        },
        {
          data: 'AC_NAME',
          title: 'Name'
        },
        {
          data: 'AC_OPDATE',
          title: 'Opening Date'
        },
        {
          data: 'AC_MEMBTYPE',
          title: 'Member Scheme '
        },
        {
          data: 'AC_MEMBNO',
          title: 'Member No '
        },
        {
          data: 'AC_CAST',
          title: 'Cast'
        },
        {
          data: 'AC_OCODE',
          title: 'Occupation'
        },
        {
          data: 'AC_INTCATA',
          title: 'Interest Category'
        },
        {
          data: 'AC_HEALTH',
          title: 'Health Code'
        },
        {
          data: 'AC_REPAYMODE',
          title: 'Repay Mode'
        },
        {
          data: 'AC_SANCTION_AMOUNT',
          title: 'Sanction Limit'
        },
        {
          data: 'AC_SANCTION_DATE',
          title: 'Sanction Date'
        },
        {
          data: 'AC_DRAWPOWER_AMT',
          title: 'Drawing Power'
        },
        {
          data: 'AC_INSTALLMENT',
          title: 'Installment Amount'
        },
        {
          data: 'AC_MONTHS',
          title: 'Period in Months'
        },
        {
          data: 'AC_MORATORIUM_PERIOD',
          title: 'Moratorium Period(Months)'
        },
        {
          data: 'AC_GRACE_PERIOD',
          title: 'Grace Period in Days'
        },
        {
          data: 'AC_EXPIRE_DATE',
          title: 'Expiry Date'
        },
        {
          data: 'AC_INTRATE',
          title: 'Normal Int. Rate'
        },
        {
          data: 'AC_PENALINTRATE',
          title: 'Penal Int. Rate'
        },
        {
          data: 'EFFECT_DATE',
          title: 'Effective Date'
        },
        {
          data: 'AC_AUTHORITY',
          title: 'Authority'
        },
        {
          data: 'AC_RECOMMEND_BY',
          title: 'Recommended By'
        },
        {
          data: 'AC_PRIORITY',
          title: 'Priority'
        },
        {
          data: 'AC_PURPOSE',
          title: 'Purpose'
        },
        {
          data: 'AC_INDUSTRY',
          title: 'Industry'
        },
        {
          data: 'AC_WEAKER',
          title: 'Weaker Section'
        },
        {
          data: 'AC_RELATION_TYPE',
          title: 'Account Type'
        },
        {
          data: 'AC_DIRECTOR',
          title: 'Director'
        },
        {
          data: 'AC_DIRECTOR_RELATION',
          title: 'Director Relation'
        },
        {
          data: 'AC_COREG_NO',
          title: 'No.'
        },
        {
          data: 'AC_COREG_DATE',
          title: 'Date'
        },
        {
          data: 'AC_COREG_AMT',
          title: 'Amount'
        },
        {
          data: 'AC_RESO_NO',
          title: 'No.'
        },
        {
          data: 'AC_RESO_DATE',
          title: 'Date'
        },
        {
          data: 'AC_HONO',
          title: 'House'
        },
        {
          data: 'AC_WARD',
          title: 'Ward'
        },
        {
          data: 'AC_ADDR',
          title: 'Detail'
        },
        {
          data: 'AC_GALLI',
          title: 'Galli'
        },
        {
          data:'AC_AREA',
          title:'area'
        },
        {
          data: 'AC_CTCODE',
          title: 'city'
        },
        {
          data: 'AC_PIN',
          title: 'PinCode'
        },
        {
          data: 'AC_ADDFLAG',
          title: 'flag'
        },
        {
          data: 'AC_THONO',
          title: 'house no'
        },
        {
          data: 'AC_TWARD',
          title: 'ward'
        },
        {
          data: 'AC_TADDR',
          title:'Details'
        },
        {
          data: 'AC_TGALLI',
          title: 'galli'
        },
        {
          data: 'AC_TAREA',
          title: 'area'
        },
        {
          data: 'AC_TCTCODE',
          title: 'City'
        },
        {
          data: 'AC_TPIN',
          title: 'pin no'
        },
        {
          data: 'AC_MOBILENO',
          title: 'Mob no'
        },
        {
          data: 'AC_PHONE_RES',
          title: 'Phone no'
        },
        {
          data: 'AC_PHONE_OFFICE',
          title: 'Office(Phn)'
        },
        {
          data: 'SECURITY_CODE',
          title: 'security code'
        },
        {
          data: 'SECURITY_VALUE',
          title: 'security value'
        },
        {
          data: 'AC_REMARK',
          title: 'Remark'
        },
        {
          data: 'GAC_CUSTID',
          title: 'Grarantor Customer ID'
        },
        {
          data: 'GAC_MEMBNO',
          title: 'Grarantor Member no'
        },

        {
          data: 'GAC_MEMBTYPE',
          title: 'Grarantor member scheme'
        },

        {
          data: 'GAC_NAME',
          title: 'Grarantor name'
        },
        {
          data: 'EXP_DATE',
          title: 'expiry date'
        },
        {
          data: 'GAC_HONO',
          title: 'G house no'
        },
        {
          data: 'GAC_WARD',
          title: 'G ward'
        },
        {
          data: 'GAC_ADDR',
          title: 'details'
        },
        {
          data: 'GAC_GALLI',
          title: 'G Galli'
        },
        {
          data: 'GAC_AREA',
          title: 'Area'
        },
        {
          data: 'GAC_CTCODE',
          title: 'City'
        },
        {
          data: 'GAC_PIN',
          title: 'G pin no'
        },
        {
          data: 'CASE_SUITE_DATE',
          title: 'Court Order Date'
        },
        {
          data: 'COURT_INT_RATE',
          title: 'Court interest rate'
        },
        {
          data: 'COURT_INSTALLMENT',
          title: 'Installment'
        },
        {
          data: 'COURT_ORDER_DATE',
          title: 'Court order date'
        },

        {
          data: 'SUITE_AMT',
          title: 'suit amt'
        },

        {
          data: 'COURT_RESULT_DATE',
          title: 'Court Result Date'
        },

        {
          data: 'BRANCH_CODE',
          title: 'Branch code'
        },

        {
          data: 'RECOVERABLE_AMT',
          title: 'Recoverable amount'
        },

        {
          data: 'INT_CALC_DATE',
          title: 'Interest cal. date'
        },
        {
          data:'RECOVERABLE_INT',
          title:'recoverable interest'
        },
        {
          data:'COURT_CASE_NO',
          title:'court case no'
        },
        {
          data:'REF_OLD_AC_TYPE',
          title:'Old  A/c Scheme'
        },
        {
          data: 'REF_OLD_AC_NO',
          title: 'Old Scheme/ A/c No'
        },
        {
          data: 'ADVOCATE',
          title: 'Advocate'
        },
        {
          data: 'LOAN_STAGE',
          title: 'Loan Stage'
        },
        {
          data: 'COURT',
          title: 'COURT'
        },
        {
          data: 'D_AC_REMARK',
          title: 'REMARK'
        },
        // {
        //   data: 'MEMBER_NO',
        //   title: 'member code'
        // },





      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.repayModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.installmentMethodService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
    })
    this.TermLoanMasterDropdownService.getTermLoanMasterList().pipe(first()).subscribe(data => {
      this.memno = data;
      this.memno1 = data;
    })
    this.CustomerIDMasterDropdownService.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.custid = data;
    })
    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {
      this.castoption = data;
    })
    this.OccupationMasterService.getoccupationList().pipe(first()).subscribe(data => {
      this.occupationoption = data;
    })
    this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.intcategoryoption = data;
    })
    this.HealthMasterDropdownService.getHealthMasterList().pipe(first()).subscribe(data => {
      this.healthcodeoption = data;
    })

    this.AuthorityMasterDropdownService.getAuthorityMasterList().pipe(first()).subscribe(data => {
      this.authorityoption = data;
    })

    this.PrioritySectorMasterDropdownService.getPrioritySectorMasterList().pipe(first()).subscribe(data => {
      this.priorityoption = data;
    })
    this.PurposeMasterDropdownService.getPurposeMasterList().pipe(first()).subscribe(data => {
      this.pruposeoption = data;
    })
    this.IndustryMasterDropdownService.getIndustaryMasterList().pipe(first()).subscribe(data => {
      this.industryoption = data;
    })
    this.WeakerMasterDropdownService.getWeakerMasterList().pipe(first()).subscribe(data => {
      this.weakeroption = data;
    })
    this.DirectorMasterDropdownService.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.directoroption = data;
    })

    this.AdvocateMasterDropdownService.getAdvocateMasterList().pipe(first()).subscribe(data => {
      this.advocateoption = data;
    })
    this.LoanStageMasterDropdownService.getLoanStageMasterList().pipe(first()).subscribe(data => {
      this.loanstageoption = data;
    })
    this.CourtMasterDropdownService.getCourtMasterList().pipe(first()).subscribe(data => {
      this.courtoption = data;
    })
    this.cityMaster.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
    })


  }

  GuarantorTrue: boolean = false
  CoBorrowerTrue: boolean = false
  OpenLink() {
    this.GuarantorTrue = !this.GuarantorTrue
  }

 //temp address flag variable
 tempAddress: boolean = true;
 tempAsPermanent() {
   this.tempAddress = !this.tempAddress;
 }


  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }




  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
     
      AC_ACNOTYPE: ['DS'],
      
      //main
      AC_TYPE:[''],
      AC_NO:[''],
      REF_AC_TYPE:[''],
      REF_AC_NO:[''],
      AC_CUSTID:[''],
      AC_NAME:[''],
      
      
      // basic
      AC_OPDATE:[''],
      AC_MEMBTYPE:[''],    
      AC_MEMBNO:[''],
      AC_CAST:[''],
      AC_OCODE:[''],
      AC_INTCATA:[''],
      AC_HEALTH:[''],
      AC_REPAYMODE:[''],
      AC_SANCTION_AMOUNT:[''],
      AC_SANCTION_DATE:[''],
      AC_DRAWPOWER_AMT:[''],
      AC_INSTALLMENT:[''],
      AC_MONTHS:[''],
      AC_MORATORIUM_PERIOD:[''],
      AC_GRACE_PERIOD:[''],
      AC_EXPIRE_DATE:[''],
      AC_INTRATE:[''],
      AC_PENALINTRATE:[''],
      EFFECT_DATE:[''],
      
      
      // other details
      AC_AUTHORITY:[''],
      AC_RECOMMEND_BY:[''],
      AC_PRIORITY:[''],
      AC_PURPOSE:[''],
      AC_INDUSTRY:[''],
      AC_WEAKER:[''],
      AC_RELATION_TYPE:[''],
      AC_DIRECTOR:[''],
      AC_DIRECTOR_RELATION:[''],
      AC_COREG_NO:[''],
      AC_COREG_DATE:[''],
      AC_COREG_AMT:[''],
      AC_RESO_NO:[''],
      AC_RESO_DATE:[''],
      
      // address
      AC_HONO:[''],
      AC_WARD:[''],
      AC_ADDR:[''],
      AC_GALLI:[''],
      AC_AREA:[''],
      AC_CTCODE:[''],
      AC_PIN:[''],
      AC_ADDFLAG:[''],
      AC_THONO:[''],
      AC_TWARD:[''],
      AC_TADDR:[''],
      AC_TGALLI:[''],
      AC_TAREA:[''],
      AC_TCTCODE:[''],
      AC_TPIN:[''],
      AC_MOBILENO:[''],
      AC_PHONE_RES:[''],
      AC_PHONE_OFFICE:[''],
      
      
      // securities
      SECURITY_CODE:[''],
      SECURITY_VALUE:[''],
      AC_REMARK:[''],
      
      // Guarantor
      GAC_CUSTID:[''],
      GAC_MEMBNO:[''],
      GAC_MEMBTYPE:[''],
      GAC_NAME:[''],
      EXP_DATE:[''],
      GAC_HONO:[''],
      GAC_WARD:[''],
      GAC_ADDR:[''],
      GAC_GALLI:[''],
      GAC_AREA:[''],
      GAC_CTCODE:[''],
      GAC_PIN:[''],
      
      // Dispute Details
      CASE_SUITE_DATE:[''],
      COURT_INT_RATE:[''],
      COURT_INSTALLMENT:[''],
      COURT_ORDER_DATE:[''],
      SUITE_AMT:[''],
      COURT_RESULT_DATE:[''],
      BRANCH_CODE:[''],
      RECOVERABLE_AMT:[''],
      INT_CALC_DATE:[''],
      RECOVERABLE_INT:[''],
      COURT_CASE_NO:[''],
      REF_OLD_AC_TYPE:[''],
      REF_OLD_AC_NO:[''],
      ADVOCATE:[''],
      LOAN_STAGE:[''],
      COURT:[''],
      D_AC_REMARK:[''],
    
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {

      AC_ACNOTYPE:formVal.AC_ACNOTYPE,
      
      //main
      AC_TYPE:formVal.AC_TYPE,
      AC_NO:formVal.AC_NO,
      REF_AC_TYPE:formVal.REF_AC_TYPE,
      REF_AC_NO:formVal.REF_AC_NO,
      AC_CUSTID:formVal.AC_CUSTID,
      AC_NAME:formVal.AC_NAME,
      
      
      // basic
      AC_OPDATE:formVal.AC_OPDATE,
      AC_MEMBTYPE:formVal.AC_MEMBTYPE,
      AC_MEMBNO:formVal.AC_MEMBNO,
      AC_CAST:formVal.AC_CAST,
      AC_OCODE:formVal.AC_OCODE,
      AC_INTCATA:formVal.AC_INTCATA,
      AC_HEALTH:formVal.AC_HEALTH,
      AC_REPAYMODE:formVal.AC_REPAYMODE,
      AC_SANCTION_AMOUNT:formVal.AC_SANCTION_AMOUNT,
      AC_SANCTION_DATE:formVal.AC_SANCTION_DATE,
      AC_DRAWPOWER_AMT:formVal.AC_DRAWPOWER_AMT,
      AC_INSTALLMENT:formVal.AC_INSTALLMENT,
      AC_MONTHS:formVal.AC_MONTHS,
      AC_MORATORIUM_PERIOD:formVal.AC_MORATORIUM_PERIOD,
      AC_GRACE_PERIOD:formVal.AC_GRACE_PERIOD,
      AC_EXPIRE_DATE:formVal.AC_EXPIRE_DATE,
      AC_INTRATE:formVal.AC_INTRATE,
      AC_PENALINTRATE:formVal.AC_PENALINTRATE,
      EFFECT_DATE:formVal.EFFECT_DATE,
      
      
      // other details
      AC_AUTHORITY:formVal.AC_AUTHORITY,
      AC_RECOMMEND_BY:formVal.AC_RECOMMEND_BY,
      AC_PRIORITY:formVal.AC_PRIORITY,
      AC_PURPOSE:formVal.AC_PURPOSE,
      AC_INDUSTRY:formVal.AC_INDUSTRY,
      AC_WEAKER:formVal.AC_WEAKER,
      AC_RELATION_TYPE:formVal.AC_RELATION_TYPE,
      AC_DIRECTOR:formVal.AC_DIRECTOR,
      AC_DIRECTOR_RELATION:formVal.AC_DIRECTOR_RELATION,
      AC_COREG_NO:formVal.AC_COREG_NO,
      AC_COREG_DATE:formVal.AC_COREG_DATE,
      AC_COREG_AMT:formVal.AC_COREG_AMT,
      AC_RESO_NO:formVal.AC_RESO_NO,
      AC_RESO_DATE:formVal.AC_RESO_DATE,
      
      // address
      AC_HONO:formVal.AC_HONO,
      AC_WARD:formVal.AC_WARD,
      AC_ADDR:formVal.AC_ADDR,
      AC_GALLI:formVal.AC_GALLI,
      AC_AREA:formVal.AC_AREA,
      AC_CTCODE:formVal.AC_CTCODE,
      AC_PIN:formVal.AC_PIN,
      AC_ADDFLAG:formVal.AC_ADDFLAG,
      AC_THONO:formVal.AC_THONO,
      AC_TWARD:formVal.AC_TWARD,
      AC_TADDR:formVal.AC_TADDR,
      AC_TGALLI:formVal.AC_TGALLI,
      AC_TAREA:formVal.AC_TAREA,
      AC_TCTCODE:formVal.AC_TCTCODE,
      AC_TPIN:formVal.AC_TPIN,
      AC_MOBILENO:formVal.AC_MOBILENO,
      AC_PHONE_RES:formVal.AC_PHONE_RES,
      AC_PHONE_OFFICE:formVal.AC_PHONE_OFFICE,
      
      
      // securities
      SECURITY_CODE:formVal.SECURITY_CODE,
      SECURITY_VALUE:formVal.SECURITY_VALUE,
      AC_REMARK:formVal.AC_REMARK,
      
      // Guarantor
      GAC_CUSTID:formVal.GAC_CUSTID,
      GAC_MEMBNO:formVal.GAC_MEMBNO,
      GAC_MEMBTYPE:formVal.GAC_MEMBTYPE,
      GAC_NAME:formVal.GAC_NAME,
      EXP_DATE:formVal.EXP_DATE,
      GAC_HONO:formVal.GAC_HONO,
      GAC_WARD:formVal.GAC_WARD,
      GAC_ADDR:formVal.GAC_ADDR,
      GAC_GALLI:formVal.GAC_GALLI,
      GAC_AREA:formVal.GAC_AREA,
      GAC_CTCODE:formVal.GAC_CTCODE,
      GAC_PIN:formVal.GAC_PIN,
      
      // Dispute Details
      CASE_SUITE_DATE:formVal.CASE_SUITE_DATE,
      COURT_INT_RATE:formVal.COURT_INT_RATE,
      COURT_INSTALLMENT:formVal.COURT_INSTALLMENT,
      COURT_ORDER_DATE:formVal.COURT_ORDER_DATE,
      SUITE_AMT:formVal.SUITE_AMT,
      COURT_RESULT_DATE:formVal.COURT_RESULT_DATE,
      BRANCH_CODE:formVal.BRANCH_CODE,
      RECOVERABLE_AMT:formVal.RECOVERABLE_AMT,
      INT_CALC_DATE:formVal.INT_CALC_DATE,
      RECOVERABLE_INT:formVal.RECOVERABLE_INT,
      COURT_CASE_NO:formVal.COURT_CASE_NO,
      REF_OLD_AC_TYPE:formVal.REF_OLD_AC_TYPE,
      REF_OLD_AC_NO:formVal.REF_OLD_AC_NO,
      ADVOCATE:formVal.ADVOCATE,
      LOAN_STAGE:formVal.LOAN_STAGE,
      COURT:formVal.COURT,
      D_AC_REMARK:formVal.D_AC_REMARK,

      // document

    }
    this.DisputeLoanMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })

    // addGuarantor() {
    //   const formVal = this.angForm.value;
    //   var object = {
    //     AC_TYPE: formVal.AC_TYPE,
    //     AC_ACNOTYPE: formVal.AC_ACNOTYPE,
    //     GAC_CUSTID: formVal.GAC_CUSTID,
    //     GAC_MEMBNO: formVal.GAC_MEMBNO,
    //     GAC_MEMBTYPE: formVal.GAC_MEMBTYPE,
    //     GAC_NAME: formVal.GAC_NAME,
    //     GAC_HONO: formVal.GAC_HONO,
    //     GAC_WARD: formVal.GAC_WARD,
    //     GAC_ADDR: formVal.GAC_ADDR,
    //     GAC_GALLI: formVal.GAC_GALLI,
    //     GAC_AREA: formVal.GAC_AREA,
    //     GAC_CTCODE: formVal.GAC_CTCODE,
    //     GAC_PIN: formVal.GAC_PIN,
    //     EXP_DATE: formVal.EXP_DATE
    //   }
    //   this.multiGuarantor.push(object);
    //   this.resetGuarantor()
    // }
    //To clear form
      
        this.resetForm();
        this.multiCoBorrower = []
        this.multiGuarantor = []
  }
  
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.DisputeLoanMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
   
    this.multiGuarantor = data.guaranterMaster
    console.log("scheme", data.AC_TYPE)
    
      this.angForm.patchValue({
      AC_ACNOTYPE:data.AC_ACNOTYPE,
      
      //main
      AC_TYPE:data.AC_TYPE,
      AC_NO:data.AC_NO,
      REF_AC_TYPE:data.REF_AC_TYPE,
      REF_AC_NO:data.REF_AC_NO,
      AC_CUSTID:data.AC_CUSTID,
      AC_NAME:data.AC_NAME,
      
      
      // basic
      AC_OPDATE:data.AC_OPDATE,
      AC_MEMBTYPE:data.AC_MEMBTYPE,
      AC_MEMBNO:data.AC_MEMBNO,
      AC_CAST:data.AC_CAST,
      AC_OCODE:data.AC_OCODE,
      AC_INTCATA:data.AC_INTCATA,
      AC_HEALTH:data.AC_HEALTH,
      AC_REPAYMODE:data.AC_REPAYMODE,
      AC_SANCTION_AMOUNT:data.AC_SANCTION_AMOUNT,
      AC_SANCTION_DATE:data.AC_SANCTION_DATE,
      AC_DRAWPOWER_AMT:data.AC_DRAWPOWER_AMT,
      AC_INSTALLMENT:data.AC_INSTALLMENT,
      AC_MONTHS:data.AC_MONTHS,
      AC_MORATORIUM_PERIOD:data.AC_MORATORIUM_PERIOD,
      AC_GRACE_PERIOD:data.AC_GRACE_PERIOD,
      AC_EXPIRE_DATE:data.AC_EXPIRE_DATE,
      AC_INTRATE:data.AC_INTRATE,
      AC_PENALINTRATE:data.AC_PENALINTRATE,
      EFFECT_DATE:data.EFFECT_DATE,
      
      
      // other details
      AC_AUTHORITY:data.AC_AUTHORITY,
      AC_RECOMMEND_BY:data.AC_RECOMMEND_BY,
      AC_PRIORITY:data.AC_PRIORITY,
      AC_PURPOSE:data.AC_PURPOSE,
      AC_INDUSTRY:data.AC_INDUSTRY,
      AC_WEAKER:data.AC_WEAKER,
      AC_RELATION_TYPE:data.AC_RELATION_TYPE,
      AC_DIRECTOR:data.AC_DIRECTOR,
      AC_DIRECTOR_RELATION:data.AC_DIRECTOR_RELATION,
      AC_COREG_NO:data.AC_COREG_NO,
      AC_COREG_DATE:data.AC_COREG_DATE,
      AC_COREG_AMT:data.AC_COREG_AMT,
      AC_RESO_NO:data.AC_RESO_NO,
      AC_RESO_DATE:data.AC_RESO_DATE,
      
      // address
      AC_HONO:data.AC_HONO,
      AC_WARD:data.AC_WARD,
      AC_ADDR:data.AC_ADDR,
      AC_GALLI:data.AC_GALLI,
      AC_AREA:data.AC_AREA,
      AC_CTCODE:data.AC_CTCODE,
      AC_PIN:data.AC_PIN,
      AC_ADDFLAG:data.AC_ADDFLAG,
      AC_THONO:data.AC_THONO,
      AC_TWARD:data.AC_TWARD,
      AC_TADDR:data.AC_TADDR,
      AC_TGALLI:data.AC_TGALLI,
      AC_TAREA:data.AC_TAREA,
      AC_TCTCODE:data.AC_TCTCODE,
      AC_TPIN:data.AC_TPIN,
      AC_MOBILENO:data.AC_MOBILENO,
      AC_PHONE_RES:data.AC_PHONE_RES,
      AC_PHONE_OFFICE:data.AC_PHONE_OFFICE,
      
      
      // securities
      SECURITY_CODE:data.SECURITY_CODE,
      SECURITY_VALUE:data.SECURITY_VALUE,
      AC_REMARK:data.AC_REMARK,
      
      // Guarantor
      GAC_CUSTID:data.GAC_CUSTID,
      GAC_MEMBNO:data.GAC_MEMBNO,
      GAC_MEMBTYPE:data.GAC_MEMBTYPE,
      GAC_NAME:data.GAC_NAME,
      EXP_DATE:data.EXP_DATE,
      GAC_HONO:data.GAC_HONO,
      GAC_WARD:data.GAC_WARD,
      GAC_ADDR:data.GAC_ADDR,
      GAC_GALLI:data.GAC_GALLI,
      GAC_AREA:data.GAC_AREA,
      GAC_CTCODE:data.GAC_CTCODE,
      GAC_PIN:data.GAC_PIN,
      
      // Dispute Details
      CASE_SUITE_DATE:data.CASE_SUITE_DATE,
      COURT_INT_RATE:data.COURT_INT_RATE,
      COURT_INSTALLMENT:data.COURT_INSTALLMENT,
      COURT_ORDER_DATE:data.COURT_ORDER_DATE,
      SUITE_AMT:data.SUITE_AMT,
      COURT_RESULT_DATE:data.COURT_RESULT_DATE,
      BRANCH_CODE:data.BRANCH_CODE,
      RECOVERABLE_AMT:data.RECOVERABLE_AMT,
      INT_CALC_DATE:data.INT_CALC_DATE,
      RECOVERABLE_INT:data.RECOVERABLE_INT,
      COURT_CASE_NO:data.COURT_CASE_NO,
      REF_OLD_AC_TYPE:data.REF_OLD_AC_TYPE,
      REF_OLD_AC_NO:data.REF_OLD_AC_NO,
      ADVOCATE:data.ADVOCATE,
      LOAN_STAGE:data.LOAN_STAGE,
      COURT:data.COURT,
      D_AC_REMARK:data.D_AC_REMARK,

      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    console.log(this.multiGuarantor)
    data['GuarantorData'] = this.multiGuarantor
    data['id'] = this.updateID;
    this.DisputeLoanMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
      text: "Do you want to delete advocate Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.DisputeLoanMasterService.deleteData(id).subscribe(data1 => {
          this.disputelonemaster = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.rerender();
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

  // Reset Function
  resetForm() {
    this.createForm();
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

  id
  transferfromREF_AC_NO(id) {
    console.log('in transer from term loan master AC no ', id)
    this.TermLoanService.getFormData(id).subscribe(data => {
      console.log('get transfered data ', data)
      this.getCustomer(data.AC_CUSTID)
      this.angForm.patchValue({
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        AC_NO: data.AC_NO,
        AC_CUSTID: data.AC_CUSTID,
        AC_OPDATE: data.AC_OPDATE,
        AC_OPEN_OLD_DATE: data.AC_OPEN_OLD_DATE,
        REF_ACNO: data.REF_ACNO,
        AC_INTCATA: data.AC_INTCATA,
        AC_SANCTION_AMOUNT: data.AC_SANCTION_AMOUNT,
        AC_SANCTION_DATE: data.AC_SANCTION_DATE,
        AC_DRAWPOWER_AMT: data.AC_DRAWPOWER_AMT,
        AC_MONTHS: data.AC_MONTHS,
        AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,
        AC_INTRATE: data.AC_INTRATE,
        AC_REPAYMODE: data.AC_REPAYMODE,
        INSTALLMENT_METHOD: data.INSTALLMENT_METHOD,
        AC_INSTALLMENT: data.AC_INSTALLMENT,
        AC_MORATORIUM_PERIOD: data.AC_MORATORIUM_PERIOD,
        AC_GRACE_PERIOD: data.AC_GRACE_PERIOD,
        AC_AUTHORITY: data.AC_AUTHORITY,
        AC_RECOMMEND_BY: data.AC_RECOMMEND_BY,
        AC_RECOVERY_CLERK: data.AC_RECOVERY_CLERK,
        AC_PRIORITY: data.AC_PRIORITY,
        // AC_PRIORITY_SUB1: data.AC_PRIORITY_SUB1,
        // AC_PRIORITY_SUB2: data.AC_PRIORITY_SUB2,
        // AC_PRIORITY_SUB3: data.AC_PRIORITY_SUB3,
        AC_WEAKER: data.AC_WEAKER,
        AC_PURPOSE: data.AC_PURPOSE,
        AC_INDUSTRY: data.AC_INDUSTRY,
        AC_HEALTH: data.AC_HEALTH,
        AC_RELATION_TYPE: data.AC_RELATION_TYPE,
        AC_DIRECTOR: data.AC_DIRECTOR,
        AC_DIRECTOR_RELATION: data.AC_DIRECTOR_RELATION,
        AC_COREG_NO: data.AC_COREG_NO,
        AC_COREG_DATE: data.AC_COREG_DATE,
        AC_COREG_AMT: data.AC_COREG_AMT,
        AC_RESO_NO: data.AC_RESO_NO,
        AC_RESO_DATE: data.AC_RESO_DATE,
        AC_ADDFLAG: data.AC_ADDFLAG,
        AC_THONO: data.AC_THONO,
        AC_TWARD: data.AC_TWARD,
        AC_TADDR: data.AC_TADDR,
        AC_TGALLI: data.AC_TGALLI,
        AC_TAREA: data.AC_TAREA,
        AC_TCTCODE: data.AC_TCTCODE,
        AC_TPIN: data.AC_TPIN,
      })
    })
  }

  getCustomer(id) {
    this.CustomerIdService.getFormData(id).subscribe((data) => {
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
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
      });
    });
  }

}