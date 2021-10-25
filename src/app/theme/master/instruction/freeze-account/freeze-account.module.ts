import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreezeAccountRoutingModule } from './freeze-account-routing.module'
import {freezeAccountService} from '../../../../shared/elements/freeze-account.service'
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    DataTablesModule,
    FreezeAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [freezeAccountService,Scheme1Service,AcountnoService]
})
export class FreezeAccountModule { }
