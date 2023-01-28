import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemMasterParametersService } from '../../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { CommissionSlabMasterRoutingModule } from './commission-slab-master-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { CommissionSlabMasterComponent } from './commission-slab-master.component'
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CommissionSlabMasterComponent],
  imports: [
    CommonModule,
    CommissionSlabMasterRoutingModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SystemMasterParametersService]
})
export class CommissionSlabMasterModule { }
