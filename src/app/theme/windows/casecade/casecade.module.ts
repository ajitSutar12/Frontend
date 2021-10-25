import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { GeneralLedgerComponent } from './general-ledger.component';
// import { GeneralLedgerRoutingModule } from './general-ledger-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { CasecadeComponent } from './casecade.component';
import { CasecadeRoutingModule  } from './casecade-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CasecadeRoutingModule ,
    SharedModule
  ],
  declarations: [CasecadeComponent]
})
export class CasecadeModule { }
