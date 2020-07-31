import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { Participation, User, Project } from 'src/app/other/interfaces';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-participation-add',
  templateUrl: './participation-add.component.html',
  styleUrls: ['./participation-add.component.css']
})
export class ParticipationAddComponent implements OnInit, OnChanges {

  @Input() props: {user: User; project: Project};

  public participationText = 'Take a part';
  public ownerProject = false;
  public currentParticipation: Participation = null;

  constructor(public participationService: ParticipationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ownerProject = this.isOwnerProject();
    if (this.onProject()) {
      this.participationText = 'Stop participating';
    } else {
      this.participationText = 'Take a part';
    }
  }

  ngOnInit() {
    if (this.onProject()) {
      this.participationText = 'Stop participating';
    } else {
      this.participationText = 'Take a part';
    }
  }

  participationHandler() {
    if (this.participationText === 'Take a part') {
      const newParticipation: Participation = {
        UserId: this.props.user._id,
        ProjectId: this.props.project._id,
        ParticipationStatus: true,
      };
      this.participationService.createParticipation(newParticipation).subscribe(
        participationResponse => {
          this.currentParticipation = participationResponse;
        }
      );
    } else {
      console.log(this.participationText);
      this.participationService.deleteParticipation(this.currentParticipation._id);
    }
  }

  onProject(): boolean {
    if ( this.props != null && this.props.user != null) {
      if ( this.props.user._id === this.props.project.UserOwnerId) {
        this.participationService.getParticipationsProject(this.props.project._id).subscribe(
          participationsResponse => {
            participationsResponse.forEach(
              participation => {
                if (participation.UserId === this.props.user._id) {
                  return true;
                }
              }
            );
          }
        );
      }
    } else {
      return false;
    }
  }

  isOwnerProject(): boolean {
    if ( this.props != null && this.props.user != null) {
      if ( this.props.user._id === this.props.project.UserOwnerId) {
        return true;
      }
    }
    return false;
  }

}
