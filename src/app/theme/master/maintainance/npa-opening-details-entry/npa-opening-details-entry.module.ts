import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry.component';
import { NpaOpeningDetailsEntryRoutingModule } from './npa-opening-details-entry-routing.module'
import { SelectModule } from 'ng-select';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { S5Service } from '../../../../shared/elements/s5.service';
import { Ac5Service } from '../../../../shared/elements/ac5.service';
import { S16Service } from '../../../../shared/elements/s16.service';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NpaOpeningDetailsEntryRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StatementTypeService, S5Service, Ac5Service, S16Service, NpaOpeningDetailsEntryService],
  declarations: [NpaOpeningDetailsEntryComponent],
  bootstrap: [NpaOpeningDetailsEntryComponent]
})
export class NpaOpeningDetailsEntryModule { }

