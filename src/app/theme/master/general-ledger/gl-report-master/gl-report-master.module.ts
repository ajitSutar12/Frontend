import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlReportMasterComponent } from './gl-report-master.component';
import { GlReportMasterRoutingModule } from './gl-report-master-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { glTypeService } from '../../../../shared/elements/gl-type.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { ReportTMasterDropdownService } from 'src/app/shared/dropdownService/report-type-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { GlAccountsMasterService } from '../gl-accounts-master/gl-accounts-master.service';

@NgModule({
  imports: [
    CommonModule,
    GlReportMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [GlReportMasterComponent],
  
  providers:[glTypeService,ReportTMasterDropdownService,GlAccountsMasterService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class GlReportMasterModule { }
