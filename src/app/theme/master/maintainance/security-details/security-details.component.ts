import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { S1Service } from '../../../../shared/elements/s1.service';
import { Ac1Service } from '../../../../shared/elements/ac1.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {

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
  //title select variables
  simpleOption: Array<IOption> = this.S1Service.getCharacters();
  Ac: Array<IOption> = this.Ac1Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  constructor(private fb: FormBuilder, private_router: Router, public S1Service: S1Service, public Ac1Service: Ac1Service) { this.createForm() }
  ngOnInit(): void {
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
    this.dataSub = this.S1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.Ac1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
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
      Scheme: [''],
      AccountNo: [''],
      LedgerBalance: ['']
    });
  }
  submit() {
    console.log(this.angForm.valid);

    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  OpenLink(val) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // debugger
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
