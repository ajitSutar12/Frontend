import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SavingMasterComponent } from './saving-master.component';
// import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component:  SavingMasterComponent,
    data: {
      title: 'Saving Master',
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
export class SavingMasterRoutingModule { }