import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import { BasicLoginRoutingModule } from './basic-login-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [BasicLoginComponent],
  providers: [AuthService,
  ]
})
export class BasicLoginModule { }
