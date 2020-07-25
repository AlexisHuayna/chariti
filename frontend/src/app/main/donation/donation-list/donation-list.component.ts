import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';
import { Donation } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit, OnChanges {

  @Input() props: { idUser: string; idProject: string; viewDetails: boolean; };
  public donations: Donation[] = null;

  constructor(public donationService: DonationService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDonations();
  }

  ngOnInit() {
  }

  getDonations() {
    let donationObservable: Observable<Donation[]>;
    if (this.props != null) {
      if ( this.props.idUser != null && this.props.idProject == null ) {
        donationObservable = this.donationService.getDonationsUser(this.props.idUser);
      } else if (this.props.idUser == null && this.props.idProject != null) {
        donationObservable = this.donationService.getDonationsProject(this.props.idProject);
      } else {
        donationObservable = null;
      }
      if (donationObservable) {
        donationObservable.subscribe({
          next(donationsResponse) {
            this.donations = donationsResponse;
          }
        });
      }
    }
  }

}
