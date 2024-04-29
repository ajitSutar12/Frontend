import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PassbookEntryPrintComponent } from './passbook-entry-print.component';


const routes: Routes = [
  {
    path: '',
    component: PassbookEntryPrintComponent,
    data: {
      title: 'Passbook Entry Print',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookEntryPrintRoutingModule { }
