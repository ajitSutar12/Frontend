import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DividendCalculationRoutingModule } from './dividend-calculation-routing.module';
import { DividendCalculationComponent } from './dividend-calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    DividendCalculationRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DividendCalculationComponent],
  providers: [SchemeCodeService, MembernoService, BranchService]

})
export class DividendCalculationModule { }
