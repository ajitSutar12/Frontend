import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotticeComponent} from './nottice.component';

const routes: Routes = [
  {
    path: '',
    // component: NotticeComponent,
    data: {
      title: 'Nottice/ Latter ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children:[
      {
          path: 'noticeformat',
          loadChildren: () => import('./notice-format/notice-format.module').then(m => m.NoticeFormatModule)
        },
        {
          path: 'noticereport',
          loadChildren: () => import('./notice-report/notice-report.module').then(m => m.NoticeReportModule)
        },
        // {
        //   path: 'blankNotice',
        //   loadChildren: () => import('./blanknotice/blanknotice.module').then(m => m.BlanknoticeModule)
        // },
        // {
        //   path: 'showNotice',
        //   loadChildren: () => import('./createnotice/createnotice.module').then(m => m.CreatenoticeModule)
        // },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotticeRoutingModule { }
