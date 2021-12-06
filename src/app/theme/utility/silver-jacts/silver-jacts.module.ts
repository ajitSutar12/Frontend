import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilverJACTSComponent } from './silver-jacts.component';
import { SilverJACTSRoutingModule } from './silver-jacts-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SilverJACTSRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SilverJACTSComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SilverJACTSModule { }
