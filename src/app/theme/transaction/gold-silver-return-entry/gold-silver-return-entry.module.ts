import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  GoldSilverReturnEntryComponent } from './gold-silver-return-entry.component';
import {  GoldSilverReturnEntryRoutingModule } from './gold-silver-return-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {  StatementTypeService} from '../../../shared/elements/statement-type.service';
import {  Scheme16Service} from '../../../shared/elements/scheme16.service';
import {  Scheme17Service} from '../../../shared/elements/scheme17.service';
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule({
  imports: [
    CommonModule,
    GoldSilverReturnEntryRoutingModule,
     DataTablesModule,
     FileUploadModule,
     SelectModule,
     SharedModule,
     FormsModule, ReactiveFormsModule

    
  ],
  providers:[Scheme16Service,Scheme17Service],
  declarations: [ GoldSilverReturnEntryComponent]
})
export class  GoldSilverReturnEntryModule { }