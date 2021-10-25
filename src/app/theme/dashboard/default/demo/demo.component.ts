import { Component, OnInit, OnDestroy , Input } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
// Multiple Selection
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {SelectOptionService} from '../../../../shared/elements/select-option.service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

// Date Picker

import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerService, Rgba} from 'ngx-color-picker';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

    const now = new Date();

export class Cmyk {
  constructor(public c: number, public m: number, public y: number, public k: number) { }
}


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss',
  '../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css',
],
animations: [
  trigger('fadeInOutTranslate', [
    transition(':enter', [
      style({opacity: 0}),
      animate('400ms ease-in-out', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translate(0)'}),
      animate('400ms ease-in-out', style({opacity: 0}))
    ])
  ])
]
})
export class DemoComponent implements OnInit, OnDestroy{
  intrestTrue=true;
  StandingTrue=false;
  BalanceTrue=false;
  OverDraftTrue=false;
  ServiceTrue=false;

  firstTrue = true;
  

  //Akash Y
  transactionsTrue=true;
  clearingTrue=false;
  overdraftTrue=false;
  otherTrue=false;

  //Akash P
  InterestApplicableTrue = true;
  PenalInterestApplicableTrue = false;
  OverDraftInteresttypeTrue = false;
  otherSettingsTrue = false;
  cashCredittypeTrue = false;

  //Ajinkya
  depositSchemeTypeTrue = true;
  interestApplicableTrue = false;
  interestMethodTrue = false;
  installmentAmountTrue = false;
  penalInterestApplicableTrue = false;
  maturityAmountTrue = false;
  TDPeriodTrue = false;
  multipleofXXXTrue = false;
  instructionTrue = false;
  otherSettingTrue = false;

  interest_ApplicableTrue = true;
  standingInstructionTrue = false;
  chequeBookMinBalTrue = false;
  balanceEntryAllowTrue = false;
  overdraftIntApplicableTrue  = false;

  

  //Shubhangi
  InterestApplicable = true;
  StandingInstruction = false;
  ChequeBookMinBal = false;
  BalanceEntryAllow = false;
  OverdraftIntApplicable = false;

  //Mansi
  first_True = true;
  secondTrue = false;
  thirdTrue = false;
  fourthTrue = false;
  fifthTrue = false;
  sixthTrue = false;

  LoanTypeTrue= true;
  InterestApplicable_True= false;
  PanelInterestApplicableTrue= false;
  Grace_MoratoriumPeriodTrue= false;
  LoanOtherSettingsTrue =false;
  InstallmentSettingsTrue=false;


  FaceValueDividendTrue=true;
  OtherSettings_True=false;

  //sonali
  CommissionApplicableTrue=true;
  OtherSettings1True=false;
  //Datatable

  dtExportButtonOptions: any = {};

  //Multiselect
  
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  countries: Array<IOption> = this.selectOptionService.getCountries();
  selectedCountry = 'IN';
  selectedCountries: Array<string> = ['IN', 'BE', 'LU', 'NL'];

  private dataSub: Subscription = null;

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  autocompleteItemsAsObjects = [
    {value: 'Alabama', id: 0},
    {value: 'Wyoming', id: 1},
    {value: 'Coming', id: 2},
    {value: 'Josephin Doe', id: 3},
    {value: 'Henry Die', id: 4},
    {value: 'Lary Doe', id: 5},
    {value: 'Alice', id: 6},
    {value: 'Alia', id: 7},
    {value: 'Suzen', id: 8},
    {value: 'Michael Scofield', id: 9},
    {value: 'Irina Shayk', id: 10},
    {value: 'Sara Tancredi', id: 11},
    {value: 'Daizy Mendize', id: 12},
    {value: 'Loren Scofield', id: 13},
    {value: 'Shayk', id: 14},
    {value: 'Sara', id: 15},
    {value: 'Doe', id: 16},
    {value: 'Lary', id: 17},
    {value: 'Roni Sommerfield', id: 18},
    {value: 'Mickey Amavisca', id: 19},
    {value: 'Dorethea Hennigan', id: 20},
    {value: 'Marisha Haughey', id: 21},
    {value: 'Justin Czajkowski', id: 22},
    {value: 'Reyes Hodges', id: 23},
    {value: 'Vicky Hadley', id: 24},
    {value: 'Lezlie Baumert', id: 25},
    {value: 'Otha Vanorden', id: 26},
    {value: 'Glayds Inabinet', id: 27},
    {value: 'Hang Owsley', id: 28},
    {value: 'Carlotta Buttner', id: 29},
    {value: 'Randa Vanloan', id: 30},
    {value: 'Elana Fulk', id: 31},
    {value: 'Amos Spearman', id: 32},
    {value: 'Samon', id: 33},
    {value: 'John Doe', id:  34}
  ];
  constructor(public selectOptionService: SelectOptionService) { }

  modelPopup: NgbDateStruct;

