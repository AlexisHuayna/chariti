import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationComponent } from './participation.component';
import { ParticipationAddComponent } from './participation-add/participation-add.component';
import { ParticipationListComponent } from './participation-list/participation-list.component';


@NgModule({
  declarations: [ParticipationComponent, ParticipationAddComponent, ParticipationListComponent],
  imports: [
    CommonModule,
    ParticipationRoutingModule
  ],
  exports: [
    ParticipationAddComponent,
    ParticipationListComponent,
    ParticipationComponent,
  ],
})
export class ParticipationModule { }
