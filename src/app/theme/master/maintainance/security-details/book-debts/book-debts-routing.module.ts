import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDebtsComponent } from './book-debts.component';

const routes: Routes = [
  {
    path: '',
    component: BookDebtsComponent,
    data: {
      title: 'Book Debts',
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
export class BookDebtsRoutingModule { }
