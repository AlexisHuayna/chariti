import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationComponent } from './participation.component';
import { ParticipationListComponent } from './participation-list/participation-list.component';


@NgModule({
  declarations: [ParticipationComponent, ParticipationListComponent],
  imports: [
    CommonModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule { }
