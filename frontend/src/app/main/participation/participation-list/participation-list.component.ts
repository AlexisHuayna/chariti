import { Component, OnInit, Input } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { Participation } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent implements OnInit {

   @Input() props: {userId: string; projectId: string; };
   public participations: Participation[];
   constructor(public participationService: ParticipationService) {
      if (this.props != null) {
         let participationObservable: Observable<Participation[]>;
         if (this.props.userId != null) {
            participationObservable = participationService.getParticipationsUser(this.props.userId);
         } else {
            participationObservable = participationService.getParticipationsProject(this.props.projectId);
         }
         participationObservable.subscribe(participationsResponse => {
            this.participations = participationsResponse;
         });
      }
   }

   ngOnInit() {
   }

}
