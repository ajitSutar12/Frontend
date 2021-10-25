import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlStatementCodeService } from './gl-statement-code.service'
import { SharedModule } from '../../../../shared/shared.module';
import { GlStatementCodeComponent } from './gl-statement-code.component';
import { GlStatementCodeRoutingModule } from './gl-statement-code-routing.module'
import { StatementTypeService } from '../../../../shared/dropdownService/statement-type.service';
import { AlternetCodeDropdownService } from '../../../../shared/dropdownService/alternet-code-dropdown.service';
import { SelectModule } from 'ng-select';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    GlStatementCodeRoutingModule,
    SelectModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule

  ],
  declarations: [GlStatementCodeComponent],
  providers: [StatementTypeService, AlternetCodeDropdownService, GlStatementCodeService]
})
export class GlStatementCodeModule { }
