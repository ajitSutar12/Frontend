import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';
import { Demo1RoutingModule } from './demo1-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import {SelectModule} from 'ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleService } from '../../../../shared/elements/title.service';
import { Demo1Service } from './demo1.service';
import { TreeviewModule } from 'ngx-treeview';
@NgModule({
  imports: [
    CommonModule,
    Demo1RoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    NgbModule,
    HttpClientModule,
    TreeviewModule.forRoot()
  ],
  declarations: [Demo1Component],
  providers: [StatementTypeService,TitleService,Demo1Service]
})
export class Demo1Module { }
