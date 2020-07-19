import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { DonationService } from 'src/app/services/donation/donation.service';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { Project, Donation, Participation, User } from 'src/app/other/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() props: {idUser: string; };
  public projectListProps: { idUser: string;   viewDetails: boolean; };
  public donationsListProps: { idUser: string; idProject: string; viewDetails: boolean; };
  public participationListProps: {userId: string; projectId: string; };
  public projects: Project[];
  public donations: Donation[];
  public participations: Participation[];
  public currentUser: User;
  public selectedProject: Project;

  constructor(public projectService: ProjectService, public donationService: DonationService,
              public participationService: ParticipationService, public authService: AuthService,
              public userService: UserService) {
                this.getCurrentUser();
                this.getData();
  }

  ngOnInit() {
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(
      res => {
        this.userService.getUserByEmail(res.email).subscribe(
          user => {
            this.currentUser = user;
          }
        );
      }
    );
  }

  getData() {
    if (this.props != null) {
      if (this.props.idUser == null) {
        this.setProjects();
        this.setPropsWithoutUser();
      } else {
        this.setOwnProjects();
        this.setOwnDonations();
        this.setOwnParticipations();
        this.setPropsWithUser();
      }
    }
  }

  setPropsWithoutUser() {
    this.donationsListProps.idUser = null;
    this.donationsListProps.idProject = null;
    this.donationsListProps.viewDetails = false;

    this.projectListProps.idUser = null;
    this.projectListProps.viewDetails = false;

    this.participationListProps.projectId = null;
    this.participationListProps.userId = null;
  }

  setPropsWithUser() {
    this.donationsListProps.idUser = this.props.idUser;
    this.donationsListProps.idProject = null;
    this.donationsListProps.viewDetails = false;

    this.projectListProps.idUser = this.props.idUser;
    this.projectListProps.viewDetails = false;

    this.participationListProps.userId = this.props.idUser;
    this.participationListProps.projectId = null;
  }

  setOwnParticipations() {
    this.participationService.getParticipationsUser(this.props.idUser).subscribe(
      participationsResponse => {
        this.participations = participationsResponse;
      }
    );
  }

  setOwnDonations() {
    this.donationService.getDonationsUser(this.props.idUser).subscribe(
      donationsResponse => {
        this.donations = donationsResponse;
      }
    );
  }

  setOwnProjects() {
    this.projectService.getOwnerProjects(this.props.idUser).subscribe(
      projectResponse => {
        this.projects = projectResponse;
      }
    );
  }

  setProjects() {
    this.projectService.getProjects().subscribe(
      projectResponse => {
        this.projects = projectResponse;
      }
    );
  }
}
