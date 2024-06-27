import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdTransactionRoutingModule } from './dd-transaction-routing.module';
import { DdTransactionComponent } from './dd-transaction.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DdTransactionComponent],
  imports: [
    CommonModule,
    DdTransactionRoutingModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers: [OwnbranchMasterService],

})
export class DdTransactionModule { }
