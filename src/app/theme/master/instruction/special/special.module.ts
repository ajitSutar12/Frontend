import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExucuteOnService } from '../../../../shared/elements/exucute-on.service';
import { SpecialRoutingModule } from './special-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SpecialRoutingModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [ExucuteOnService,Scheme1Service,AcountnoService]
})
export class SpecialModule { }
