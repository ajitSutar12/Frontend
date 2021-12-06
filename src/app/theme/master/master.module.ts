import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';




 import { MasterRoutingModule } from './master-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterRoutingModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MasterModule {

 
 }
