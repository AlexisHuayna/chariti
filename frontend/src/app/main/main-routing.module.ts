import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
      { path: 'donation', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule) },
      { path: 'participation', loadChildren: () => import('./participation/participation.module').then(m => m.ParticipationModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
