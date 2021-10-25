import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendTransferEntryComponent } from './dividend-transfer-entry.component';


const routes: Routes = [
  {
    path: '',
    component: DividendTransferEntryComponent,
    data: {
      title: 'Dividend Transfer Entry',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendTransferEntryRoutingModule { }
