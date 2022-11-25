import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoancashcreditacOpensanctiondatewiseRoutingModule } from './loancashcreditac-opensanctiondatewise-routing.module';
import { LoancashcreditacOpensanctiondatewiseComponent } from './loancashcreditac-opensanctiondatewise.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';

@NgModule({
  declarations: [LoancashcreditacOpensanctiondatewiseComponent],
  imports: [
    CommonModule,
    LoancashcreditacOpensanctiondatewiseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  exports:[LoancashcreditacOpensanctiondatewiseComponent],

  providers:[OwnbranchMasterService,
   
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }]
})
export class LoancashcreditacOpensanctiondatewiseModule { }
