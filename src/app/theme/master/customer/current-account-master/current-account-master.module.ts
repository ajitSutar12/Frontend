import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountMasterRoutingModule } from './current-account-master-routing.module';
import { CurrentAccountMasterComponent } from './current-account-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { OccuptionService } from '../../../../shared/elements/occuption.service';
import { CategoryService } from '../../../../shared/elements/category.service';
import { OperationService } from '../../../../shared/elements/operation.service';
import { BalanceCategoryService } from '../../../../shared/elements/balancecategory.service';
import { InterestcategoryService } from '../../../../shared/elements/interestcategory.Service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import {BranchService} from '../../../../shared/elements/branch.service';
import {AccountTypeService} from '../../../../shared/elements/account-type.service';
import {AccountcodeService} from '../../../../shared/elements/accountcode.service';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CurrentAccountMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [CurrentAccountMasterComponent],
  providers:[TitleService, SchemeCodeService, AcountnoService, CustomeridService, CastService,
    OccuptionService, CategoryService, OperationService, BalanceCategoryService, CitycodeService, InterestcategoryService,
  BranchService,AccountTypeService,AccountcodeService]
})
export class CurrentAccountMasterModule { }