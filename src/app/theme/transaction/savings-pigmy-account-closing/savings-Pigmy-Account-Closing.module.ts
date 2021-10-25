import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SavingsPigmyAccountClosingComponent } from './savings-pigmy-account-closing.component';
import {  SavingsPigmyAccountClosingRoutingModule } from './savings-Pigmy-Account-Closing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {  StatementTypeService} from '../../../shared/elements/statement-type.service';
import {SelectModule} from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import { Scheme14Service } from '../../../shared/elements/scheme14.service';
import { Scheme15Service } from '../../../shared/elements/scheme15.service';
import { OtherChargesGLAccountService } from '../../../shared/elements/OtherChargesGLAccount.service';
import { NarrationService } from '../../../shared/elements/Narration.service';


//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule({
  imports: [
    CommonModule,
     SavingsPigmyAccountClosingRoutingModule,
     DataTablesModule,
     FileUploadModule,
     SelectModule,
    // BrowserAnimationsModule,
     SharedModule,
     FormsModule, ReactiveFormsModule

    
  ],
  providers:[Scheme14Service,Scheme15Service,OtherChargesGLAccountService,NarrationService],
  declarations: [ SavingsPigmyAccountClosingComponent]
})
export class  SavingsPigmyAccountClosingModule { }