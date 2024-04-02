import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryFlagUpdationRoutingModule } from './recovery-flag-updation-routing.module';
import { RecoveryFlagUpdationComponent } from './recovery-flag-updation.component';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'src/app/theme/theme.module';
import { InterestPostingFlagUpdationService } from '../interest-posting-flag-updation/interest-posting-flag-updation.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  declarations: [RecoveryFlagUpdationComponent],
  imports: [
    CommonModule,
    RecoveryFlagUpdationRoutingModule,
    DataTablesModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule
  ],
  providers: [InterestPostingFlagUpdationService, SchemeAccountNoService,OwnbranchMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class RecoveryFlagUpdationModule { }
