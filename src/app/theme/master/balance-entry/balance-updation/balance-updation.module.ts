import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceUpdationRoutingModule } from './balance-updation.routing.module';
import { BalanceUpdationComponent } from './balance-updation.component';
import { DebitService } from '../../../../shared/elements/debit.service';
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BalanceUpdationService } from './balance-updation.service';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { LazyLoadEvent } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    BalanceUpdationRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    // InfiniteScrollModule,
    NgxDatatableModule,
    // LazyLoadEvent,
  ],
  declarations: [BalanceUpdationComponent],
  providers: [
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeAccountNoService,
    SchemeCodeDropdownService,
    BalanceUpdationService,
    DebitService, {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class BalanceUpdationModule { }
