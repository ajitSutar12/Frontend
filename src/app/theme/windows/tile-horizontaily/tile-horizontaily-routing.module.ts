import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TileHorizontailyComponent} from './tile-horizontaily.component';

const routes: Routes = [
  {
    path: '',
    component: TileHorizontailyComponent,
    data: {
      title: 'Tile Horizontaily',
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
export class TileHorizontailyRoutingModule { }
