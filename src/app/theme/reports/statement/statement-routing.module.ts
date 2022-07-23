import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatementComponent} from './statement.component';

const routes: Routes = [
  {
    path: '',
    // component: StatementComponent,
    data: {
      title: 'Statement',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children:[
      {
        path: 'BnkGlAcStatement',
        loadChildren: () => import('./bnk-gl-ac-statement/bnk-gl-ac-statement.module').then(m => m.BnkGlAcStatementModule)
      },
       {
         path: 'BnkAcStatement',
         loadChildren: () => import('./bnk-ac-statement/bnk-ac-statement.module').then(m => m.BnkAcStatementModule)
       },
       {
         path: 'BnkLNamtStatement',
         loadChildren: () => import('./bnk-lnamt-statement/bnk-lnamt-statement.module').then(m => m.BnkLNamtStatementModule)
       },
       {
         path: 'BnkTDStatement',
         loadChildren: () => import('./bnk-tdstatement/bnk-tdstatement.module').then(m => m.BnkTDStatementModule)
       },
       {
         path: 'BnkGlIntStatement',
         loadChildren: () => import('./bnk-gl-int-statement/bnk-gl-int-statement.module').then(m => m.BnkGlIntStatementModule)
       },
       {
         path: 'BnkMemStatement',
         loadChildren: () => import('./bnk-mem-statement/bnk-mem-statement.module').then(m => m.BnkMemStatementModule)
       }
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementRoutingModule { }
