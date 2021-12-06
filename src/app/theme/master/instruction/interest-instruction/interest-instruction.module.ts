import {DataTablesModule} from 'angular-datatables';

import {SelectModule} from 'ng-select';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterestInstructionRoutingModule } from './interest-instruction-routing.module'
import {FrequencyService} from '../../../../shared/elements/frequency.service';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    InterestInstructionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FrequencyService,Scheme1Service,AcountnoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
],
  declarations: []
})
export class InterestInstructionModule { }
 