import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PigmyAgentMasterRoutingModule } from './pigmy-agent-master-routing.module';
import { PigmyAgentMasterComponent } from './pigmy-agent-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { SchemeTypeService } from '../../../../shared/elements/scheme-type.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PigmyAgentMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [PigmyAgentMasterComponent],
  providers: [TitleService, SchemeCodeService, CustomeridService, CitycodeService, SchemeTypeService, BranchService, CastService]
})
export class PigmyAgentMasterModule { }