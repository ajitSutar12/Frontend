import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DividendTransferEntryRoutingModule } from './dividend-transfer-entry-routing.module';
import { DividendTransferEntryComponent } from './dividend-transfer-entry.component';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    DividendTransferEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DividendTransferEntryComponent],
  providers: [Scheme1Service, MembernoService, AcountnoService]
})
export class DividendTransferEntryModule { }
