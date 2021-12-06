import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassingRoutingModule } from './passing-routing.module';
// import { MasterUnlockComponent } from './master-unlock/master-unlock.component';
// import { UnapprovalComponent } from './unapproval/unapproval.component';
// import { CentralisedPassingComponent } from './centralised-passing/centralised-passing.component';
// import { SharesTransactionPassingComponent } from './shares-transaction-passing/shares-transaction-passing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PassingRoutingModule,
    
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class PassingModule { }
