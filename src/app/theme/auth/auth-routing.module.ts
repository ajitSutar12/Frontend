import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'resetpassword',
        loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule)
      },

      {
        path: 'lock-screen',
        loadChildren: () => import('./lock-screen/lock-screen.module').then(m => m.LockScreenModule)
      },

      {
        path: 'otpform',
        loadChildren: () => import('./otpform/otpform.module').then(m => m.OtpformModule)
      },

      {
        path: 'setpassword',
        loadChildren: () => import('./setpassword/setpassword.module').then(m => m.SetpasswordModule)
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
