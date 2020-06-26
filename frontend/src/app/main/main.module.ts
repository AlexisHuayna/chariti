import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
