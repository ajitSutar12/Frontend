import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlanknoticeComponent } from './blanknotice.component';

const routes: Routes = [
  {
    path: '',
    component:  BlanknoticeComponent,
    data: {
      title: ' Blank Notice Format',
    
      status: true
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlanknoticeRoutingModule { }
