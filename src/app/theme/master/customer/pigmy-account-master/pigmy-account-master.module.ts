import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import {PigmyAccountMasterRoutingModule } from './pigmy-account-master-routing.module';

import { PigmyAccountMasterComponent } from './pigmy-account-master.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { SelectModule } from 'ng-select';



@NgModule({
  imports: [
    CommonModule,
    PigmyAccountMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,ReactiveFormsModule,
    SelectModule
   

  ],
  declarations: [PigmyAccountMasterComponent],
  providers:[SchemeCodeService]
})
export class  PigmyAccountMasterModule { }