import { Component, OnInit, Input } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';
import { Donation } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  @Input() props: { idUser: string; idProject: string; viewDetails: boolean; } = null;
  public donations: Donation[];

  constructor(public donationService: DonationService) {
    let donationObservable: Observable<Donation[]>;
    if (this.props != null) {
      if ( this.props.idUser != null && this.props.idProject != null ) {
        donationObservable = donationService.getUserDonationsProject(this.props.idProject, this.props.idUser);
      } else if (this.props.idUser != null) {
        donationObservable = donationService.getDonationsUser(this.props.idUser);
      } else if (this.props.idProject != null) {
        donationObservable = donationService.getDonationsProject(this.props.idProject);
      } else {
        donationObservable = donationService.getLastDonations();
      }
      donationObservable.subscribe({
        next(donationsResponse) {
          this.donations = donationsResponse;
        }
      });
    }
   }

  ngOnInit() {
  }

}
