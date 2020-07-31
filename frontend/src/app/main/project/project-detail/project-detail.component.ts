import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project, User } from 'src/app/other/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnChanges {

  public donationsListProps: { idUser: string; idProject: string; viewDetails: boolean; };
  public participationListProps: { userId: string; projectId: string; };
  public participationAddProps: { user: User; project: Project; };
  public currentUser: User;

  @Input() props: {selectedProject: Project; idUser: string; };

  constructor(public authService: AuthService, public userService: UserService) {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.props != null && this.props.selectedProject != null) {
      this.donationsListProps = {idProject: this.props.selectedProject._id, idUser: null, viewDetails: false};

      this.participationListProps = { userId: null, projectId: this.props.selectedProject._id };

      this.participationAddProps = { user: this.currentUser, project: this.props.selectedProject };
    }
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  initChilds() {
    this.donationsListProps = { idProject: null, idUser: null, viewDetails: false };

    this.participationListProps = { userId: null, projectId: null };

    this.participationAddProps = { user: null, project: null };
  }

}
