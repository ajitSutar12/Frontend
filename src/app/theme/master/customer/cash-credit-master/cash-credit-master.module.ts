import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CashCreditMasterRoutingModule } from './cash-credit-master-routing.module';
import { CashCreditMasterComponent } from './cash-credit-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { AccountTypeService } from '../../../../shared/elements/account-type.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { MemberschemeService } from '../../../../shared/elements/memberscheme.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { OccuptionService } from '../../../../shared/elements/occuption.service';
import { S1Service } from '../../../../shared/elements/s1.service';
import { S2Service } from '../../../../shared/elements/s2.service';
import { S3Service } from '../../../../shared/elements/s3.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { MemberTypeService } from '../../../../shared/elements/member-type.service';
import { MemberService } from '../../../../shared/elements/member.service';
@NgModule({
  imports: [
    CommonModule,
    CashCreditMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CashCreditMasterComponent],
  providers: [TitleService, AccountTypeService, SchemeCodeService, CustomeridService,
    MemberschemeService, MembernoService, CastService, OccuptionService, S1Service, S2Service,
    S3Service, A1Service, CitycodeService, MemberTypeService, MemberService]
})
export class CashCreditMasterModule { }