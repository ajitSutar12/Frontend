import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement.component';
import {StatementRoutingModule} from './statement-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BnkGlAcStatementComponent } from './bnk-gl-ac-statement/bnk-gl-ac-statement.component';
import { BnkAcStatementComponent } from './bnk-ac-statement/bnk-ac-statement.component';
import { BnkLNamtStatementComponent } from './bnk-lnamt-statement/bnk-lnamt-statement.component';
import { BnkTDStatementComponent } from './bnk-tdstatement/bnk-tdstatement.component';
// import { BnkGlIntStatementComponent } from './bnk-gl-int-statement/bnk-gl-int-statement.component';
// import { BnkMemStatementComponent } from './bnk-mem-statement/bnk-mem-statement.component';



@NgModule({
  imports: [
    CommonModule,
    StatementRoutingModule,
    SharedModule

  ],
  declarations: [StatementComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class StatementModule { }
