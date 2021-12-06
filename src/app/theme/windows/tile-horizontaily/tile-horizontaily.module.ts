import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TileHorizontailyComponent} from './tile-horizontaily.component';
import { TileHorizontailyRoutingModule } from './tile-horizontaily-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    TileHorizontailyRoutingModule,
    SharedModule
  ],
  declarations: [TileHorizontailyComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TileHorizontailyModule { }
