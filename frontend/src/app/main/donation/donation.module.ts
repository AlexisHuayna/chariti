import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { DonationAddComponent } from '../donation/donation-add/donation-add.component';
import { DonationListComponent } from '../donation/donation-list/donation-list.component';

@NgModule({
  declarations: [DonationComponent, DonationDetailComponent, DonationAddComponent, DonationListComponent],
  imports: [
    CommonModule,
    DonationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DonationAddComponent,
    DonationDetailComponent,
    DonationListComponent,
    DonationComponent
  ]
})
export class DonationModule { }
