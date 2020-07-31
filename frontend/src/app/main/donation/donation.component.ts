import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User, Donation, Project, EmbeddedDonation } from 'src/app/other/interfaces';
import { DonationService } from 'src/app/services/donation/donation.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  currentUser: User;
  donationsOnClosedProjects: EmbeddedDonation[] = [];
  donationsOnOpenProjects: EmbeddedDonation[] = [];

  constructor(public userService: UserService, public authService: AuthService, public donationService: DonationService,
              public projectService: ProjectService) {
              }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(
      res => {
        this.userService.getUserByEmail(res.email).subscribe(
          user => {
            this.currentUser = user;
            this.getMyDonations();
          }
        );
      }
    );
  }

  getMyDonations() {
    this.donationService.getDonationsUser(this.currentUser._id).subscribe(
      donationsResponse => {
        donationsResponse.forEach(donation => {
          const newEmbeddedDonation: EmbeddedDonation = {
            _id: donation._id,
            UserId: donation.UserId,
            Project: null,
            DonationAmount: donation.DonationAmount,
            DonationDate: donation.DonationDate,
            DonationStatus: donation.DonationStatus,
          };
          this.projectService.getProject(donation.ProjectId).subscribe(
            projectResponse => {
              newEmbeddedDonation.Project = projectResponse;
              if ( projectResponse.ProjectDateClose < new Date()) {
                this.donationsOnClosedProjects.push(newEmbeddedDonation);
              } else {
                this.donationsOnOpenProjects.push(newEmbeddedDonation);
              }
            }
          );
        });
      }
    );
  }

}
