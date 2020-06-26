import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectOwnerComponent } from './project-owner/project-owner.component';
import { DonationAddComponent } from '../donation/donation-add/donation-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, ProjectDetailComponent, ProjectListComponent, ProjectAddComponent,
                  ProjectOwnerComponent, DonationAddComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
