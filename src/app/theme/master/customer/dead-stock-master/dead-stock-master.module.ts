import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeadStockMasterRoutingModule } from './dead-stock-master-routing.module';
import { DeadStockMasterComponent } from './dead-stock-master.component';
import { DeadstockmasterService } from './dead-stock-master.service'
import { ItemCatMasterDropdownService } from '../../../../shared/dropdownService/item-category-master-dropdown.service';
import { DepriciationCatDropdownMasterService } from '../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,
    DeadStockMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [
    DeadStockMasterComponent
  ],
  exports: [
    DeadStockMasterComponent
  ],
  providers: [
    DeadstockmasterService,
    ItemCatMasterDropdownService,
    DepriciationCatDropdownMasterService,
    ACMasterDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class DeadStockMasterModule { }