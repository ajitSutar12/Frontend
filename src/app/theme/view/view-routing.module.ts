import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    data:{
      title: 'View',
      status: false
    },
    children:[
        {
         path:'accountEnquiry',
       loadChildren: () => import('./account-enquiry/account-enquiry.module').then(m => m.AccountEnquiryModule)
       },
       {
        path: 'masterCard',
        loadChildren: () => import('./master-card/master-card.module').then(m => m.MasterCardModule)
      },
      {
        path: 'ledgerView',
        loadChildren: () => import('./ledger-view/ledger-view.module').then(m => m.LedgerViewModule)
      },
      {
        path: 'sharesLedgerView',
        loadChildren: () => import('./shares-ledger-view/shares-ledger-view.module').then(m => m.SharesLedgerViewModule)
      },
      {
        path: 'managerView',
        loadChildren: () => import('./manager-view/manager-view.module').then(m => m.ManagerViewModule)
      },
      {
        path: 'voucherView',
        loadChildren: () => import('./voucher-view/voucher-view.module').then(m => m.VoucherViewModule)
      },
      {
        path: 'customerView',
        loadChildren: () => import('./customer-view/customer-view.module').then(m => m.CustomerViewModule)
      },
      {
        path: 'guarantorView',
        loadChildren: () => import('./guarantor-view/guarantor-view.module').then(m => m.GuarantorViewModule)
      },
      {
        path: 'memberView',
        loadChildren: () => import('./member-view/member-view.module').then(m => m.MemberViewModule)
      },
      {
        path: 'memberLiablityView',
        loadChildren: () => import('./member-liablity-view/member-liablity-view.module').then(m => m.MemberLiablityViewModule)
      },
      {
        path: 'otherView',
        loadChildren: () => import('./other-view/other-view.module').then(m => m.OtherViewModule)
      },
      {
        path: 'lockerView',
        loadChildren: () => import('./locker-view/locker-view.module').then(m => m.LockerViewModule)
      },
      {
        path: 'memberguaranter',
        loadChildren: () => import('./member-guaranter-details/member-guaranter-details.module').then(m => m.MemberGuaranterDetailsModule)
      },
      {
        path: 'KYCDocument',
        loadChildren: () => import('./kyc-document/kyc-document.module').then(m => m.KYCDocumentModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
