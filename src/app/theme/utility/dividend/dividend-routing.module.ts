import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendComponent } from './dividend.component';

const routes: Routes = [
  {
    path: '',
    //component: DividendComponent,
    data: {
      title: 'Dividend',
      status: false
    },
    children: [
      {
        path: 'dividendList',
        loadChildren: () => import('./dividend-list/dividend-list.module').then(m => m.DividendListModule)
      },
      {
        path: 'dividendPost',
        loadChildren: () => import('./dividend-post/dividend-post.module').then(m => m.DividendPostModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendRoutingModule { }
