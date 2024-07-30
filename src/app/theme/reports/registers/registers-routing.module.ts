import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistersComponent} from './registers.component';

const routes: Routes = [
  {
    path: '',
    // component: RegistersComponent,
    data: {
      title: 'Registers',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children:[
      {
        path: 'BnkRegAccount',
        loadChildren: () => import('./bnk-reg-account/bnk-reg-account.module').then(m => m.BnkRegAccountModule)
      },
       {
         path: 'BnkRegStandingInstruction',
        loadChildren: () => import('./bnk-reg-standing-instruction/bnk-reg-standing-instruction.module').then(m => m.BnkRegStandingInstructionModule)
       },
       {
        path: 'BnkRegInterestInstruction',
       loadChildren: () => import('./bnk-reg-interest-instruction/bnk-reg-interest-instruction.module').then(m => m.BnkRegInterestInstructionModule)
      },
       {
         path: 'BnkRegSpecialInstruction',
        loadChildren: () => import('./bnk-reg-special-instruction/bnk-reg-special-instruction.module').then(m => m.BnkRegSpecialInstructionModule)
       },
       {
         path: 'BnkRegInsurence',
        loadChildren: () => import('./bnk-reg-insurence/bnk-reg-insurence.module').then(m => m.BnkRegInsurenceModule)
       },
       {
         path: 'BnkODRegister',
        loadChildren: () => import('./bnk-odregister/bnk-odregister.module').then(m => m.BnkODRegisterModule)
       },
      {
        path: 'BnkRegDeadStock',
        loadChildren: () => import('./bnk-reg-dead-stock/bnk-reg-dead-stock.module').then(m => m.BnkRegDeadStockModule)
      },
      {
        path: 'BnkIVOpenAndCloseReg',
        loadChildren: () => import('./bnk-ivopen-and-close-reg/bnk-ivopen-and-close-reg.module').then(m => m.BnkIVOpenAndCloseRegModule)
      },
      {
        path: 'BnkRegGoldSilverSubReturn',
        loadChildren: () => import('./bnk-reg-gold-silver-sub-return/bnk-reg-gold-silver-sub-return.module').then(m => m.BnkRegGoldSilverSubReturnModule)
      },
      {
        path: 'iframe3',
        loadChildren: () => import('./iframe3/iframe3.module').then(m => m.Iframe3Module)
      },
      {
        path: 'DepositReceiptRegister',
        loadChildren: () => import('./deposit-receipt-register/deposit-receipt-register.module').then(m => m.DepositReceiptRegisterModule)
      },
      {
        path: 'lockerRentRegister',
        loadChildren: () => import('./locker-rent-register/locker-rent-register.module').then(m => m.LockerRentRegisterModule)
      },
      {
        path: 'lockerRegister',
        loadChildren: () => import('./locker-register/locker-register.module').then(m => m.LockerRegisterModule)
      },
      {
        path: 'lockerkeyregister',
        loadChildren: () => import('./locker-key-register/locker-key-register.module').then(m => m.LockerKeyRegisterModule)
      },
      {
        path: 'totalchallandetails',
        loadChildren: () => import('./totalchallandetails/totalchallandetails.module').then(m => m.TotalchallandetailsModule)
      },
      {
        path: 'closedaccountlist',
        loadChildren: () => import('./closed-account-list/closed-account-list.module').then(m => m.ClosedAccountListModule)
      },
      {
        path: 'accountopenbetweendates',
        loadChildren: () => import('./account-open-between-dates/account-open-between-dates.module').then(m => m.AccountOpenBetweenDatesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
