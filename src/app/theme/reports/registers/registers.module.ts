import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersComponent } from './registers.component';
import {RegistersRoutingModule} from './registers-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BnkRegAccountComponent } from './bnk-reg-account/bnk-reg-account.component';
import { BnkRegStandingInstructionComponent } from './bnk-reg-standing-instruction/bnk-reg-standing-instruction.component';
import { BnkRegInterestInstructionComponent } from './bnk-reg-interest-instruction/bnk-reg-interest-instruction.component';
import { BnkRegSpecialInstructionComponent } from './bnk-reg-special-instruction/bnk-reg-special-instruction.component';
import { BnkRegInsurenceComponent } from './bnk-reg-insurence/bnk-reg-insurence.component';
import { BnkODRegisterComponent } from './bnk-odregister/bnk-odregister.component';
import { BnkRegDeadStockComponent } from './bnk-reg-dead-stock/bnk-reg-dead-stock.component';
import { BnkIVOpenAndCloseRegComponent } from './bnk-ivopen-and-close-reg/bnk-ivopen-and-close-reg.component';
import { BnkRegGoldSilverSubReturnComponent } from './bnk-reg-gold-silver-sub-return/bnk-reg-gold-silver-sub-return.component';
import { LockerRentRegisterComponent } from './locker-rent-register/locker-rent-register.component';
import { LockerRegisterComponent } from './locker-register/locker-register.component';

@NgModule({
  imports: [
    CommonModule,
    RegistersRoutingModule ,
    SharedModule
  ],
  declarations: [RegistersComponent, ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RegistersModule { }
