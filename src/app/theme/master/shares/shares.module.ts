import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesComponent } from './shares.component';
import { SharesRoutingModule } from './shares-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';




@NgModule({
  imports: [
    CommonModule,
    SharesRoutingModule,
    SharedModule,

  ],
  declarations: [SharesComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SharesModule { }

