import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemewiseDepositeAcDetailsComponent} from './schemewise-deposite-ac-details.component'
const routes: Routes = [
  {
    path: '',
    component: SchemewiseDepositeAcDetailsComponent,
    data: {
      title: 'Schemewise Deposite Account Details',
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
export class SchemewiseDepositeAcDetailsRoutingModule { } 
