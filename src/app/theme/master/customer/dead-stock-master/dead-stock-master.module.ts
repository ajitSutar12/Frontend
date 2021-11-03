import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeadStockMasterRoutingModule } from './dead-stock-master-routing.module';
import { DeadStockMasterComponent } from './dead-stock-master.component';
import {SelectModule} from 'ng-select';
import {DeadstockmasterService} from './dead-stock-master.service'
import { ItemCatMasterDropdownService} from '../../../../shared/dropdownService/item-category-master-dropdown.service';
import { DepriciationCatDropdownMasterService} from '../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { ACMasterDropdownService} from '../../../../shared/dropdownService/ac-master-dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    DeadStockMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
  ],
  declarations: [
    DeadStockMasterComponent
  ],
  providers:[
    DeadstockmasterService,
    ItemCatMasterDropdownService,
    DepriciationCatDropdownMasterService,
    ACMasterDropdownService
  ]
})
export class DeadStockMasterModule { }