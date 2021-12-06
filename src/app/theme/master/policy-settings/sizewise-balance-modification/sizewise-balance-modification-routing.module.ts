import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { providers } from 'ng2-toasty';
import {SizewiseBalanceModificationComponent} from './sizewise-balance-modification.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor'
const routes: Routes = [
  {
    path: '',
    component: SizewiseBalanceModificationComponent,
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
  exports: [RouterModule],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SizewiseBalanceModificationRoutingModule { }
