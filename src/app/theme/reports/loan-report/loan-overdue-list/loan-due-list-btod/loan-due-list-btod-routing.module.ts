<<<<<<< Updated upstream
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {LoanDueListBtodComponent} from './loan-due-list-btod.component'

// const routes: Routes = [
//   {
//     path: '',
//     component: LoanDueListBtodComponent,
//     data: {
//       title: 'Loan Due List Between Two Open Dates',
//       icon: 'icon-home',
//       caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
//       status: true
//     }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class LoanDueListBtodRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoanDueListBtodComponent} from './loan-due-list-btod.component'

const routes: Routes = [
  {
    path: '',
    component: LoanDueListBtodComponent,
    data: {
      title: 'Loan Due List Between Two Open Dates',
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
export class LoanDueListBtodRoutingModule { }
>>>>>>> Stashed changes
