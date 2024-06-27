import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlanknoticeRoutingModule } from './blanknotice-routing.module';
import { BlanknoticeComponent } from './blanknotice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [BlanknoticeComponent],
  imports: [
    CommonModule,
    BlanknoticeRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    QuillModule.forRoot() 
  ]
})
export class BlanknoticeModule { }
