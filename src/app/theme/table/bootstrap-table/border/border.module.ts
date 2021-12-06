import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderComponent } from './border.component';
import {BorderRoutingModule} from './border-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    BorderRoutingModule,
    SharedModule
  ],
  declarations: [BorderComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BorderModule { }
