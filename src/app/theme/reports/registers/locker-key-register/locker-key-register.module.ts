import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerKeyRegisterRoutingModule } from './locker-key-register-routing.module';
import { LockerKeyRegisterComponent } from './locker-key-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';


@NgModule({
  declarations: [LockerKeyRegisterComponent],
  providers:[OwnbranchMasterService],
  imports: [
    CommonModule,
    LockerKeyRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class LockerKeyRegisterModule { }
