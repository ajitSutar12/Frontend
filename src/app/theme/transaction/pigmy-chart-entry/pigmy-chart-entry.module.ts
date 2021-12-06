import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigmyChartEntryComponent } from './pigmy-chart-entry.component';
import { PigmyChartEntryRoutingModule } from './pigmy-chart-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SelectModule} from 'ng-select';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AgentCodeService } from '../../../shared/elements/agent-code.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PigmyChartEntryRoutingModule,
    SharedModule,
    ColorPickerModule,
    FormsModule,
    DataTablesModule,
    SelectModule
  ],
  declarations: [PigmyChartEntryComponent],
  providers: [SchemeCodeService, AgentCodeService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class PigmyChartEntryModule { }