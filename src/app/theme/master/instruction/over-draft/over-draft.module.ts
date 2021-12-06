import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverDraftRoutingModule } from './over-draft-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    OverDraftRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers : [SchemeCodeService,AcountnoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },


]
})
export class OverDraftModule { }
