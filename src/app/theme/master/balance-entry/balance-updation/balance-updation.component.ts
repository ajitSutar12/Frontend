import { Component, ElementRef, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { BalanceUpdationService } from './balance-updation.service';
import { DebitService } from '../../../../shared/elements/debit.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { __asyncDelegator } from 'tslib';

import { NgSelectComponent } from '@ng-select/ng-select'

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-balance-updation',
  templateUrl: './balance-updation.component.html',
  styleUrls: ['./balance-updation.component.scss'],
})

export class BalanceUpdationComponent implements OnInit {
  //api
  url = environment.base_url;
  formSubmitted = false;

  httpData: any;
  dtExportButtonOptions: any = {};
  makeForm: any;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  angForm: FormGroup;

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  //title select variables
  // debit: Array<IOption> = this.DebitService.getCharacters();
  // simpleOption: Array<IOption> = this.BalanceUpdationService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null

  // for infinite Scrolling

  // sum = 10;
  direction = "";

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //for date
  maxDate: any;
  minDate: Date;
  warrentdate: any = null

  // for grid variable declaration
  ledgerbalance: boolean = false
  lastTranDate: boolean = false
  productamount: boolean = false
  lastintpaidDate: boolean = false
  closingdate: boolean = false
  debitcredit: boolean = false
  payableint: boolean = false
  totalintpaid: boolean = false
  totalpenalint: boolean = false
  totalinstallmentrec: boolean = false
  tdsopDate: boolean = false
  intinfinancialyear: boolean = false
  opintpaidfinyear: boolean = false
  acopenDate: boolean = false
  lastcreditDate: boolean = false
  lastintDate: boolean = false
  opproduct: boolean = false
  balanceDate: boolean = false
  receivableint: boolean = false
  totalintrec: boolean = false
  penalint: boolean = false
  totaldepositamt: boolean = false
  totalpostedint: boolean = false
  npaDate: boolean = false
  isdisputeloan: boolean = false
  noofshares: boolean = false
  shareamt: boolean = false
  accloseDate: boolean = false
  purchaseDate: boolean = false
  supliername: boolean = false
  purchaserate: boolean = false
  purchasequantity: boolean = false
  purchasevalue: boolean = false
  openingamt: boolean = false
  openingquantity: boolean = false
  lastdepreciationDate: boolean = false


  debitCredit = [
    { value: 'D', label: 'Debit' },
    { value: 'C', label: 'Credit' },
  ]


  scheme: any[];
  arrTable

  ToAC: any[];
  fromAC: any[];
  // getschemename: any;
  ngbranch: any = null;
  branchOption: any;

  gridData: any;

  public dataSource: any[];
  public data: any[];
  public cols: any[];
  public totalRecords;


