import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividendPostingRoutingModule } from './dividend-posting-routing.module';
import { DividendPostingComponent } from './dividend-posting.component';
import { DataTablesModule } from 'angular-datatables';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DividendPostingRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DividendPostingComponent],
  providers: [SchemeCodeService]

})
export class DividendPostingModule { }
