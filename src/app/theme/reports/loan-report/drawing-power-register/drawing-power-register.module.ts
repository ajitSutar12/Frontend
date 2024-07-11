import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingPowerRegisterRoutingModule } from './drawing-power-register-routing.module';
import { DrawingPowerRegisterComponent } from './drawing-power-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  declarations: [ DrawingPowerRegisterComponent,],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    DrawingPowerRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module 
  ]
})
export class DrawingPowerRegisterModule { }
