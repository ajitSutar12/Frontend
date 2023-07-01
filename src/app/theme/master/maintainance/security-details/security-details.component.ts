import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S1Service } from '../../../../shared/elements/s1.service';
import { Ac1Service } from '../../../../shared/elements/ac1.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { schemedropdownService } from 'src/app/shared/dropdownService/scheme-dropdown.service';
import { environment } from '../../../../../environments/environment'
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { SecurityMasterdropdownService } from 'src/app/shared/dropdownService/security-master-dropdown.service';
import { SecurityCodeService } from '../../policy-settings/definations/security-code/security-code.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { VoucherEntryService } from '../../../transaction/voucher-entry/voucher-entry.service'
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {
  formSubmitted = false;
  scheme: any;
  Accountno: any;
  schemeedit: any;
  accountedit: any;
  accountedit1: any;
  acno: any;


  angForm: FormGroup;
  ownDepositsTrue: boolean = false;
  otherSecurityTrue: boolean = false;
  firePolicyTrue: boolean = false;
  marketSharesTrue: boolean = false;
  stockStatementTrue: boolean = false;
  govtSecurityAndLicTrue: boolean = false;
  plantAndMachineryTrue: boolean = false;
  furnitureAndFixtureTrue: boolean = false;
  vehicleTrue: boolean = false;
  landAndBuildingsTrue: boolean = false;
  goldAndSilverTrue: boolean = false;
  otherSecurityTrue2: boolean = false;
  customerInsuranceTrue: boolean = false;
  bookDebtsTrue: boolean = false;
  pleadgeStockTrue: boolean = false;
  showButton: boolean = true;
  updateShow: boolean = false;
  //Datatable
  dtExportButtonOptions: any = {};
  //Scheme type variable
  schemeType: string = 'CC'
  schemeType1: string = 'LN'
  ngBranchCode: any

  Data: any;
  security: any[]
  ngsecurityCode: any
  //title select variables
  simpleOption: Array<IOption> = this.S1Service.getCharacters();
  Ac: Array<IOption> = this.Ac1Service.getCharacters();
  branch_code: any[]
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  schemeACNo: any;
  getscheme: any;
  constructor(
    private fb: FormBuilder,
    private_router: Router,
    public S1Service: S1Service,
    public Ac1Service: Ac1Service,
    private securityMaster: SecurityMasterdropdownService,
    private _SecurityCode: SecurityCodeService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private _voucher: VoucherEntryService,

    private config: NgSelectConfig,) { }
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    console.log(result)
    if (result.RoleDefine[0].RoleId == 1) {
      this.ngBranchCode = result.branchId
      this.angForm.controls['BRANCH_CODE'].enable()
    } else {
      this.ngBranchCode = result.branchId
      this.angForm.controls['BRANCH_CODE'].disable()

    }

    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/datatable-data.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //       title: 'Name',
    //       data: 'name'
    //     }, {
    //       title: 'Position',
    //       data: 'position'
    //     }, {
    //       title: 'Office',
    //       data: 'office'
    //     }, {
    //       title: 'Age',
    //       data: 'age'
    //     }, {
    //       title: 'Start Date',
    //       data: 'date'
    //     }, {
    //       title: 'Salary',
    //       data: 'salary'
    //     }],
    //   dom: "Blrtip",
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ]

    // };

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;
    })
    this.securityMaster.getsecurityMasterList().pipe(first()).subscribe(data => {
      this.security = data;
    })
  }


  schemechange(event) {
    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()
  }
  getBranch() {
    this.getIntroducer()
  }

  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    this.accountedit1 = null
    this.ngsecurityCode = null
    if (this.ngBranchCode == null)
      Swal.fire('Please select branch')
    // else if (this.schemeedit == null)
    //   Swal.fire('Please select Scheme')
    else {
      this.obj = [this.schemeedit, this.ngBranchCode]
      switch (this.getschemename) {
        case 'CC':
          this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
        case 'LN':
          this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
      }
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      LEDGER_BAL: [''],
      SECURITY_CODE: [''],
      BRANCH_CODE: [''],

    });
  }
  submit() {
    // this.formSubmitted = true;
    if (this.angForm.valid) {

    }
    //get bank code and branch code from session
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
  }

  //output functionality
  addItem(newItem: any) {

    console.log('NEWITEM', newItem);


    newItem.AccountType == null ? '' : this.schemeedit = Number(newItem.AccountType)
    newItem.SchemeType == null ? '' : this.getschemename = newItem.SchemeType


    this.getIntroducer()

    this.accountedit1 = newItem.AccountNo
    newItem.AccountNo == null ? '' : this.accountedit = newItem.AccountNo
  }

  Accountnochange(event) {
    this.angForm.patchValue({
      LEDGER_BAL: 0
    })
    this.Accountno = event.bankacno;
    this.accountedit = event.bankacno
    // this.accountedit1 = event.value
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    console.log(result.branch.syspara.CURRENT_DATE)
    let datadate = result.branch.syspara.CURRENT_DATE
    var addInFrom = moment(datadate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY')
    let obj = {
      SCHEME: this.schemeedit,
      BARNCH_CODE: this.ngBranchCode,
      BANKACNO: event.bankacno,
      DATE: addInFrom
    }
    this._voucher.LedgerBal(obj).subscribe(data => {
      this.angForm.patchValue({
        'LEDGER_BAL': Math.abs(data)
      })
    })
  }

  OpenLink(val) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // 
    if (val == 1) {
      this.ownDepositsTrue = true;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 2) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = true;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 3) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = true;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 4) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = true;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 5) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = true;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 6) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = true;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 7) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = true;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 8) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = true;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 9) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = true;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 10) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = true;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 11) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = true;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    // if(val == 12){
    //   this.ownDepositsTrue = false;
    //   this.otherSecurityTrue = false;
    //   this.firePolicyTrue = false;
    //   this.marketSharesTrue = false; 
    //   this.stockStatementTrue = false;
    //   this.govtSecurityAndLicTrue = false;
    //   this.plantAndMachineryTrue = false;
    //   this.furnitureAndFixtureTrue = false;
    //   this.vehicleTrue = false;
    //   this.landAndBuildingsTrue = false;
    //   this.goldAndSilverTrue = false;
    //   this.otherSecurityTrue2 = true;
    //   this.customerInsuranceTrue = false;
    //   this.bookDebtsTrue = false;
    //   this.pleadgeStockTrue = false;
    // }
    if (val == 13) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = true;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = false;
    }
    if (val == 14) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = true;
      this.pleadgeStockTrue = false;
    }
    if (val == 15) {
      this.ownDepositsTrue = false;
      this.otherSecurityTrue = false;
      this.firePolicyTrue = false;
      this.marketSharesTrue = false;
      this.stockStatementTrue = false;
      this.govtSecurityAndLicTrue = false;
      this.plantAndMachineryTrue = false;
      this.furnitureAndFixtureTrue = false;
      this.vehicleTrue = false;
      this.landAndBuildingsTrue = false;
      this.goldAndSilverTrue = false;
      this.otherSecurityTrue2 = false;
      this.customerInsuranceTrue = false;
      this.bookDebtsTrue = false;
      this.pleadgeStockTrue = true;
    }
  }
  securityTrue: boolean = false
  BOOK_DEBTS: boolean = false
  CUST_INSURANCE: boolean = false
  FIRE_POLICY: boolean = false
  FURNITURE_FIXTURE: boolean = false
  GOLD_SILVER: boolean = false
  GOVT_SECU_LIC: boolean = false
  LAND_BUILDING: boolean = false
  MARKET_SHARE: boolean = false
  OTHER_SECURITY: boolean = false
  OWN_DEPOSIT: boolean = false
  PLANT_MACHINARY: boolean = false
  PLEDGE_STOCK: boolean = false
  STOCK_STATEMENT: boolean = false
  VEHICLE: boolean = false
  securityDetails(event) {
    if (event == undefined) {
      this.securityTrue = false
      console.log(event)
    } else {
      this.securityTrue = true
      console.log(event, ' else block')
      this._SecurityCode.getFormData(event.id).subscribe(data => {

        if (data.BOOK_DEBTS == true) {
          this.BOOK_DEBTS = true
        } else {
          this.BOOK_DEBTS = false

          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;

        }
        if (data.CUST_INSURANCE == true) {
          this.CUST_INSURANCE = true
        } else {
          this.CUST_INSURANCE = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.FIRE_POLICY == true) {
          this.FIRE_POLICY = true
        } else {
          this.FIRE_POLICY = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.FURNITURE_FIXTURE == true) {
          this.FURNITURE_FIXTURE = true
        }
        else {
          this.FURNITURE_FIXTURE = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.GOLD_SILVER == true) {
          this.GOLD_SILVER = true
        }
        else {
          this.GOLD_SILVER = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.GOVT_SECU_LIC == true) {
          this.GOVT_SECU_LIC = true
        } else {
          this.GOVT_SECU_LIC = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.LAND_BUILDING == true) {
          this.LAND_BUILDING = true
        } else {
          this.LAND_BUILDING = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.MARKET_SHARE == true) {
          this.MARKET_SHARE = true
        } else {
          this.MARKET_SHARE = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.OTHER_SECURITY == true) {
          this.OTHER_SECURITY = true
        } else {
          this.OTHER_SECURITY = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.OWN_DEPOSIT == true) {
          this.OWN_DEPOSIT = true
        } else {
          this.OWN_DEPOSIT = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.PLANT_MACHINARY == true) {
          this.PLANT_MACHINARY = true
        } else {
          this.PLANT_MACHINARY = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.PLEDGE_STOCK == true) {
          this.PLEDGE_STOCK = true
        } else {
          this.PLEDGE_STOCK = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.STOCK_STATEMENT == true) {
          this.STOCK_STATEMENT = true
        } else {
          this.STOCK_STATEMENT = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }

        if (data.VEHICLE == true) {
          this.VEHICLE = true
        } else {
          this.VEHICLE = false
          this.ownDepositsTrue = false;
          this.otherSecurityTrue = false;
          this.firePolicyTrue = false;
          this.marketSharesTrue = false;
          this.stockStatementTrue = false;
          this.govtSecurityAndLicTrue = false;
          this.plantAndMachineryTrue = false;
          this.furnitureAndFixtureTrue = false;
          this.vehicleTrue = false;
          this.landAndBuildingsTrue = false;
          this.goldAndSilverTrue = false;
          this.otherSecurityTrue2 = false;
          this.customerInsuranceTrue = false;
          this.bookDebtsTrue = false;
          this.pleadgeStockTrue = false;
        }
      });
    }

  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

}
