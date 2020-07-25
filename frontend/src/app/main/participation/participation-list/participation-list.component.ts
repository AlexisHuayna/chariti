import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { Participation, Project, User, EmbeddedParticipation } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent implements OnInit, OnChanges {

   @Input() props: {userId: string; projectId: string; };
   public participations: Participation[];
   public embeddedParticipation: EmbeddedParticipation[];

   constructor(public participationService: ParticipationService, public userService: UserService, public projectService: ProjectService) {
   }

   ngOnChanges(changes: SimpleChanges): void {
      this.getParticipations();
   }

   ngOnInit() {
   }

   public getParticipations(): void {
      if (this.props != null) {
         let participationObservable: Observable<Participation[]>;
         if (this.props.userId != null && this.props.projectId == null) {
            participationObservable = this.participationService.getParticipationsUser(this.props.userId);
         } else if (this.props.userId == null && this.props.projectId != null) {
            participationObservable = this.participationService.getParticipationsProject(this.props.projectId);
         } else {
            participationObservable = null;
         }
         if (participationObservable) {
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
   }

   public setUsers(): void {
      this.participations.forEach(participation => {
         this.userService.getUser(participation.UserId).subscribe(user => {
            const newParticipation: EmbeddedParticipation = {
               _id: participation._id,
               User: user,
               ParticipationStatus: participation.ParticipationStatus
            };
            this.embeddedParticipation.push(newParticipation);
         });
      });
   }

   public setProjects(): void {
      this.participations.forEach(participation => {
         this.projectService.getProject(participation.ProjectId).subscribe(project => {
            const newParticipation: EmbeddedParticipation = {
               _id: participation._id,
               Project: project,
               ParticipationStatus: participation.ParticipationStatus
            };
            this.embeddedParticipation.push(newParticipation);
         });
      });
   }

}
