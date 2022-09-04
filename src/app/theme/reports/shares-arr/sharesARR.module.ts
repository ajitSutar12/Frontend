import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesARRComponent } from './shares-arr.component';
import {SharesARRRoutingModule} from './sharesARR-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SharesARRRoutingModule,
    SharedModule

  ],
  declarations: [SharesARRComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SharesARRModule { }
