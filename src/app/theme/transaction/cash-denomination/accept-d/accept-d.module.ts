import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptDComponent } from './accept-d.component';
import { AcceptDRoutingModule } from './accept-d-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoucherEntryModule } from "../../voucher-entry/voucher-entry.module";
import { SharedModule } from "../../../../shared/shared.module";
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    AcceptDRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    VoucherEntryModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule
],
  declarations: [AcceptDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class AcceptDModule { }