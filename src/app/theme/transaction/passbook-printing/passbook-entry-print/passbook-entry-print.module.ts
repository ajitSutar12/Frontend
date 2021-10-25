import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Scheme12Service} from '../../../../shared/elements/scheme12.service';
import {Scheme13Service} from '../../../../shared/elements/scheme13.service';

import { PassbookEntryPrintComponent} from './passbook-entry-print.component';
import { PassbookEntryPrintRoutingModule } from './passbook-entry-print-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PassbookEntryPrintRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [PassbookEntryPrintComponent],
  providers:[Scheme12Service,Scheme13Service]
})
export class PassbookEntryPrintModule { }
