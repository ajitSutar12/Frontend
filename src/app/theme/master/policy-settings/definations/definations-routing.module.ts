import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefinationsComponent} from './definations.component';
import { TermDepositIRComponent } from './term-deposit-ir/term-deposit-ir.component';


const routes: Routes = [
  // {
  //   path: '',
  //   data: {
  //     title: 'Definations',
  //     status: false
  //   },
  //   children: [
  //     {
  //       path: 'termDepositIR',
  //       loadChildren: () => import('./term-deposit-ir/term-deposit-ir.module').then(m => m.TermDepositIR)
  //     },

  //   ]
  // }
  // {
  //   path: 'termDepositIR',
  //   component: TermDepositIRComponent,
  //   data:{src: 'definations/term-deposit-ir/term-deposit-ir'}
  // }
  {
    path: '',
    component: DefinationsComponent,
    data: {
      title: 'Definations',
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
export class DefinationsRoutingModule { }
