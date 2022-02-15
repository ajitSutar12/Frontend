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
import { NgSelectConfig } from '@ng-select/ng-select';

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
  acno: any;


  angForm: FormGroup;
  ownDepositsTrue: boolean = true;
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

  Data: any;

  //title select variables
  simpleOption: Array<IOption> = this.S1Service.getCharacters();
  Ac: Array<IOption> = this.Ac1Service.getCharacters();

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

    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private config: NgSelectConfig,) { }
  ngOnInit(): void {
    this.createForm()
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Position',
          data: 'position'
        }, {
          title: 'Office',
          data: 'office'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Start Date',
          data: 'date'
        }, {
          title: 'Salary',
          data: 'salary'
        }],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]

    };


    this.runTimer();
    // this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    //   console.log(this.scheme = data);
    //   this.scheme = data
    // })

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;
    })
    console.log(this.scheme)
    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType1).pipe(first()).subscribe(data => {
    //   console.log(this.scheme = data);
    //   this.scheme = data
    // })
    // this.dataSub = this.S1Service.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
    // this.dataSub = this.Ac1Service.loadCharacters().subscribe((options) => {
    //   this.characters = options;
    // });
  }

  // getIntro(event) {
  //   console.log(event)
  //   // this.getscheme = event.id
  //   this.getschemename = event.name
  //   this.getIntroducer()
  // }

  //input functionality

  schemechange(event) {

    //  let result = this.angForm.value;
    //  this.scheme = result.AC_TYPE;
    //  console.log(this.scheme);
    console.log(event)
    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }
  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    debugger
    // console.log(this.acno, this.accountedit, "this.acno, this.accountedit")
    // this.obj = [this.getscheme, this.branchcode.id]

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;

    this.obj = [this.schemeedit, branchCode]
    console.log(this.obj, "this.obj")
    console.log(this.getschemename, "this.getschemename")

    switch (this.getschemename) {

      case 'CC':
        console.log("Cash Credit Loan");
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
          console.log(this.schemeACNo)
        })
        break;
      case 'LN':
        console.log("Term Loan");
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
          console.log(this.schemeACNo)

        })
        break;


    }
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
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      LEDGER_BAL: ['']
    });
  }
  submit() {
    this.formSubmitted = true;
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
    //get bank code and branch code from session
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
  }
  //output functionality
  addItem(newItem: any) {
    this.schemeedit = newItem.scheme;
    this.accountedit = newItem.account;
    this.getschemename = newItem.AC_ACNOTYPE
  }


  Accountnochange(event) {
    console.log(event)
    // let result = this.angForm.value;
    this.Accountno = event.value;
    this.accountedit = event.value
    console.log(this.Accountno);

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

}
