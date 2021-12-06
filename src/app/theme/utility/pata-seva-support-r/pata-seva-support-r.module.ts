import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PataSevaSupportRComponent } from './pata-seva-support-r.component';
import { PataSevaSupportRRoutingModule } from './pata-seva-support-r-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    PataSevaSupportRRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [PataSevaSupportRComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class PataSevaSupportRModule { }
