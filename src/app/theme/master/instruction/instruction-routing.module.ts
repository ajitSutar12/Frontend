import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {InstructionComponent} from './instruction.component';

const routes: Routes = [
  {
    path: '',
    // component: InstructionComponent,
    data: {
      title: 'Instruction',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children: [
      {
        path: 'overDraft',
        loadChildren: () => import('./over-draft/over-draft.module').then(m => m.OverDraftModule)
      },
      {
        path: 'standingInstruction',
        loadChildren: () => import('./standing-instruction/standing-instruction.module').then(m => m.StandingInstructionModule)
      },
      {
        path: 'interestInstruction',
        loadChildren: () => import('./interest-instruction/interest-instruction.module').then(m => m.InterestInstructionModule)
      },
      {
        path: 'special',
        loadChildren: () => import('./special/special.module').then(m => m.SpecialModule)
      },
      {
        path: 'freezeAccount',
        loadChildren: () => import('./freeze-account/freeze-account.module').then(m => m.FreezeAccountModule)
      },
      {
        path: 'reminderInstruction',
        loadChildren: () => import('./reminder-instruction/reminder-instruction.module').then(m => m.ReminderInstructionModule)
      },
      {
        path: 'revokeStandingInstructions',
        loadChildren: () => import('./revoke-standing-instructions/revoke-standing-instructions.module').then(m => m.RevokeStandingInstructionsModule)
      },
      {
        path: 'revokeInterestInstruction',
        loadChildren: () => import('./revoke-interest-instruction/revoke-interest-instruction.module').then(m => m.RevokeInterestInstructionModule)
      },
      {
        path: 'revokeSpecialInstruction',
        loadChildren: () => import('./revoke-special-instruction/revoke-special-instruction.module').then(m => m.RevokeSpecialInstructionModule)
      },
      {
        path: 'lienMarkClear',
        loadChildren: () => import('./lien-mark-clear/lien-mark-clear.module').then(m => m.LienMarkClearModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructionRoutingModule { }
