import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketSharesComponent } from './market-shares.component';

const routes: Routes = [
  {
    path: '',
    component: MarketSharesComponent,
    data: {
      title: 'Market Shares',
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
export class MarketSharesRoutingModule { }
