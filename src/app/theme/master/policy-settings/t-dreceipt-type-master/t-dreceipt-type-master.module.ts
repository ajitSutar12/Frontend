import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDReceiptTypeMasterComponent } from './t-dreceipt-type-master.component';
import { TDReceiptTypeMasterRoutingModule } from './t-dreceipt-type-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TDReceiptService } from './t-dreceipt-type-master.component.service'
import { TdReceiptService } from '../../../../shared/dropdownService/tdReceipt-type.service';
@NgModule({
  imports: [
    CommonModule,
    TDReceiptTypeMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    SelectModule

  ],
  declarations: [TDReceiptTypeMasterComponent],
  providers: [TDReceiptService,TdReceiptService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    
    multi: true
  },]
})
export class TDReceiptTypeMasterModule { }
