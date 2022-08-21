import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframecomponentComponent } from './iframecomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [IframecomponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[IframecomponentComponent]
})
export class IframecomponentModule { }
