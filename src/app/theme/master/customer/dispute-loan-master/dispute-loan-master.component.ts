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
import {CustomerIDMasterDropdownService} from '../../../../shared/dropdownService/customer-id-master-dropdown.service'

// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { DisputeLoanMasterService } from './dispute-loan-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import {CustomerIdService} from '../customer-id/customer-id.service'

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DisputeLoanMaster {
  AC_TYPE:number;
  AC_NO:number;
  REF_AC_TYPE:number;
  REF_AC_NO:number;
  AC_CUSTID:number;
  AC_NAME:string;
  AC_OPDATE:Date;
  AC_MEMBTYPE:string;
  AC_MEMBNO:number;
  AC_CAST:number;
  AC_OCODE:number;
  AC_INTCATA:number;
  AC_HEALTH:number;
  AC_REPAYMODE:number;
  AC_SANCTION_AMOUNT:number;
  AC_SANCTION_DATE:Date;
  AC_DRAWPOWER_AMT:number;
  AC_INSTALLMENT:number;
  Period:number;
  AC_MORATORIUM_PERIOD:number;
  AC_GRACE_PERIOD:number;
  AC_EXPIRE_DATE:Date;
  AC_INTRATE:string;
  PenalIntRate:string;
  EFFECT_DATE:string;
  AC_AUTHORITY:string;
  AC_RECOMMEND_BY:string;
  AC_PRIORITY:string;
  AC_PURPOSE:string;
  AC_INDUSTRY:string;
  AC_WEAKER:string;
  AC_RELATION_TYPE:string;
  AC_DIRECTOR:string;
  AC_DIRECTOR_RELATION:string;
  AC_COREG_NO:number;
  AC_COREG_DATE:Date;
  AC_COREG_AMT:string;
  AC_RESO_NO:string;
  AC_RESO_DATE:string;
  House:string;
  Ward:string;
  Detail:string;
  Galli:string;
  Area:string;
  PinCode:string;
  TempHouse:string;
  TempWard:string;
  TempDetail:string;
  TempGalli:string;
  TempCity:string;
  TempArea:string;
  TempPinCode:string;
  TelePh:string;
  R:string;
  Customer_mobile:string;
  customer_email:string;
  CASE_SUITE_DATE:string;
  COURT_INT_RATE:string;
  COURT_INSTALLMENT:string;
  COURT_ORDER_DATE:string;
  SUITE_AMT:string;
  COURT_RESULT_DATE:Date;
  BranchCode:number;
  RECOVERABLE_AMT:number;
  INT_CALC_DATE:Date;
  RECOVERABLE_INT:number;
  COURT_CASE_NO:number;
  REF_OLD_AC_TYPE:string;
  REF_OLD_AC_NO:number;
  ADVOCATE:string;
  LOAN_STAGE:string;
  COURT:string;
  AC_REMARK:string;
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
export class DisputeLoanMasterComponent implements OnInit, AfterViewInit, OnDestroy  {
    // newCustomerID = [];
    newCustomerID;

    newCustomer(newCustomer) {
      console.log("new customer")
      // this.newCustomerID.push(newCustomer)
      this.newCustomerID = newCustomer
      console.log(this.newCustomerID)
      this.angForm.setValue({
        'AC_NO': this.newCustomerID.AC_NO,
        'AC_MEMBTYPE': this.newCustomerID.AC_MEMBTYPE,
        'AC_MEMBNO': this.newCustomerID.AC_MEMBNO,
        'AC_TITLE': this.newCustomerID.AC_TITLE,
        'AC_NAME': this.newCustomerID.AC_NAME,
        'AC_CAST': this.newCustomerID.AC_CAST,
        'AC_OCODE': this.newCustomerID.AC_OCODE,
        'AC_ADHARNO': this.newCustomerID.AC_ADHARNO,
        'AC_RISKCATG': this.newCustomerID.AC_RISKCATG,
        'AC_BIRTH_DT': this.newCustomerID.AC_BIRTH_DT,
        'AC_PANNO': this.newCustomerID.AC_PANNO,
        'AC_SALARYDIVISION_CODE': this.newCustomerID.AC_SALARYDIVISION_CODE,
        'AC_ADDR1': this.newCustomerID.AC_ADDR1,
        'AC_ADDR2': this.newCustomerID.AC_ADDR2,
        'AC_ADDR3': this.newCustomerID.AC_ADDR3,
        'AC_IS_RECOVERY': this.newCustomerID.AC_IS_RECOVERY,
        'AC_CTCODE': this.newCustomerID.AC_CTCODE,
        'AC_PIN': this.newCustomerID.AC_PIN,
        'AC_MOBILENO': this.newCustomerID.AC_MOBILENO,
        'AC_PHONE_RES': this.newCustomerID.AC_PHONE_RES,
        'AC_PHONE_OFFICE': this.newCustomerID.AC_PHONE_OFFICE,
        'AC_EMAILID': this.newCustomerID.AC_EMAILID,
        'TDS_REQUIRED': this.newCustomerID.TDS_REQUIRED,
        'SMS_REQUIRED': this.newCustomerID.SMS_REQUIRED,
        'IS_KYC_RECEIVED': this.newCustomerID.IS_KYC_RECEIVED
  
      })
    }
    basicTab;
    otherTab;

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
  
    //variable to get ID to update
    updateID: number = 0;
  
    //filter variable
    filterData = {};
  
 
  securitiesOptions: any = {};     //Datatable variable for securities tab
  guarantorOptions: any = {};      //Datatable variable for gurantor tab
  dtdocumentOptions: any = {}; //Datatable variable for document form

  //Select option for title, repay mode
  statementOption:any;
  d:any;
  titleOption: Array<IOption> = this.TitleService.getCharacters();
  repayModeOption: Array<IOption> = this.RepayModeService.getCharacters();
  simpleOption: Array<IOption> = this.RepayModeService.getCharacters();
  scheme: Array<IOption> = this.SchemeCodeService.getCharacters();
  custid
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null

  GuarantorTrue = false;

  constructor(
    private http: HttpClient,
    private DisputeLoanMasterService:DisputeLoanMasterService,
    public TitleService: TitleService,
    public SchemeCodeService: SchemeCodeService, 
    public RepayModeService: RepayModeService,
    private CustomerIDMasterDropdownService:CustomerIDMasterDropdownService,
    private fb: FormBuilder,
    private CustomerIdService:CustomerIdService,
    ) { }



    //object created to get data when row is clicked
    // message = {
    //   Scheme: "",
    //   AccountNo: "",
    //   LastIntDate: "",
    //   CustomerID: "",
    //   Title: "",
    //   Name: "",
    //   TransferfromScheme: "",
    //   TransferfromAcNo: "",
   
    
    // };



  //display code according choice

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
  }

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
            'http://localhost:4000/dispute-loan-master',
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
          data: 'Period',
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
          data: 'PenalIntRate',
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
          data: 'House',
          title: 'House'
        },
        {
          data: 'Ward',
          title: 'Ward'
        },
        {
          data: 'Detail',
          title: 'Detail'
        },
        {
          data: 'Galli',
          title: 'Galli'
        },
        {
          data: 'Area',
          title: 'Area'
        },
        {
          data: 'PinCode',
          title: 'PinCode'
        },
        {
          data: 'TempHouse',
          title: 'TempHouse'
        },
        {
          data: 'TempWard',
          title: 'Ward'
        },
        
        {
          data: 'TempDetail',
          title: 'Detail'
        },
        
        {
          data: 'TempGalli',
          title: 'Galli'
        },
        
        {
          data: 'TempCity',
          title: 'City'
        },
        
        {
          data: 'TempArea',
          title: 'Area'
        },
        
        {
          data: 'TempPinCode',
          title: 'PinCode'
        },
        
        {
          data: 'TelePh',
          title: 'Tele Ph'
        },
        
        {
          data: 'R',
          title: 'R'
        },
        
        {
          data: 'Customer_mobile',
          title: 'Mobile'
        },
        
        {
          data: 'customer_email',
          title: 'Email'
        },
        
        // {
        //   data: 'City',
        //   title: 'City'
        // },
        
        {
          data: 'CustomerID',
          title: 'CustomerID'
        },
        
        {
          data: 'member_type',
          title: 'member type'
        },
        
        {
          data: 'GName',
          title: 'Name'
        },
        {
          data: 'ExpiryDate',
          title: 'Expiry Date'
        },

        {
          data: 'G_address1',
          title: 'Address'
        },

        {
          data: 'G_address2',
          title: 'Address'
        },
        {
          data: 'city',
          title: 'city'
        },
        {
          data: 'SecurityDetails',
          title: 'Security Details'
        },
        {
          data: 'TotalSecurityAmount',
          title: 'Total Security Amount'
        },
        {
          data: 'G_AC_REMARK',
          title: 'G_AC_REMARK'
        },
        {
          data: 'CASE_SUITE_DATE',
          title: 'Suite Date'
        },
        {
          data: 'COURT_INT_RATE',
          title: 'Court Interest Rate'
        },
        {
          data: 'COURT_INSTALLMENT',
          title: 'Court Installment'
        },
        {
          data: 'COURT_ORDER_DATE',
          title: 'Court Order Date'
        },
        {
          data: 'SUITE_AMT',
          title: 'Suite Amount'
        },
        {
          data: 'COURT_RESULT_DATE',
          title: 'Result Date'
        },
        {
          data: 'BranchCode',
          title: 'Branch Code'
        },

        {
          data: 'RECOVERABLE_AMT',
          title: 'Recoverable amt'
        },

        {
          data: 'INT_CALC_DATE',
          title: 'Int. Calculation Date'
        },

        {
          data: 'RECOVERABLE_INT',
          title: 'Recoverable Interest'
        },

        {
          data: 'COURT_CASE_NO',
          title: 'Case No'
        },

        {
          data: 'REF_OLD_AC_TYPE',
          title: 'Old Scheme/ A/c No.1'
        },
        {
          data: 'REF_OLD_AC_NO',
          title: 'Old Scheme/ A/c No.2'
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
          data: 'AC_REMARK',
          title: 'REMARK'
        },
        {
          data: 'member_code',
          title: 'member code'
        },
        {
          data: 'member_code',
          title: 'member code'
        },
        {
          data: 'member_code',
          title: 'member code'
        },
        {
          data: 'member_code',
          title: 'member code'
        },
        {
          data: 'member_code',
          title: 'member code'
        },



        
      ],
      dom: 'Blrtip',
      

    
    };

    this.runTimer();
    this.dataSub = this.RepayModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });


    this.dataSub = this.TitleService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
      
    });
    this.CustomerIDMasterDropdownService.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.custid = data;
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


   

      // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
    AC_ACNOTYPE:['DS'],
  AC_TYPE: [''],
  AC_NO:[''],
  REF_AC_TYPE:[''],
  REF_AC_NO:[''],
  AC_CUSTID:[''],
  AC_NAME:[''],
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
  Period:[''],
  AC_MORATORIUM_PERIOD:[''],
  AC_GRACE_PERIOD:[''],
  AC_EXPIRE_DATE:[''],
  AC_INTRATE:[''],
  PenalIntRate:[''],
  EFFECT_DATE:[''],
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
  House:[''],
  Ward:[''],
  Detail:[''],
  Galli:[''],
  Area:[''],
  PinCode:[''],
  TempHouse:[''],
  TempWard:[''],
  TempDetail:[''],
  TempGalli:[''],
  TempCity:[''],
  TempArea:[''],
  TempPinCode:[''],
  TelePh:[''],
  R:[''],
  Customer_mobile:[''],
  customer_email:[''],
  CASE_SUITE_DATE:[''],
  COURT_INT_RATE:[''],
  COURT_INSTALLMENT:[''],
  COURT_ORDER_DATE:[''],
  SUITE_AMT:[''],
  COURT_RESULT_DATE:[''],
  BranchCode:[''],
  RECOVERABLE_AMT:[''],
  INT_CALC_DATE:[''],
  RECOVERABLE_INT:[''],
  COURT_CASE_NO:[''],
  REF_OLD_AC_TYPE:[''],
  REF_OLD_AC_NO:[''],
  ADVOCATE:[''],
  LOAN_STAGE:[''],
  COURT:[''],
  AC_REMARK:[''],

    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
  'AC_ACNOTYPE':formVal.AC_ACNOTYPE,
  'AC_TYPE': formVal.AC_TYPE,
  'AC_NO':formVal.AC_NO,
  'AC_CUSTID':formVal.AC_CUSTID,
  'AC_NAME':formVal.AC_NAME,
  'REF_AC_TYPE':formVal.REF_AC_TYPE,
  'REF_AC_NO':formVal.REF_AC_NO,
  'AC_OPDATE':formVal.AC_OPDATE,
  'AC_MEMBTYPE':formVal.AC_MEMBTYPE,
  'AC_MEMBNO':formVal.AC_MEMBNO,
  'AC_CAST':formVal.AC_CAST,
  'AC_OCODE':formVal.AC_OCODE,
  'AC_INTCATA':formVal.AC_INTCATA,
  'AC_HEALTH':formVal.AC_HEALTH,
  'AC_REPAYMODE':formVal.AC_REPAYMODE,
  'AC_SANCTION_AMOUNT':formVal.AC_SANCTION_AMOUNT,
  'AC_SANCTION_DATE':formVal.AC_SANCTION_DATE,
  'AC_DRAWPOWER_AMT':formVal.AC_DRAWPOWER_AMT,
  'AC_INSTALLMENT':formVal.AC_INSTALLMENT,
  'Period':formVal.Period,
  'AC_MORATORIUM_PERIOD':formVal.AC_MORATORIUM_PERIOD,
  'AC_GRACE_PERIOD':formVal.AC_GRACE_PERIOD,
  'AC_EXPIRE_DATE':formVal.AC_EXPIRE_DATE,
  'AC_INTRATE':formVal.AC_INTRATE,
  'PenalIntRate':formVal.PenalIntRate,
  'EFFECT_DATE':formVal.EFFECT_DATE,
  'AC_AUTHORITY':formVal.AC_AUTHORITY,
  'AC_RECOMMEND_BY':formVal.AC_RECOMMEND_BY,
  'AC_PRIORITY':formVal.AC_PRIORITY,
  'AC_PURPOSE':formVal.AC_PURPOSE,
  'AC_INDUSTRY':formVal.AC_INDUSTRY,
  'AC_WEAKER':formVal.AC_WEAKER,
  'AC_RELATION_TYPE':formVal.AC_RELATION_TYPE,
  'AC_DIRECTOR':formVal.AC_DIRECTOR,
  'AC_DIRECTOR_RELATION':formVal.AC_DIRECTOR_RELATION,
  'AC_COREG_NO':formVal.AC_COREG_NO,
  'AC_COREG_DATE':formVal.AC_COREG_DATE,
  'AC_COREG_AMT':formVal.AC_COREG_AMT,
  'AC_RESO_NO':formVal.AC_RESO_NO,
  'AC_RESO_DATE':formVal.AC_RESO_DATE,
  'House':formVal.House,
  'Ward':formVal.Ward,
  'Detail':formVal.Detail,
  'Galli':formVal.Galli,
  'Area':formVal.Area,
  'PinCode':formVal.PinCode,
  'TempHouse':formVal.TempHouse,
  'TempWard':formVal.TempWard,
  'TempDetail':formVal.TempDetail,
  'TempGalli':formVal.TempGalli,
  'TempCity':formVal.TempCity,
  'TempArea':formVal.TempArea,
  'TempPinCode':formVal.TempPinCode,
  'TelePh':formVal.TelePh,
  'R':formVal.R,
  'Customer_mobile':formVal.Customer_mobile,
  'customer_email':formVal.customer_email,
  'CASE_SUITE_DATE':formVal.CASE_SUITE_DATE,
  'COURT_INT_RATE':formVal.COURT_INT_RATE,
  'COURT_INSTALLMENT':formVal.COURT_INSTALLMENT,
  'COURT_ORDER_DATE':formVal.COURT_ORDER_DATE,
  'SUITE_AMT':formVal.SUITE_AMT,
  'COURT_RESULT_DATE':formVal.COURT_RESULT_DATE,
  'BranchCode':formVal.BranchCode,
  'RECOVERABLE_AMT':formVal.RECOVERABLE_AMT,
  'INT_CALC_DATE':formVal.INT_CALC_DATE,
  'RECOVERABLE_INT':formVal.RECOVERABLE_INT,
  'COURT_CASE_NO':formVal.COURT_CASE_NO,
  'REF_OLD_AC_TYPE':formVal.REF_OLD_AC_TYPE,
  'REF_OLD_AC_NO':formVal.REF_OLD_AC_NO,
  'ADVOCATE':formVal.ADVOCATE,
  'LOAN_STAGE':formVal.LOAN_STAGE,
  'COURT':formVal.COURT,
  'AC_REMARK':formVal.AC_REMARK,
    }
    this.DisputeLoanMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm;
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.DisputeLoanMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
    
  'AC_ACNOTYPE':data.AC_ACNOTYPE,
  'AC_TYPE': data.AC_TYPE,
  'AC_NO':data.AC_NO,
  'REF_AC_TYPE':data.REF_AC_TYPE,
  'AC_CUSTID':data.AC_CUSTID,
  'AC_NAME':data.AC_NAME,
  'REF_AC_NO':data.REF_AC_NO,
  'AC_OPDATE':data.AC_OPDATE,
  'AC_MEMBTYPE':data.AC_MEMBTYPE,
  'AC_MEMBNO':data.AC_MEMBNO,
  'AC_CAST':data.AC_CAST,
  'AC_OCODE':data.AC_OCODE,
  'AC_INTCATA':data.AC_INTCATA,
  'AC_HEALTH':data.AC_HEALTH,
  'AC_REPAYMODE':data.AC_REPAYMODE,
  'AC_SANCTION_AMOUNT':data.AC_SANCTION_AMOUNT,
  'AC_SANCTION_DATE':data.AC_SANCTION_DATE,
  'AC_DRAWPOWER_AMT':data.AC_DRAWPOWER_AMT,
  'AC_INSTALLMENT':data.AC_INSTALLMENT,
  'Period':data.Period,
  'AC_MORATORIUM_PERIOD':data.AC_MORATORIUM_PERIOD,
  'AC_GRACE_PERIOD':data.AC_GRACE_PERIOD,
  'AC_EXPIRE_DATE':data.AC_EXPIRE_DATE,
  'AC_INTRATE':data.AC_INTRATE,
  'PenalIntRate':data.PenalIntRate,
  'EFFECT_DATE':data.EFFECT_DATE,
  'AC_AUTHORITY':data.AC_AUTHORITY,
  'AC_RECOMMEND_BY':data.AC_RECOMMEND_BY,
  'AC_PRIORITY':data.AC_PRIORITY,
  'AC_PURPOSE':data.AC_PURPOSE,
  'AC_INDUSTRY':data.AC_INDUSTRY,
  'AC_WEAKER':data.AC_WEAKER,
  'AC_RELATION_TYPE':data.AC_RELATION_TYPE,
  'AC_DIRECTOR':data.AC_DIRECTOR,
  'AC_DIRECTOR_RELATION':data.AC_DIRECTOR_RELATION,
  'AC_COREG_NO':data.AC_COREG_NO,
  'AC_COREG_DATE':data.AC_COREG_DATE,
  'AC_COREG_AMT':data.AC_COREG_AMT,
  'AC_RESO_NO':data.AC_RESO_NO,
  'AC_RESO_DATE':data.AC_RESO_DATE,
  'House':data.House,
  'Ward':data.Ward,
  'Detail':data.Detail,
  'Galli':data.Galli,
  'Area':data.Area,
  'PinCode':data.PinCode,
  'TempHouse':data.TempHouse,
  'TempWard':data.TempWard,
  'TempDetail':data.TempDetail,
  'TempGalli':data.TempGalli,
  'TempCity':data.TempCity,
  'TempArea':data.TempArea,
  'TempPinCode':data.TempPinCode,
  'TelePh':data.TelePh,
  'R':data.R,
  'Customer_mobile':data.Customer_mobile,
  'customer_email':data.customer_email,
  'CASE_SUITE_DATE':data.CASE_SUITE_DATE,
  'COURT_INT_RATE':data.COURT_INT_RATE,
  'COURT_INSTALLMENT':data.COURT_INSTALLMENT,
  'COURT_ORDER_DATE':data.COURT_ORDER_DATE,
  'SUITE_AMT':data.SUITE_AMT,
  'COURT_RESULT_DATE':data.COURT_RESULT_DATE,
  'BranchCode':data.BranchCode,
  'RECOVERABLE_AMT':data.RECOVERABLE_AMT,
  'INT_CALC_DATE':data.INT_CALC_DATE,
  'RECOVERABLE_INT':data.RECOVERABLE_INT,
  'COURT_CASE_NO':data.COURT_CASE_NO,
  'REF_OLD_AC_TYPE':data.REF_OLD_AC_TYPE,
  'REF_OLD_AC_NO':data.REF_OLD_AC_NO,
  'ADVOCATE':data.ADVOCATE,
  'LOAN_STAGE':data.LOAN_STAGE,
  'COURT':data.COURT,
  'AC_REMARK':data.AC_REMARK,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.DisputeLoanMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
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
  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       const that = this;
  //       $('input', this.footer()).on('keyup change', function () {
  //         if (this['value'] != '') {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         } else {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         }
  //       });
  //     });
  //   })
  // }
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

  // fetch records by id
  // getDataText(id:any){
  //   debugger
  //   this.CustomerIdService.getFormData(id).subscribe(data => {
  //   let value = id._value[0];
  //   // const fetchvalue = this.angForm.value;
  //   const dataToSend = {
  //     'AC_NAME':value.AC_NAME,
  //   }
  // }

  getDataText(id:any){
      debugger
      console.log("fetch recordss")
  this.CustomerIdService.getFormData(id).subscribe(data => {
    this.updateID = data.id;
    this.angForm.patchValue({
  
     'AC_NAME':data.AC_NAME,
    })
    })
  }


  id
  getCustomer(id)
 {
    console.log('in getcustomer', id)
    this.CustomerIdService.getFormData(id).subscribe(data => {
      console.log('get customer data', data)
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_ADHARNO: data.AC_ADHARNO,
        AC_RISKCATG: data.AC_RISKCATG,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_HONO: data.custAddress.AC_HONO,
        AC_WARD: data.custAddress.AC_WARD,
        AC_TADDR: data.custAddress.AC_TADDR,
        AC_TGALLI: data.custAddress.AC_TGALLI,
        AC_AREA: data.custAddress.AC_AREA,
        AC_CTCODE: data.custAddress.AC_CTCODE,
        AC_PIN: data.custAddress.AC_PIN,
        AC_PANNO: data.AC_PANNO,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_MOBILENO: data.AC_MOBILENO,
        AC_PHONE_RES: data.AC_PHONE_RES,
        AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
        AC_EMAILID: data.AC_EMAILID,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        TDS_REQUIRED: data.TDS_REQUIRED,
        SMS_REQUIRED: data.SMS_REQUIRED,
        IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
        FIN_YEAR: data.FIN_YEAR,
        SUBMIT_DATE: data.SUBMIT_DATE,
        FORM_TYPE: data.FORM_TYPE,
        TDS_RATE: data.TDS_RATE,
        TDS_LIMIT: data.TDS_LIMIT,

      })
    })
  }
  
}