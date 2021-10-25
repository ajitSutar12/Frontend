import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlReportMasterComponent } from './gl-report-master.component';
import { GlReportMasterRoutingModule } from './gl-report-master-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { glTypeService } from '../../../../shared/elements/gl-type.service';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    GlReportMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    SelectModule
  ],
  declarations: [GlReportMasterComponent],
  providers: [glTypeService]
})
export class GlReportMasterModule { }
