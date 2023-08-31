import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NPAClassificationSlabMasterComponent} from './n-paclassification-slab-master.component';

const routes: Routes = [
  {
    path: '',
    component: NPAClassificationSlabMasterComponent,
    data: {
      title: 'NPA Classi Slab Mast',
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
export class NPAClassificationSlabMasterRoutingModule { }
