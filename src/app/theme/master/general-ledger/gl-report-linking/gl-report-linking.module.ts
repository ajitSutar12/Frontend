import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlReportLinkingComponent } from './gl-report-linking.component';
import { GlReportLinkingRoutingModule } from './gl-report-linking-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    GlReportLinkingRoutingModule,
    DataTablesModule,
    NgbModule
  ],
  declarations: [GlReportLinkingComponent]
})
export class GlReportLinkingModule { }
