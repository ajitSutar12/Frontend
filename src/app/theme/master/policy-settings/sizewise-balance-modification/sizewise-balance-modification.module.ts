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
    FormsModule,ReactiveFormsModule

  ],
  providers: [
    {
      
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      
    },
  ],
  declarations: [ SizewiseBalanceModificationComponent, DepositSizeWiseBalanceComponent, LoanSizeWiseBalanceComponent],
  bootstrap: [SizewiseBalanceModificationComponent]
})
export class SizewiseBalanceModificationModule { }
