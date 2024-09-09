import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensiveListComponent } from './expensive-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensiveListComponent ,
    data: {
      title: 'Excess Cash Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
   
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensiveListRoutingModule { }
