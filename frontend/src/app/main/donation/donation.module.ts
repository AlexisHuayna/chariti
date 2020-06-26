import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';


@NgModule({
  declarations: [DonationComponent, DonationListComponent, DonationDetailComponent],
  imports: [
    CommonModule,
    DonationRoutingModule,
    ReactiveFormsModule
  ]
})
export class DonationModule { }
