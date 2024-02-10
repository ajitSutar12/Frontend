import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupDataRoutingModule } from './backup-data-routing.module';
import { BackupDataComponent } from './backup-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BackupDataComponent],
  imports: [
    CommonModule,
    BackupDataRoutingModule,
    SharedModule
  ]
})
export class BackupDataModule { }
