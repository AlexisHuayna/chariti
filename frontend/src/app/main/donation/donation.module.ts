import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { DonationAddComponent } from './donation-add/donation-add.component';


@NgModule({
  declarations: [DonationComponent, DonationListComponent, DonationDetailComponent, DonationAddComponent],
  imports: [
    CommonModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
