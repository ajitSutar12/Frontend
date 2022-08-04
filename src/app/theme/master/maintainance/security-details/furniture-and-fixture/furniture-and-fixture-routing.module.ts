import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureAndFixtureComponent } from './furniture-and-fixture.component';

const routes: Routes = [
  {
    path: '',
    component: FurnitureAndFixtureComponent,
    data: {
      title: 'Furniture And Fixture',
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
export class FurnitureAndFixtureRoutingModule { }
