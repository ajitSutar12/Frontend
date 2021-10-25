import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Windows',
      status: false
    },
    children: [
      {
        path: 'casecade',
        loadChildren: () => import('./casecade/casecade.module').then(m => m.CasecadeModule)
      },
      {
        path: 'tileHorizontaily',
        loadChildren: () => import('./tile-horizontaily/tile-horizontaily.module').then(m => m.TileHorizontailyModule)
      },
      {
        path: 'tileVertically',
        loadChildren: () => import('./tile-vertically/tile-vertically.module').then(m => m.TileVerticallyModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsRoutingModule { }
