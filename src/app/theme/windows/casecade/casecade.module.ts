import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { GeneralLedgerComponent } from './general-ledger.component';
// import { GeneralLedgerRoutingModule } from './general-ledger-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { CasecadeComponent } from './casecade.component';
import { CasecadeRoutingModule  } from './casecade-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    CasecadeRoutingModule ,
    SharedModule
  ],
  declarations: [CasecadeComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CasecadeModule { }
