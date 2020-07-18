import { Component, OnInit, Input } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { Participation, Project, User } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent implements OnInit {

   @Input() props: {userId: string; projectId: string; };
   public participations: Participation[];
   public usersOnParticipation: User[];
   public projectsOnParticipation: Project[];
   constructor(public participationService: ParticipationService, public userService: UserService, public projectService: ProjectService) {
      this.getParticipations();
   }

   ngOnInit() {
   }

   public getParticipations(): void {
      if (this.props != null) {
         let participationObservable: Observable<Participation[]>;
         if (this.props.userId != null) {
            participationObservable = this.participationService.getParticipationsUser(this.props.userId);
         } else {
            participationObservable = this.participationService.getParticipationsProject(this.props.projectId);
         }
         participationObservable.subscribe(participationsResponse => {
            this.participations = participationsResponse;
            if (this.props.userId != null) {
               this.setProjects();
            } else {
               this.setUsers();
            }
         });
      }
   }

   public setUsers(): void {
      this.participations.forEach(participation => {
         this.userService.getUser(participation.UserId).subscribe(user => {
            this.usersOnParticipation.push(user);
         });
      });
   }

   public setProjects(): void {
      this.participations.forEach(participation => {
         this.projectService.getProject(participation.ProjectId).subscribe(project => {
            this.projectsOnParticipation.push(project);
         });
      });
   }

}
