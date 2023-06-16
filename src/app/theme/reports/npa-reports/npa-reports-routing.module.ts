import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Npa Reports ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  },
  children:[
    {
        path: 'npaRegPercentage',
        loadChildren: () => import('./npa-reg-percentage/npa-reg-percentage.module').then(m => m.NpaRegPercentageModule)
      },
      {
        path: 'npaRegister',
        loadChildren: () => import('./npa-register/npa-register.module').then(m => m.NpaRegisterModule)
      },
      {
        path: 'nonNpaRecovery',
        loadChildren: () => import('./non-npa-recovery/non-npa-recovery.module').then(m => m.NonNpaRecoveryModule)
      },
      {
        path: 'excessCashBalance',
        loadChildren: () => import('./directorwise-npa-reg/directorwise-npa-reg.module').then(m => m.DirectorwiseNpaRegModule)
      },
      {

        path: 'citiwisenpa',
        loadChildren: () => import('./citiwise-npa-reg/citiwise-npa-reg.module').then(m => m.CitiwiseNpaRegModule)

      },
      {

        path: 'analysisnpa',
        loadChildren: () => import('./npa-analysis-report/npa-analysis-report.module').then(m => m.NpaAnalysisReportModule)

      },
      {

        path: 'classificationsecnpa',
        loadChildren: () => import('./npaclassification-secured-unsecurd/npaclassification-secured-unsecurd.module').then(m => m.NpaclassificationSecuredUnsecurdModule)

      },
      {

        path: 'classificationstandardnpa',
        loadChildren: () => import('./npaclassification-standard-nonstandard/npaclassification-standard-nonstandard.module').then(m => m.NpaclassificationStandardNonstandardModule)

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpaReportsRoutingModule { }
