import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { InvestmentAcRenewalRoutingModule } from './investment-ac-renewal-routing.module';
import { InvestmentAcRenewalComponent } from './investment-ac-renewal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from '../../theme.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompanyGroupMasterDropdownService } from 'src/app/shared/dropdownService/company-group-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { StatementTypeService } from 'src/app/shared/elements/statment-type.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositeAcRenewalService } from '../term-deposite-ac-renewal/term-deposite-ac-renewal.service';


@NgModule({
  declarations: [InvestmentAcRenewalComponent],
  imports: [
    CommonModule,
    InvestmentAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule
  ],
  exports: [InvestmentAcRenewalComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, StatementTypeService,
    OwnbranchMasterService,
    CompanyGroupMasterDropdownService,
    MultiVoucherService,
    SavingMasterService,TermDepositeAcRenewalService,
    DatePipe
  ]
})
export class InvestmentAcRenewalModule { }
