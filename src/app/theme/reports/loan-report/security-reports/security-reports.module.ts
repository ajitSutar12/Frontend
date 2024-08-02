import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityReportsRoutingModule } from './security-reports-routing.module';
import { SecurityReportsComponent } from './security-reports.component';
import { AllSecuritySumarryReportComponent } from './all-security-sumarry-report/all-security-sumarry-report.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import{GoldSilverStockComponent} from './gold-silver-stock/gold-silver-stock.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  declarations: [SecurityReportsComponent, AllSecuritySumarryReportComponent,GoldSilverStockComponent],
  providers: [OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,SystemMasterParametersService
  ],
  imports: [
    CommonModule,
    SecurityReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PerfectScrollbarModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class SecurityReportsModule { }
