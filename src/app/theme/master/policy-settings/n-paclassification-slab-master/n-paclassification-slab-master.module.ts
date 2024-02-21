import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NPAClassificationSlabMasterComponent } from './n-paclassification-slab-master.component';
import { NPAClassificationSlabMasterRoutingModule } from './n-paclassification-slab-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { npcslabMasterService } from '../../../../shared/elements/npcslab-master.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from 'src/app/theme/theme.module';
@NgModule({
  imports: [
    CommonModule,
    NPAClassificationSlabMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,

    ThemeModule
  ],
  declarations: [NPAClassificationSlabMasterComponent],
  providers: [npcslabMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NPAClassificationSlabMasterModule { }
