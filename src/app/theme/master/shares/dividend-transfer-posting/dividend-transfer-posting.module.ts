import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividendTransferPostingRoutingModule } from './dividend-transfer-posting-routing.module';
import { DividendTransferPostingComponent } from './dividend-transfer-posting.component';
import { DataTablesModule } from 'angular-datatables';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DividendTransferPostingRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DividendTransferPostingComponent],
  providers: [SchemeCodeService]
})
export class DividendTransferPostingModule { }
