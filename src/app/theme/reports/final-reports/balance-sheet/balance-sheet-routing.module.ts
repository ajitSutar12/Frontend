import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BalanceSheetComponent} from './balance-sheet/balance-sheet.component';

const routes: Routes = [{
  path: '',
  component:  BalanceSheetComponent,
  data: {
    title: 'Balance sheet',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceSheetRoutingModule { }


