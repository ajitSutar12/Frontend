import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {DataTablesModule} from 'angular-datatables';  
import {TermDepositsMasterRoutingModule } from './term-deposits-master-routing.module';
import { TermDepositsMasterComponent } from './term-deposits-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    TermDepositsMasterRoutingModule,
    NgbModule,
    DataTablesModule,
    SelectModule,
    FormsModule,ReactiveFormsModule   
  ],
  declarations: [TermDepositsMasterComponent],
  providers:[TitleService,AccountcodeService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class  TermDepositsMasterModule { }