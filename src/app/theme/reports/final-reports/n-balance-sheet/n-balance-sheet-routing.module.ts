import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NBalanceSheetComponent} from './n-balance-sheet.component';
const routes: Routes = [{
  path: '',
  component:  NBalanceSheetComponent,
  data: {
    title: 'N from balance sheet',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NBalanceSheetRoutingModule { }
