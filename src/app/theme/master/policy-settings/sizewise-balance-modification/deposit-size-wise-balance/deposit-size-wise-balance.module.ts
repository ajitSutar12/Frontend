import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositSizeWiseBalanceComponent } from './deposit-size-wise-balance.component';
import { DepositSizeWiseBalanceRoutingModule } from './deposit-size-wise-balance-routing.module'; 

import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../../../shared/shared.module';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    DepositSizeWiseBalanceRoutingModule,
    DataTablesModule,
    NgbModule,
    SharedModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [DepositSizeWiseBalanceComponent]
}) 
export class DepositSizeWiseBalanceModule { }
