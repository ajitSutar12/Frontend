import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


 
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { ColorPickerModule } from 'ngx-color-picker';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SelectModule } from 'ng-select';

import { SizewiseBalanceModificationComponent } from './sizewise-balance-modification.component';
import { SizewiseBalanceModificationRoutingModule } from './sizewise-balance-modification-routing.module';
import { SharedModule} from '../../../../shared/shared.module';
import { DepositSizeWiseBalanceComponent } from './deposit-size-wise-balance/deposit-size-wise-balance.component';
import { LoanSizeWiseBalanceComponent } from './loan-size-wise-balance/loan-size-wise-balance.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { CommissionSlabMasterComponent } from './commission-slab-master/commission-slab-master.component';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import {CommissionSlabMasterModule} from './commission-slab-master/commission-slab-master.module'


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    SizewiseBalanceModificationRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule,
    ColorPickerModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    PerfectScrollbarModule,
    FormsModule,ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    CommissionSlabMasterModule
    

  ],
  providers: [
    {
      
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [ SizewiseBalanceModificationComponent, DepositSizeWiseBalanceComponent, LoanSizeWiseBalanceComponent, CommissionSlabMasterComponent, ],
  bootstrap: [SizewiseBalanceModificationComponent]
})
export class SizewiseBalanceModificationModule { }
