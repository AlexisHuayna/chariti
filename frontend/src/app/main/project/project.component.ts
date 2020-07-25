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


  public projectListProps: { idUser: string; viewDetails: boolean; };
  public donationsListProps: { idUser: string; idProject: string; viewDetails: boolean; };
  public participationListProps: {userId: string; projectId: string; };
  public projectDetailProps: {selectedProject: Project; idUser: string; };
  public selectedProject: Project = null;
  public currentUser: User;

  constructor(public projectService: ProjectService, public donationService: DonationService,
              public participationService: ParticipationService, public authService: AuthService,
              public userService: UserService) {
              this.getCurrentUser();
  }

  ngOnInit() {
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(
      res => {
        this.userService.getUserByEmail(res.email).subscribe(
          user => {
            this.currentUser = user;
            this.initChilds();
          }
        );
      }
    );
  }

  initChilds() {
    this.projectListProps = { idUser: null, viewDetails: false };

    this.donationsListProps = { idProject: null, idUser: null, viewDetails: false };

    this.participationListProps = { userId: null, projectId: null };

    this.projectDetailProps = {selectedProject: this.selectedProject, idUser: this.currentUser._id };
  }

  updateSelectedProject(selectedProjectOnChild: Project) {
    this.selectedProject = selectedProjectOnChild;

    this.donationsListProps.idProject = this.selectedProject._id;

    this.participationListProps.projectId = this.selectedProject._id;

    this.projectDetailProps.selectedProject = this.selectedProject;

  }
}
