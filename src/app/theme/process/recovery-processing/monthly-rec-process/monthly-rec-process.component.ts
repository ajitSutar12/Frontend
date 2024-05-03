import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormGroup, FormBuilder, Validators, FormControl, PatternValidator } from '@angular/forms';
//SubSalaryDMasterdropdownService
import { SubSalaryDMasterdropdownService } from '../../../../shared/dropdownService/subsalary-division-master-dropdown.service'
//SalaryDMasterdropdownService
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service'
//SchmeCodeDropdownService
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SharesSchemeService } from '../../../utility/scheme-parameters/shares-scheme/shares-scheme.service';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs-compat';
import { RecoveryProcessingService } from '.././recovery-processing.service'
import { SchemeTypeDropdownService } from '../../../../shared/dropdownService/scheme-type-dropdown.service';
import { IOption } from 'ng-select';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service';
import { TransactionCashModeService } from '../../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../../shared/elements/transaction-transfer-mode.service';
import { SavingMasterService } from '../../../master/customer/saving-master/saving-master.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'


@Component({
  selector: 'app-monthly-rec-process',
  templateUrl: './monthly-rec-process.component.html',
  styleUrls: ['./monthly-rec-process.component.scss'],
  providers: [SalaryDMasterdropdownService, SubSalaryDMasterdropdownService,SchemeCodeDropdownService,SharesSchemeService,SchemeTypeDropdownService,SavingMasterService,TransactionCashModeService,TransactionTransferModeService,ACMasterDropdownService,OwnbranchMasterService,SchemeAccountNoService]
})
export class MonthlyRecProcessComponent implements OnInit {

  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

 //api
 url = environment.base_url;

  angsForm: FormGroup;  //formGroup Name
  angtForm: FormGroup;
  angForm: FormGroup;
  //DatePicker
  datemax: any;
  effectdate: any = null
  maxDate: Date;
  minDate: Date;

  totalAmt: any;
  //SalaryDropDown
  salary_divList: any = null;
  salary_div: any[];
  //SubSalaryDropDown
  sub_salary_div: any[];
  sub_salary_divList: any = null;
  ngtoac: any = null
 
  particulars: any;
  //narration
  narrationList: any;

   //Scheme type variable

   shareSchemeType

     //variable to calculate retirement date
   
  acno: any = null;
  acnos: any = null;
  SchemeCodeDropdownDropdown: any[];
  ngIntroducer: any ;
  ngIntroducers:any;
  OwnbranchMasterDropdown: any[];

  scheme //scheme code from schemast(S_ACNOTYPE)

    // for dropdown ngmodule
    ngschemetype:any=null


     //title select variables
  schemeType1: Array<IOption> = this.schemeTypeDropdown.getCharacters();
  private dataSub: Subscription = null;
  characters: Array<IOption>;

  //Datatable
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtExportButtonOptions: any = {};


  selectedCode: string;
  allSchemeCode: any//from schme master
  master: any;
  type: any; //cash or transfer
  tranModeList: any;
  date: any;
  headData: any;
  headShow: boolean = false;
  branchCode:any;
  branchOption: any;

  selectedScheme: any;
  allScheme = new Array()//from schme master
  introducerACNo
  
  obj: any
  selectedBranch: number;
  ClearBalance: number = 0;
  DayOpBal: number;
  Pass: number = 0;
  Unpass: number = 0;
  AfterVoucher: number = 0;
  Other_1_Accountlist : any = null;
  Other_1_Account : any = null;
  branch_code: any[]//from ownbranchmaster
  Other_2_Accountlist : any = null;
  ngbranch
 // dropdown variables
 ngscheme: any = null
  //Scheme type variable
  schemeType: string = 'GL'

  schemeACNo

