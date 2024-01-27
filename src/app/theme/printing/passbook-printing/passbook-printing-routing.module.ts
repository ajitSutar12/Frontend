import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassbookPrintingComponent} from './passbook-printing.component';

const routes: Routes = [
  {
    path: '',
    // component: PassbookPrintingComponent,
    data: {
      title: 'Passbook Printing',
      // icon: 'icon-home',
      // caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children:[
      {
        path:'passbookIssue',
        loadChildren: () => import('./passbook-issue/passbook-issue.module').then(m => m.PassbookIssueModule)
      },
      {
        path:'passbookEntryPrint',
        loadChildren: () => import('./passbook-entry-print/passbook-entry-print.module').then(m => m.PassbookEntryPrintModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookPrintingRoutingModule { }