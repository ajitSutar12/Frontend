import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamatGSMRoutingModule } from './anamat-gsm-routing.module';
import { AnamatGSMComponent } from './anamat-gsm.component';
import { DataTablesModule } from 'angular-datatables';
import { TitleService } from '../../../../shared/elements/title.service';
import { MsService } from '../../../../shared/elements/ms.service';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {anamatGSMService} from './anamat-gsm.service'
import { City3Service } from '../../../../shared/elements/city3.service';

@NgModule({
  imports: [
    CommonModule,
    AnamatGSMRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [AnamatGSMComponent],
  providers: [
    TitleService, 
    MsService,
    AccountcodeService,
    CustomeridService,
    City3Service,
    anamatGSMService
  ]
})
export class AnamatGSMModule { }