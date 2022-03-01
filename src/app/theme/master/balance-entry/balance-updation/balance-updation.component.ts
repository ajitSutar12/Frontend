import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { BalanceUpdationService } from '../../../../shared/elements/balance-updation.service';
import { DebitService } from '../../../../shared/elements/debit.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { event } from 'jquery';
import { environment } from 'src/environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';

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
  debit: Array<IOption> = this.DebitService.getCharacters();
  simpleOption: Array<IOption> = this.BalanceUpdationService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //for date
  maxDate: Date;
  minDate: Date;
  warrentdate:any=null




  scheme: any[];
  arrTable: any[];
  ToAC: any[];
  fromAC: any[];
  getschemename: any;
  ngbranch: any = null;
  branchOption: any;


  constructor(public BalanceUpdationService: BalanceUpdationService,
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
  }

  ngOnInit(): void {
    this.createForm();
    this.getSystemParaDate()

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH')
      });
      this.scheme = allscheme;
    })

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
  }


  getBranch() {
    this.getAccountList(event)
  }


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


  //get account no according scheme
  getAccountList(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.ngfromac = null
    this.ngtoac = null
    this.arrTable = []
    let obj = [this.ngscheme, this.ngbranch]
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
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
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
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
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          console.log(data)
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
        this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
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
        this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(first()).subscribe(data => {
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
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          console.log(data)
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
      case 'CC':
      case 'DS':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          console.log(data)
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
        this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
          console.log(data)
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
    this.getschemename = event.name
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required, Validators.pattern]],
      AC_TYPE: ['', [Validators.required, Validators.pattern]],
      TRAN_DATE: ['', [Validators.required, Validators.pattern]],
      FROM_AC: ['', [Validators.pattern]],
      TO_AC: ['', [Validators.pattern]],

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
  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
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
    this.getSystemParaDate()
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
    this.resetForm();
  }
}