  constructor(
    private _cdr: ChangeDetectorRef,
    public _service: BalanceUpdationService,
    private http: HttpClient,
    public DebitService: DebitService, private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
    private config: NgSelectConfig,) {


    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
    })
  }

  ///Scrolling function
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    console.log('scroll function is working');
  }

  ngOnInit(): void {
    this.createForm();
    // this.getSystemParaDate()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };

    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
    }
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.scheme = allscheme;
    })

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    // scrolling function
    // this.data = this._service.getData(100000);
    // this.totalRecords = this.data.length;

    this.cols = [

      { field: 'ThreadId', header: 'ThreadId' },
      { field: 'Timestamp', header: 'Timestamp' },
      { field: 'TrackingId', header: 'TrackingId' },
      { field: 'UserId', header: 'UserId' },
    ];
  }


  branchCode
  branchid
  getschemename
  S_GLACNO

  getBranch(event) {
    this.branchCode = event.name
    this.branchid = event.value
    this.fromAC = null
    this.ngfromac = null
    this.ToAC = null
    this.ngtoac = null
    this.getAccountList()
  }

  //get scheme value and type
  schemechange(event) {
    this.getschemename = event.name
    this.S_GLACNO = event.glacno
    this.fromAC = null
    this.ngfromac = null
    this.ToAC = null
    this.ngtoac = null
    this.getAccountList()
  }

  //get account no according scheme
  getAccountList() {
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    let obj = [this.ngscheme, this.ngbranch]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.lastTranDate = true
          this.ledgerbalance = true
          this.productamount = true
          this.lastintpaidDate = true
          this.closingdate = true
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = true
          this.closingdate = true
          this.debitcredit = true
          this.payableint = true
          this.totalintpaid = true
          this.totalpenalint = true
          this.totalinstallmentrec = true
          this.tdsopDate = true
          this.intinfinancialyear = true
          this.opintpaidfinyear = true
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = true
          this.closingdate = true
          this.debitcredit = true
          this.payableint = true
          this.totalintpaid = true
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false


        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = false
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = true
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = true
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false


        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = true
          this.closingdate = true
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false



        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = false
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = true
          this.debitcredit = true
          this.payableint = true
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = true
          this.lastintDate = true
          this.opproduct = true
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
          this.totalpostedint = false

        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = false
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = true
          this.opproduct = false
          this.balanceDate = true
          this.receivableint = true
          this.totalintrec = true
          this.penalint = true
          this.totaldepositamt = true
          this.totalpostedint = true
          this.npaDate = true
          this.isdisputeloan = true
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = false
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = true
          this.opproduct = false
          this.balanceDate = true
          this.receivableint = true
          this.totalintrec = true
          this.penalint = true
          this.totaldepositamt = true
          this.totalpostedint = true
          this.npaDate = true
          this.isdisputeloan = true
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = true
          this.lastTranDate = true
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = false
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = true
          this.opproduct = false
          this.balanceDate = true
          this.receivableint = true
          this.totalintrec = true
          this.penalint = true
          this.totaldepositamt = true
          this.totalpostedint = true
          this.npaDate = true
          this.isdisputeloan = true
          this.noofshares = false
          this.shareamt = false
          this.accloseDate = false
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          this.ledgerbalance = false
          this.lastTranDate = false
          this.productamount = false
          this.lastintpaidDate = false
          this.closingdate = false
          this.debitcredit = true
          this.payableint = false
          this.totalintpaid = false
          this.totalpenalint = false
          this.totalinstallmentrec = false
          this.tdsopDate = false
          this.intinfinancialyear = false
          this.opintpaidfinyear = false
          this.acopenDate = false
          this.lastcreditDate = false
          this.lastintDate = false
          this.opproduct = false
          this.balanceDate = false
          this.receivableint = false
          this.totalintrec = false
          this.penalint = false
          this.totaldepositamt = false
          this.totalpostedint = false
          this.npaDate = false
          this.isdisputeloan = false
          this.noofshares = true
          this.shareamt = true
          this.accloseDate = true



        })
        break;

    }
  }
  balanceUpdateArr
  showTable: boolean = false
  mem

  //load table based on from and to account number
  getTable() {
    this.arrTable = []
    this.balanceUpdateArr = []
    var memFrom = this.angForm.controls['FROM_AC'].value
    var memTo = this.angForm.controls['TO_AC'].value
    if (this.angForm.controls['FROM_AC'].value <= this.angForm.controls['TO_AC'].value && this.angForm.controls['TO_AC'].value != '') {
      this.showTable = true
      let fromDate = moment(this.angForm.controls['TRAN_DATE'].value, 'DD/MM/YYYY')
      let fromDatet = moment(fromDate).format('DD/MM/YYYY')
      this.mem = [memFrom, memTo, this.ngscheme, this.ngbranch, this.getschemename, fromDatet]
      this.mem = {
        memFrom: memFrom,
        memTo: memTo,
        ngscheme: this.ngscheme,
        ngbranch: this.ngbranch,
        getschemename: this.getschemename,
        fromDatet: fromDatet
      }
      this.http.post(this.url + '/balance-updation/accounts/' , this.mem).subscribe((data) => {
        this.arrTable = data;
        this.gridData = data;
        for (let element of this.arrTable) {
          var object = {
            AC_NO: element.AC_NO,
            AC_NAME: element.AC_NAME,
            id: element.id,
            BANKACNO: element.BANKACNO,
            AC_OP_TOTAL_DEPOSITAMT: element.AC_OP_TOTAL_DEPOSITAMT,
            AC_OP_CD: element.AC_OP_CD,
            AC_BALDATE: element.AC_BALDATE,
            AC_ACTDATE: element.AC_ACTDATE,
            AC_PAID_INT_OP: element.AC_PAID_INT_OP,
            AC_LINTEDT: element.AC_LINTEDT,
            OP_POSTED_INT: element.OP_POSTED_INT,
            AC_RECBLEODUEINT_OP: element.AC_RECBLEODUEINT_OP,
            OP_NPA_DATE: element.OP_NPA_DATE,
            IS_DISPUTE_LOAN: element.IS_DISPUTE_LOAN,
            AC_CLOSEDT: element.AC_CLOSEDT,
            AC_PRODUCT: element.AC_PRODUCT,
            AC_PINT_OP: element.AC_PINT_OP,
            AC_ODEPINS: element.AC_ODEPINS,
            OP_CR_INT_FIN_YEAR: element.OP_CR_INT_FIN_YEAR,
            OP_INT_PAID_FIN_YEAR: element.OP_INT_PAID_FIN_YEAR,
            LAST_TDS_DATE: element.LAST_TDS_DATE,
            ExistFlag: 'Y'
          }
          this.balanceUpdateArr.push(object)
        }
      });

    }
    else {
      Swal.fire("Must Select To Account Number");
      this.angForm.patchValue({
        TO_AC: ''
      })
      this.arrTable = []
      this.balanceUpdateArr = []
    }
  }


  getColumnValue(id, AC_NO, BANKACNO, columnValue, ColumnName) {
    if (columnValue != '' || columnValue != 0) {
      if (this.balanceUpdateArr.length != 0) {
        if (this.balanceUpdateArr.some(item => item.AC_NO === AC_NO)) {
          this.balanceUpdateArr.forEach((element) => {
            if (element.AC_NO == AC_NO) {
              element[`${ColumnName}`] = columnValue
              element['ExistFlag'] = 'N'
            }
          })
        }
        else {
          var object = {
            AC_NO: AC_NO,
            id: id,
            BANKACNO: BANKACNO,
            ExistFlag: 'N'
          }
          object[`${ColumnName}`] = columnValue
          this.balanceUpdateArr.push(object)
        }
      }
      else {
        var object = {
          AC_NO: AC_NO,
          id: id,
          BANKACNO: BANKACNO,
          ExistFlag: 'N'
        }
        object[`${ColumnName}`] = columnValue
        this.balanceUpdateArr.push(object)
      }
    }
  }
  ngDebitCredit: any = null
  getDebitCredit(id, AC_NO, BANKACNO, AC_OP_CD) {

    if (this.balanceUpdateArr.length != 0) {

      if (this.balanceUpdateArr.some(item => item.AC_NO === AC_NO)) {
        this.balanceUpdateArr.forEach((element) => {
          if (element.AC_NO == AC_NO) {
            element['AC_OP_CD'] = AC_OP_CD == 1 ? 'D' : 'C'
            element['ExistFlag'] = 'N'
          }
        })
      }
      else {
        var object = {
          AC_NO: AC_NO,
          id: id,
          BANKACNO: BANKACNO,
          ExistFlag: 'N',
          AC_OP_CD: AC_OP_CD == 1 ? 'D' : 'C'
        }
        // object[`${ColumnName}`] = columnValue
        this.balanceUpdateArr.push(object)
      }
    }
    else {
      var object = {
        AC_NO: AC_NO,
        id: id,
        BANKACNO: BANKACNO,
        ExistFlag: 'N',
        AC_OP_CD: AC_OP_CD == 1 ? 'D' : 'C'
      }
      // object[`${ColumnName}`] = columnValue
      this.balanceUpdateArr.push(object)
    }
  }

  //update checkbox status in array
  checkInterestFlag(id, AC_NO, BANKACNO, flag) {

    let isIntUpdate: boolean = false
    if (flag.target.checked) {
      isIntUpdate = true
    }
    else {
      isIntUpdate = false
    }
    if (this.balanceUpdateArr.length != 0) {
      if (this.balanceUpdateArr.some(item => item.AC_NO === AC_NO)) {
        this.balanceUpdateArr.forEach((element) => {
          if (element.AC_NO == AC_NO) {
            element['IS_DISPUTE_LOAN'] = isIntUpdate
            element['ExistFlag'] = 'N'
          }
        })
      }
      else {
        var object = {
          AC_NO: AC_NO,
          id: id,
          BANKACNO: BANKACNO,
          IS_DISPUTE_LOAN: isIntUpdate,
          ExistFlag: 'N'
        }
        this.balanceUpdateArr.push(object)
      }
    }
    else {
      var object = {
        AC_NO: AC_NO,
        id: id,
        BANKACNO: BANKACNO,
        ExistFlag: 'N',
        IS_DISPUTE_LOAN: isIntUpdate
      }
      this.balanceUpdateArr.push(object)
    }
  }


  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required, Validators.pattern]],
      AC_TYPE: ['', [Validators.required, Validators.pattern]],
      TRAN_DATE: ['', [Validators.required, Validators.pattern]],
      FROM_AC: ['', [Validators.pattern]],
      TO_AC: ['', [Validators.pattern]],
      debitcredit: ['']
    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   $('#sharemastertable tfoot tr').appendTo('#sharemastertable thead');
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (this['value'] != '') {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       } else {
    //         that
    //           .search(this['value'])
    //           .draw();
    //       }
    //     });
    //   });
    // });


  }

  //filter object
  filterObject(ele, type) {
    let matchArray = new Array()
    this.arrTable = [];
    this.gridData.forEach(element => {
      if (type == 'AC_NAME') {
        if (JSON.stringify(element.AC_NAME).includes(ele.target.value.toUpperCase())) {
          this.arrTable.push(element);
        }
      } else {
        if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
          this.arrTable.push(element);
        }
      }

    });
  }
  submit() {
    let dataObj = this.angForm.value;
    dataObj['gridData'] = this.arrTable;
    let notingdate
    this.formSubmitted = true;
    if (this.balanceUpdateArr.length != 0) {
      const formVal = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      const dataToSend = {
        // TRAN_DATE: formVal.TRAN_DATE,
        TRAN_DATE: (formVal.TRAN_DATE == '' || formVal.TRAN_DATE == 'Invalid date') ? '' : moment(formVal.TRAN_DATE).format('DD/MM/YYYY'),
        TRAN_ACNOTYPE: this.getschemename,
        TRAN_ACTYPE: this.ngscheme,
        balanceUpdateArr: this.balanceUpdateArr,
        AC_TYPE: this.getschemename,
        BRANCH_CODE: this.branchCode,
        S_GLACNO: this.S_GLACNO,
        USER: result.USER_NAME,
      };
      this._service.postData(dataToSend).subscribe(data => {
        this.formSubmitted = false;
        Swal.fire("Success!", "Data Updated Successfully !", "success");

      })
      this.resetForm()
      this.balanceUpdateArr = []
      this.arrTable = []
    }
  }

  addNewData() {
    this.showButton = true;
    // this.updateShow = false;
    this.resetForm();
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE
      })
    })
  }
  // Reset Function
  resetForm() {
    this.createForm();
    // this.getSystemParaDate()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
    this.balanceUpdateArr = []
    this.ngbranch = null
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    this.resetForm();
  }
  getDecimalPoint(event) {
    event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }

}