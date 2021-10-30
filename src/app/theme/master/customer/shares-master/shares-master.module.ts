import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SharesMasterRoutingModule } from './shares-master-routing.module';
import { SharesMasterComponent } from './shares-master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberTypeService } from '../../../../shared/elements/member-type.service';
import { SelectModule } from 'ng-select';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { SignTypeService } from '../../../../shared/elements/sign-type.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { A2Service } from '../../../../shared/elements/a2.service';
import { CatService } from '../../../../shared/elements/cat.service';
import { City1Service } from '../../../../shared/elements/city1.service';
import { City2Service } from '../../../../shared/elements/city2.service';
import { Sal1Service } from '../../../../shared/elements/sal1.service';
import { Sal2Service } from '../../../../shared/elements/sal2.service';
import { City3Service } from '../../../../shared/elements/city3.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MembershipTypeDropdownService } from '../../../../shared/dropdownService/membership-type-dropdown.service'
import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
import { ShareMasterService } from './shares-master.service'
@NgModule({
  imports: [
    CommonModule,
    SharesMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule,

  ],
  providers: [City3Service, Sal2Service,
    Sal1Service, StatementTypeService, MemberTypeService,
    SignTypeService, A1Service, A2Service, CatService,
    City1Service, City2Service,
    MembershipTypeDropdownService,
    SignTypeDropdownService,
    ShareMasterService],
  declarations: [SharesMasterComponent],
  bootstrap: [SharesMasterComponent]
})
export class SharesMasterModule { }