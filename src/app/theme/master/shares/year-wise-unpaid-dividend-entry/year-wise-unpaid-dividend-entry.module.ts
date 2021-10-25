import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { YearWiseUnpaidDividendEntryRoutingModule } from './year-wise-unpaid-dividend-entry-routing.module';
import { YearWiseUnpaidDividendEntryComponent } from './year-wise-unpaid-dividend-entry.component';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    YearWiseUnpaidDividendEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [YearWiseUnpaidDividendEntryComponent],
  providers: [Scheme1Service, MembernoService]

})
export class YearWiseUnpaidDividendEntryModule { }
