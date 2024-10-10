import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ExchangeCashRoutingModule } from './exchange-cash-routing.module';
import { ExchangeCashComponent } from './exchange-cash.component';
import {ExchangeCashRoutingModule} from './exchange-cash-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { CashierUmService } from 'src/app/theme/utility/cashier-um/cashier-um.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { CashInDenominationComponent } from './cash-in-denomination/cash-in-denomination.component';
import { CashOutDenominationComponent } from './cash-out-denomination/cash-out-denomination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashDenominationService } from '../cash-denomination.service';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [ExchangeCashComponent,
    CashInDenominationComponent,
    CashOutDenominationComponent,
  ],

  imports: [
    CommonModule,
    ExchangeCashRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,

    DataTablesModule,
    NgSelectModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()

  ],
  providers:[SystemMasterParametersService,
    SchemeCodeDropdownService,
    CashierUmService,
    CashDenominationService,
    
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true ,
  },]
})
export class ExchangeCashModule { }
