import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditInterestCalculationComponent } from './edit-interest-calculation.component';
import { EditInterestCalculationRoutingModule } from './edit-interest-calculation-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    EditInterestCalculationRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ EditInterestCalculationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class EditInterestCalculationModule { }
