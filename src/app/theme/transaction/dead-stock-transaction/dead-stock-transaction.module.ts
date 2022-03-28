import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadStockTransactionComponent } from './dead-stock-transaction.component';
import { DeadStockTransactionRoutingModule } from './dead-stock-transaction-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
// import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import {DeadStockTransactionService} from './dead-stock-transaction.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    DeadStockTransactionRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    // SelectModule
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [ACMasterDropdownService,DeadStockTransactionService,SchemeCodeDropdownService,SchemeAccountNoService,OwnbranchMasterService,SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [DeadStockTransactionComponent],
  exports:[DeadStockTransactionComponent],
})
export class DeadStockTransactionModule { }