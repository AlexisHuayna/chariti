import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';
import { Donation, EmbeddedDonation } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/services/project/project.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit, OnChanges {

  @Input() props: { idUser: string; idProject: string; viewDetails: boolean; };
  public donations: EmbeddedDonation[] = null;

  constructor(public donationService: DonationService, public projectService: ProjectService, public userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDonations();
  }

  ngOnInit() {
    this.getDonations();
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
        donationObservable.subscribe(
          donationsResponse => {
            this.donations = [];
            if (this.props.idUser != null) {
              this.setProjects(donationsResponse);
           } else {
              this.setUsers(donationsResponse);
           }
          }
        );
      }
    }
  }

  public setUsers(donationsResponse): void {
    this.projectService.getProject(this.props.idProject).subscribe(
       projectResponse => {
          donationsResponse.forEach(donation => {
             this.userService.getUser(donation.UserId).subscribe(user => {
                const newDonation: EmbeddedDonation = {
                  _id: donation._id,
                  Project: projectResponse,
                  User: user,
                  DonationAmount: donation.DonationAmount,
                  DonationDate: donation.DonationDate,
                  DonationStatus: donation.DonationStatus,
                };
                this.donations.push(newDonation);
             });
          });

       }
    );
 }

 public setProjects(donationsResponse): void {
    this.userService.getUser(this.props.idUser).subscribe(
       userResponse => {
          donationsResponse.forEach(donation => {
             this.projectService.getProject(donation.ProjectId).subscribe(project => {
                const newDonation: EmbeddedDonation = {
                  _id: donation._id,
                  Project: project,
                  User: userResponse,
                  DonationAmount: donation.DonationAmount,
                  DonationDate: donation.DonationDate,
                  DonationStatus: donation.DonationStatus
                };
                this.donations.push(newDonation);
             });
          });
       }
    );
 }

}
