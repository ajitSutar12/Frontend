import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesADRComponent } from './shares-adr.component';
import {SharesADRRoutingModule} from './sharesADR-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    SharesADRRoutingModule,
    SharedModule

  ],
  declarations: [SharesADRComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SharesADRModule { }
