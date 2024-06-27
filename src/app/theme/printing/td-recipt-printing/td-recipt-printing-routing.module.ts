import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdReciptPrintingComponent } from './td-recipt-printing.component';

const routes: Routes = [
  {
    path: '',
    component: TdReciptPrintingComponent,
    data: {
      title: 'Td-Recipt Printing ',
      status: false
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdReciptPrintingRoutingModule { }
