import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NPAClassificationSlabMasterComponent } from './n-paclassification-slab-master.component';
import { NPAClassificationSlabMasterRoutingModule } from './n-paclassification-slab-master-routing.module';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { npcslabMasterService} from '../../../../shared/elements/npcslab-master.service';
import {SelectModule} from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    NPAClassificationSlabMasterRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,ReactiveFormsModule
   
  ],
  declarations: [NPAClassificationSlabMasterComponent],
  providers: [npcslabMasterService]
})
export class NPAClassificationSlabMasterModule { }
