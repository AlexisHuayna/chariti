import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent, canActivate: [AuthGuard]
      },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
      { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule), canActivate: [AuthGuard] },
      { path: 'donation', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule), canActivate: [AuthGuard] },
      { path: 'participation', loadChildren: () => import('./participation/participation.module').then(m => m.ParticipationModule)
        , canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
