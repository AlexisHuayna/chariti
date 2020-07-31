import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationComponent } from './participation.component';
import { ParticipationAddComponent } from './participation-add/participation-add.component';


@NgModule({
  declarations: [ParticipationComponent, ParticipationAddComponent],
  imports: [
    CommonModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule { }
