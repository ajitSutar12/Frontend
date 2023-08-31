import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountwiseDocumentAcceptanceComponent } from './accountwise-document-acceptance.component';


const routes: Routes = [
  {
    path: '',
    component: AccountwiseDocumentAcceptanceComponent,
    data: {
      title: 'Acc Wise Doc Accept',
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
export class AccountwiseDocumentAcceptanceRoutingModule { }
