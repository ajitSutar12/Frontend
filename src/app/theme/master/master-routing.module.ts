import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Master',
    status: false
  },
  children: [
    {
      path: 'generalLedger',
      loadChildren: () => import('./general-ledger/generalLedger.module').then(m => m.GeneralLedgerModule)
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: 'balanceEntry',
      loadChildren: () => import('./balance-entry/balance-entry.module').then(m => m.BalanceEntryModule)
    },
    {
      path: 'PolicySettings',
      loadChildren: () => import('./policy-settings/policy-settings.module').then(m => m.PolicySettingsModule)
    },
    {
      path: 'Maintainance',
      loadChildren: () => import('./maintainance/maintainance.module').then(m => m.MaintainanceModule)
    },
    {
      path: 'Instruction',
      loadChildren: () => import('./instruction/instruction.module').then(m => m.InstructionModule)
    },
    {
      path: 'Investment',
      loadChildren: () => import('./investment/investment.module').then(m => m.InvestmentModule)
    },
    {
      path: 'Shares',
      loadChildren: () => import('./shares/shares.module').then(m => m.SharesModule)
    },
    {
      path: 'SignatureScanning',
      loadChildren: () => import('./signature-scanning/signature-scanning.module').then(m => m.SignatureScanningModule)
    },
    {
      path: 'DDBankCityMaster',
      loadChildren: () => import('./dd-bank-city-master/dd-bank-city-master.module').then(m => m.DDBankCityMasterModule)
    },
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {
  
 }
