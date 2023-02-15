import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlReportLinkingComponent } from './gl-report-linking.component';
import { GlReportLinkingRoutingModule } from './gl-report-linking-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReportTMasterDropdownService } from 'src/app/shared/dropdownService/report-type-master-dropdown.service';
import { StatementCodeDropdownService } from 'src/app/shared/dropdownService/statement-code-dropdown.service';
import { GlAccountsMasterService } from '../gl-accounts-master/gl-accounts-master.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    GlReportLinkingRoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [GlReportLinkingComponent],
  providers:[ReportTMasterDropdownService,StatementCodeDropdownService,GlAccountsMasterService,SystemMasterParametersService]
})
export class GlReportLinkingModule { }
