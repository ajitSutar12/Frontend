import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryProcessingComponent } from './recovery-processing.component';
import { RecoveryProcessingRoutingModule } from './recovery-processing-routing.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import {DataTablesModule} from 'angular-datatables';
import { SharedModule } from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RecoveryProcessingRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    NgbModule,
    SharedModule

  ],
  declarations: [RecoveryProcessingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class RecoveryProcessingModule { }
