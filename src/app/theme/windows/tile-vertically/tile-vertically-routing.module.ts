import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TileVerticallyComponent } from './tile-vertically.component';

const routes: Routes = [
  {
    path: '',
    component: TileVerticallyComponent,
    data: {
      title: 'Tile Vertically',
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
export class TileVerticallyRoutingModule { }
