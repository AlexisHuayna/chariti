import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipationComponent } from './participation.component';

const routes: Routes = [{ path: '', component: ParticipationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipationRoutingModule { }
