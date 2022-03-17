import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import {ACMasterDropdownService} from 'src/app/shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ledger-view',
  templateUrl: './ledger-view.component.html',
  styleUrls: ['./ledger-view.component.scss']
})
export class LedgerViewComponent implements OnInit {
  angForm: FormGroup;
  formSubmitted = false;

  //api 

  url = environment.base_url;
  

  // dropdown variables
  ngscheme:any=null
  accountedit:any=null
  allScheme: any[]
  schemeACNo: any;
  scheme: any[];
  GLACNooption: any[];

  // Date variables
  todate: any = null;
  fromdate:any=null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  // bsRangeValue: Date[];

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  

  // for grid variable declaration
  dormantac: boolean = false
  acclosedon:boolean=false
  freezeac:boolean=false

  
  
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private config: NgSelectConfig,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
    // this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.createForm()
    // this.checkdate()


    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH'||scheme.name == 'GL')
      });
      this.allScheme = allscheme;
    })

    this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
      this.allScheme.push(data)
    })

    // this.ACMasterDropdownService.getACMasterList()
    //   .pipe(first())
    //   .subscribe((data) => {
    //     this.GLACNooption = data;
    //   });

  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      AC_OPDATE:['', [Validators.required]],
      AMOUNT:[''],

    });
  }

  obj: any
  getschemename: any

  schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountlist()


  }

  // Fetching account from seleted scheme
  getAccountlist() {
    this.accountedit = null
    let obj = [this.ngscheme]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=true
          this.acclosedon=true
          this.freezeac=true


        })
      break;
      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=true
          this.acclosedon=true
          this.freezeac=true


        })
      break;
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=true


        })
      break;
      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=true
          this.acclosedon=true
          this.freezeac=true


        })
      break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=false
          this.acclosedon=true
          this.freezeac=false


        })
      break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(obj).pipe(first()).subscribe(data => {
          this.accountedit = data
          this.dormantac=true
          this.acclosedon=true
          this.freezeac=true


        })
      break;

    }

    
  }

  counter = 0;

  // checking date 
  checkDate(event){

    this.counter = this.counter+1;
    if(this.counter>2 && event.length!=0){
        let value1
      let value2
      value1 = moment(this.fromdate).format('DD/MM/YYYY');
      // console.log(value1)
      value2 = moment(this.todate).format('DD/MM/YYYY');
      // console.log(value2)
      if(moment(value1).isSame(value2)){
        Swal.fire("from date should not be same as to date")
        this.angForm.controls['TO_DATE'].reset()
      }
    }
    
  }


  

  
  

}
