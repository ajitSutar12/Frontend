import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingComponent } from './sizing.component';
import {SizingRoutingModule} from './sizing-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    SizingRoutingModule,
    SharedModule
  ],
  declarations: [SizingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SizingModule { }
