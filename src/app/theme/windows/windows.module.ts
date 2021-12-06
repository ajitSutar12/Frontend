import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsRoutingModule } from './windows-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WindowsRoutingModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class WindowsModule { }
