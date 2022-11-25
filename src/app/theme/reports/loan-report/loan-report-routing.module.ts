import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Loan Report ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
  {
    path: 'loancashcreditac',
    loadChildren: () => import('./loancashcreditac-opensanctiondatewise/loancashcreditac-opensanctiondatewise.module').then(m => m.LoancashcreditacOpensanctiondatewiseModule)
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanReportRoutingModule { }
