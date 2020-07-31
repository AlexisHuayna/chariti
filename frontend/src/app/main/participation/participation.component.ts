import { Component, OnInit } from '@angular/core';
import { User, EmbeddedParticipation } from 'src/app/other/interfaces';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {

  currentUser: User;
  participationOnOpenProjects: EmbeddedParticipation[] = [];
  participationOnClosedProjects: EmbeddedParticipation[] = [];

  constructor(public userService: UserService, public authService: AuthService, public participationService: ParticipationService,
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
            this.getMyParticipations();
          }
        );
      }
    );
  }
  getMyParticipations() {
    this.participationService.getParticipationsUser(this.currentUser._id).subscribe(
      participationResponse => {
        participationResponse.forEach(
          participation => {
            const newEmbeddedParticipation: EmbeddedParticipation = {
              _id: participation._id,
              User: this.currentUser,
              Project: null,
              ParticipationStatus: participation.ParticipationStatus
            };
            this.projectService.getProject(participation.ProjectId).subscribe(
              projectResponse => {
                newEmbeddedParticipation.Project = projectResponse;
                if (projectResponse.ProjectDateClose < new Date()) {
                  this.participationOnClosedProjects.push(newEmbeddedParticipation);
                } else {
                  this.participationOnOpenProjects.push(newEmbeddedParticipation);
                }
              }
            );
          }
        );
      }
    );
  }

}
