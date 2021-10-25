import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlStatementCodeComponent} from './gl-statement-code.component';

const routes: Routes = [
  {
    path: '',
    component: GlStatementCodeComponent,
    data: {
      title: 'GL Statement Code',
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
export class GlStatementCodeRoutingModule { }
