import { Component, OnInit } from '@angular/core';
import { Project, Donation, Participation, User } from 'src/app/other/interfaces';
import { ProjectService } from 'src/app/services/project/project.service';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { DonationService } from 'src/app/services/donation/donation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-project-owner',
  templateUrl: './project-owner.component.html',
  styleUrls: ['./project-owner.component.css']
})
export class ProjectOwnerComponent implements OnInit {

  public projectListProps: { idUser: string; viewDetails: boolean; };
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
    this.projectListProps = { idUser: this.currentUser._id, viewDetails: false };

    this.projectDetailProps = {selectedProject: this.selectedProject, idUser: this.currentUser._id };

  }

  updateSelectedProject(selectedProjectOnChild: Project) {
    this.selectedProject = selectedProjectOnChild;

    this.projectDetailProps.selectedProject = this.selectedProject;
  }

}
