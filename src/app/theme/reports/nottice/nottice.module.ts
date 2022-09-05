import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotticeComponent } from './nottice.component';
import {NotticeRoutingModule} from './nottice-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    NotticeRoutingModule,
    SharedModule

  ],
  declarations: [NotticeComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NotticeModule { }
