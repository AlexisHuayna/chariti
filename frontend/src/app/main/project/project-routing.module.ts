import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectOwnerComponent } from './project-owner/project-owner.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '', component: ProjectComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent
      }, {
        path: 'add',
        component: ProjectAddComponent
      }
    ]
  }, {
    path: 'owner', component: ProjectOwnerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
