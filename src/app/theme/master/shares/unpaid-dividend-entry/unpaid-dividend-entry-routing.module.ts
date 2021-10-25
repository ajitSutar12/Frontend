import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UnpaidDividendEntryComponent } from './unpaid-dividend-entry.component';


const routes: Routes = [
  {
    path: '',
    component: UnpaidDividendEntryComponent,
    data: {
      title: 'Unpaid Dividend Entry',
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
export class UnpaidDividendEntryRoutingModule { }
