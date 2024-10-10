import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { InterestPostingComponent } from './interest-posting.component';
import { InterestPostingRoutingModule } from './interest-posting-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    InterestPostingRoutingModule,
    NgSelectModule,
    SharedModule,
    
  ],
  declarations: [InterestPostingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class InterestPostingModule { }
