import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { CustomerViewComponent } from './customer-view.component';
import { CustomerViewRoutingModule } from './customer-view-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { LegderViewService } from '../ledger-view/ledger-view.service';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    CustomerViewRoutingModule,
    SharedModule,
    NgSelectModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CustomerViewComponent],
  providers: [CustomerIDMasterDropdownService, LegderViewService, CustomerIdService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CustomerViewModule { }