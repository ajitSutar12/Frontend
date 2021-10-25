import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignatureScanningComponent} from './signature-scanning.component';


const routes: Routes = [
  {
    path: '',
    component: SignatureScanningComponent,
    data: {
      title: 'Signature Scanning',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }


    // children: [
    //   {
    //     path: 'first', // child route path
    //     component: FirstComponent, // child route component that the router renders
    //   },
     
    // ],
   
  },
  // {
  //   path: 'first',
  //   component: FirstComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignatureScanningRoutingModule { }
