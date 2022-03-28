import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashCreditAcRenewalComponent } from './cash-credit-ac-renewal.component';
import { CashCreditAcRenewalRoutingModule } from './cash-credit-ac-renewal-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {SelectModule} from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { IntrestCategoryMasterDropdownService } from 'src/app/shared/dropdownService/interest-category-master-dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    CashCreditAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule,
    // SelectModule
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [CashCreditAcRenewalComponent],
  exports:[CashCreditAcRenewalComponent],
  providers:[IntrestCategoryMasterDropdownService,SystemMasterParametersService,SchemeCodeDropdownService, SchemeAccountNoService,OwnbranchMasterService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashCreditAcRenewalModule { }