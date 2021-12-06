import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './styling.component';
import {StylingRoutingModule} from './styling-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    StylingRoutingModule,
    SharedModule
  ],
  declarations: [StylingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class StylingModule { }
