import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation.component';
import { InterestPostingFlagUpdationRoutingModule } from './interest-posting-flag-updation-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { S6Service } from '../../../../shared/elements/s6.service';
import { Ac6Service } from '../../../../shared/elements/ac6.service';
import { S17Service } from '../../../../shared/elements/s17.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    InterestPostingFlagUpdationRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InterestPostingFlagUpdationComponent],
  providers: [S6Service, Ac6Service, S17Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class InterestPostingFlagUpdationModule { }
