import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
// import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    // JwtHelperService,
    AuthGuard
  ] 
})
export class AuthModule { }
