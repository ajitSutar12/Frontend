import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockStatementComponent } from './stock-statement.component';

const routes: Routes = [
  {
    path: '',
    component: StockStatementComponent,
    data: {
      title: 'Stock Statement',
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
export class StockStatementRoutingModule { }
