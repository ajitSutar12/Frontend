import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassbookPrintingComponent } from './passbook-printing.component';
import { PassbookPrintingRoutingModule } from './passbook-printing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import { PassbookEntryPrintComponent } from './passbook-entry-print/passbook-entry-print.component';
// import { PassbookIssueComponent } from './passbook-issue/passbook-issue.component';



@NgModule({
  imports: [
    CommonModule,
    PassbookPrintingRoutingModule,
    SharedModule
  ],
  declarations: [PassbookPrintingComponent]
})
export class PassbookPrintingModule { }