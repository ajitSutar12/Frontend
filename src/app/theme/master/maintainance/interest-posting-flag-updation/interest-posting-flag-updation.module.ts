import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation.component';
import { InterestPostingFlagUpdationRoutingModule } from './interest-posting-flag-updation-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { InterestPostingFlagUpdationService } from './interest-posting-flag-updation.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
@NgModule({
  imports: [
    CommonModule,
    InterestPostingFlagUpdationRoutingModule,
    DataTablesModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InterestPostingFlagUpdationComponent],
  providers: [InterestPostingFlagUpdationService, SchemeAccountNoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class InterestPostingFlagUpdationModule { }
