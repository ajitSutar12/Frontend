import { NgModule } from '@angular/core';
import { CustomerIdRoutingModule } from './customer-id-routing.module';
import { CustomerIdComponent } from './customer-id.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Id1Service } from '../../../../shared/elements/id1.service';
import { MemberService } from '../../../../shared/elements/member.service';
import { MsService } from '../../../../shared/elements/ms.service';
import { CustomerIdService } from './customer-id.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerIdRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CustomerIdComponent],
  providers: [StatementTypeService, Id1Service, MemberService, MsService, CustomerIdService]
})
export class CustomerIdModule { }