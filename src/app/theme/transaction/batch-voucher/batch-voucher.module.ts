import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  BatchVoucherComponent } from './batch-voucher.component';
import {  BatchVoucherRoutingModule } from './batch-voucher-routing.module';



import {SharedModule} from '../../../shared/shared.module';
import {  StatementTypeService} from '../../../shared/elements/statement-type.service';
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule({
  imports: [
    CommonModule,
     BatchVoucherRoutingModule,
     DataTablesModule,
     FileUploadModule,
     SelectModule,
    // BrowserAnimationsModule,
     SharedModule,

    
  ],
  providers:[StatementTypeService],
  declarations: [ BatchVoucherComponent]
})
export class  BatchVoucherModule { }