  constructor(private fb: FormBuilder,
    public TransactionCashModeService: TransactionCashModeService,
    public TransactionTransferModeService: TransactionTransferModeService,
    private config: NgSelectConfig,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private subSalaryDMasterdropdownService: SubSalaryDMasterdropdownService,
    private _service: RecoveryProcessingService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private SchemeCodeDropdownService: SchemeCodeDropdownService,
    private sharesSchemeService: SharesSchemeService,
    private schemeTypeDropdown: SchemeTypeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    // private ownbranchMasterService: OwnbranchMasterService,
    private http: HttpClient,
    public OwnbranchMasterService: OwnbranchMasterService,) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  

  ngOnInit(): void {
    this.createForm();  //processing validators
    
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id
    if (result.RoleDefine[0].Role.id == 1) {
      this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
        this.salary_div = data;
      })
    }
    //SalaryDropDown
    else {
      this.salaryDMasterdropdownService.getSalaryDMasterList(branchCode).pipe(first()).subscribe(data => {
        this.salary_div = data;
      })

    }

     //branchOption
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

//SubSalaryDropDown
    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.sub_salary_div = data;
    })

    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.Other_1_Account = data;
    })

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    this.dataSub = this.schemeTypeDropdown.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    

    //Scheme Code
    this._service.getSchemeCodeList().subscribe(data => {
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]

    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      // this.ngscheme = data[0].value
      this.getAccountList()
    })

     //Scheme Code
     this._service.getSchemeCodeList().subscribe(data => {
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]

    })


    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
    }


    this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

   var filtered = data.filter(function(SchemeCodeDropdownDropdown){
    return (SchemeCodeDropdownDropdown.name == 'SH');
   });
   this.SchemeCodeDropdownDropdown = filtered;
    })

    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })
    
    

  }
//processing validators
  createForm() {
    this.angForm = this.fb.group({

      BRANCH_CODE: ['', [Validators.required]],
      ACNOTYPE: ['', [Validators.required]],
      SUB_SALARYDIVISION_CODE: ['', [Validators.required]],
      AC_SALARYDIVISION_CODE: ['', [Validators.required]],
      OTHER_1_ACCOUNTNO: ['', [Validators.required]],
      OTHER_2_ACCOUNTNO: ['', [Validators.required]],
      DR_G_L_SCHEME: ['', [Validators.required]],
      DR_G_L_CODE: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      PROCESS_DATE: ['', [Validators.required]],
    })

  }

  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  getAmt(ele) {
    this.totalAmt = ele.target.value + '.00';
  }

  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

 

getBranch() {
  this.getIntroducers()
  
}


getschemename: any
code1: any
getIntro(event) {
  this.getschemename = event.name
  this.getIntroducers()
  
}
//get account no according scheme for introducer
getIntroducers() {
  let data:any=localStorage.getItem('user')
  let result=JSON.parse(data);
  let branchCode=result.branch.id;
  this.obj = [this.acno, branchCode]
  switch (this.getschemename) {
    case 'SH':
      this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
        this.introducerACNo = data;
        this.ngIntroducer 
        this.ngIntroducers=null

      })
      break;

  }
}

submit(){
  var FormVal = this.angForm.value;
  const obj = {

    ac_type: 5,
    branch: 2,
    salarydiv: 1,
    subsalarydiv: null,
    processYear: 2024,
    processMonth: 3,
    flag: 1,
    date: '24/08/2023',
    T_OTHER1AMT: 10,
    T_OTHER1ACNO: 2,
    T_OTHER2AMT: 20,
    T_OTHER2ACNO: 3,
    listtype: 1 

  }

  this.http.post(this.url + '/MonthlyRecovery/process', obj).subscribe(data => {

    Swal.fire(
      'success', "Data Submitted Successfully!!", 'success'
    );
  })
  
}

//get account no according scheme
getAccountList() {
  this.ngtoac = null
  this.http.get(this.url + '/gl-account-master/divAccount/' + this.ngscheme).subscribe((data) => {
    console.log(data)
    this.schemeACNo = data
  })
}
}