  ngOnInit() {
    
    // Datatable

    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>';
            
          
          }
         
          
          
        },
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Delete</button>';
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

    //Multiselect
    
    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }
  OpenLink(val)
  {
    debugger
    if(val == 1)
    {
      this.firstTrue = true;
      
    }
   
    if(val == 4)
    {
      this.intrestTrue=true;
      this.StandingTrue=false;
      this.BalanceTrue=false;
      this.OverDraftTrue=false;
      this.ServiceTrue=false;
    }
    if(val == 5)
    {
      this.intrestTrue=false;
      this.StandingTrue=true;
      this.BalanceTrue=false;
      this.OverDraftTrue=false;
      this.ServiceTrue=false;
    }
    if(val == 6)
    {
      this.intrestTrue=false;
      this.StandingTrue=false;
      this.BalanceTrue=true;
      this.OverDraftTrue=false;
      this.ServiceTrue=false;
    }
    
    if(val == 7)
    {
      this.intrestTrue=false;
      this.StandingTrue=false;
      this.BalanceTrue=false;
      this.OverDraftTrue=true;
      this.ServiceTrue=false;
    }
    
    if(val == 8)
    {
      this.intrestTrue=false;
      this.StandingTrue=false;
      this.BalanceTrue=false;
      this.OverDraftTrue=false;
      this.ServiceTrue=true;
    }
    if(val == 21)
    {
      this.transactionsTrue=true;
      this.clearingTrue=false;
      this.overdraftTrue=false;
      this.otherTrue=false;

    }
    if(val == 22)
    {
      this.transactionsTrue=false;
      this.clearingTrue=true;
      this.overdraftTrue=false;
      this.otherTrue=false;

    }
    if(val == 23)
    {
      this.transactionsTrue=false;
      this.clearingTrue=false;
      this.overdraftTrue=true;
      this.otherTrue=false;

    }
    if(val == 24)
    {
      this.transactionsTrue=false;
      this.clearingTrue=false;
      this.overdraftTrue=false;
      this.otherTrue=true;

    }
    if(val == 31)
    {
      this.InterestApplicableTrue = true;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }
    if(val == 32)
    {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = true;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if(val == 33)
    {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = true;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if(val == 34)
    {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = true;
      this.cashCredittypeTrue = false;
    }

    if(val == 35)
    {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = true;
    }
    if(val ==51)
    {
      this.depositSchemeTypeTrue = true;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if(val == 52)
    {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = true;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if(val == 53){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = true;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if(val == 54){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = true;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if(val == 55){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = true;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if(val == 56){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = true;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if(val == 57){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = true;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if(val == 58){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = true;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if(val == 59){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = true;
      this.otherSettingTrue = false;

    }
    if(val == 60){
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = true;

    }
    if(val == 41)
    {
      this.InterestApplicable = true;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if(val == 42)
    {
      this.InterestApplicable = false;
      this.StandingInstruction = true;
      this.ChequeBookMinBal = false;
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if(val == 43)
    {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = true; 
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = false;
    }
    if(val == 44)
    {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false; 
      this.BalanceEntryAllow = true;
      this.OverdraftIntApplicable = false;
    }
    if(val == 45)
    {
      this.InterestApplicable = false;
      this.StandingInstruction = false;
      this.ChequeBookMinBal = false; 
      this.BalanceEntryAllow = false;
      this.OverdraftIntApplicable = true;
    }
    if(val == 71)
    {
      this.interest_ApplicableTrue = true;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue  = false;
    }
    if(val == 72)
    {
      this.interest_ApplicableTrue = false;
      this.standingInstructionTrue = true;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue  = false;
    }
    if(val == 73){
      this.interest_ApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = true;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue  = false;
    }
    if(val == 74){
      this.interest_ApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = true;
      this.overdraftIntApplicableTrue  = false;
    }
    if(val == 75){
      this.interest_ApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue  = true;
    }
    if(val == 91)
    {
      this.first_True = true;
      this.secondTrue = false;
      this.thirdTrue = false;
      this.fourthTrue = false;
      this.fifthTrue = false;
      this.sixthTrue = false;
    }
    if(val == 92)
    {
      this.first_True = false;
      this.secondTrue = true;
      this.thirdTrue = false;
      this.fourthTrue = false;
      this.fifthTrue = false;
      this.sixthTrue = false;
     
    }
    if(val == 93)
    {
      this.first_True = false;
      this.secondTrue = false;
      this.thirdTrue = true;
      this.fourthTrue = false;
      this.fifthTrue = false;
      this.sixthTrue = false;
     
    }
    if(val == 94)
    {
      this.first_True = false;
      this.secondTrue = false;
      this.thirdTrue = false;
      this.fourthTrue = true;
      this.fifthTrue = false;
      this.sixthTrue = false;
     
    }
    if(val == 95)
    {
      this.first_True = false;
      this.secondTrue = false;
      this.thirdTrue = false;
      this.fourthTrue = false;
      this.fifthTrue = true;
      this.sixthTrue = false;
     
    }
    if(val == 96)
    {
      this.first_True = false;
      this.secondTrue = false;
      this.thirdTrue = false;
      this.fourthTrue = false;
      this.fifthTrue = false;
      this.sixthTrue = true;

    }
    if(val == 101)
    {
    this.FaceValueDividendTrue=true;
    this.OtherSettings_True=false;
    }
    if(val ==102)
    {
      this.FaceValueDividendTrue=false;
      this.OtherSettings_True=true;
    }
    if(val == 81)
    {
      this.LoanTypeTrue= true;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=false;
     
    }
    if(val == 82)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= true;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=false;
     
     
    } if(val == 83)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= true;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=false;
     
     
    } if(val == 84)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= true;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=false;
     
    } if(val == 85)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =true;
      this.InstallmentSettingsTrue=false;
     
     
    } if(val == 86)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=true;
     
     
    } if(val == 87)
    {
      this.LoanTypeTrue= false;
      this.InterestApplicable_True= false;
      this.PanelInterestApplicableTrue= false;
      this.Grace_MoratoriumPeriodTrue= false;
      this.LoanOtherSettingsTrue =false;
      this.InstallmentSettingsTrue=true;
     
    }
    if(val ==105)
    {
      this.CommissionApplicableTrue=true;
      this.OtherSettings1True=false;

    }
    if(val ==106)
    {
      this.CommissionApplicableTrue=false;
      this.OtherSettings1True=true;

    }


  }

  selectToday() {
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  ngOnDestroy() {
    if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
}
