import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlReportLinkingComponent} from './gl-report-linking.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
const routes: Routes = [
  {
    path: '',
    component: GlReportLinkingComponent,
    data: {
      title: 'GL Report Linking',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  exports: [RouterModule]
})
export class GlReportLinkingRoutingModule { }
