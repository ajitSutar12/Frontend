import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldAndSilverComponent } from './gold-and-silver.component';

const routes: Routes = [
  {
    path: '',
    component: GoldAndSilverComponent,
    data: {
      title: 'Gold And Silver',
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
export class GoldAndSilverRoutingModule { }
