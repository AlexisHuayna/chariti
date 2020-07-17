import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User, Project, Participation } from 'src/app/other/interfaces';
import { ParticipationService } from 'src/app/services/participation/participation.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('collapse', { static: true }) collapse: ElementRef;

  public _user: User;
  public _projects: Project[];

  userWalletAddForm = new FormGroup({
  });
  constructor(private builder: FormBuilder, private userService: UserService, private authService: AuthService, private participationService:ParticipationService, private projectService: ProjectService) {
    this.userWalletAddForm = builder.group({
      userwallet: ['', Validators.compose([Validators.required, Validators.pattern(/(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/)])]
    });
    this.currentUser();
  }

  ngOnInit() {
  }

  currentUser() {
    this.authService.isAuth().subscribe(
      res => {
        this.userService.getUserByEmail(res.email).subscribe(
          user => {
            this._user = user
          }
        )
      }
    )
  }

  getParticipation(id:string){
    this.participationService.getParticipationsUser(id).subscribe(
      res => {
        for(let participation of res as Participation[]){
          this.projectService.getProject(participation.ProjectId).subscribe(
            project => this._projects.push(project)
          )
        }
      }
    )
  }

  addWallet(values) {
    if (confirm('¿Añadir dinero?')) {
      this._user.UserWallet = this._user.UserWallet + values.userwallet;
      this.userService.updateUser(this._user._id, this._user).subscribe(
        res => {
          this._user = res;
        }
      );
    }
    this.collapse.nativeElement.className = 'collapse';
  }

}
