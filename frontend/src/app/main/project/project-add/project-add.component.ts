import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationDate } from './project-validation-date.directive';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project, User } from 'src/app/other/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  public currentUser: User;
  projectAddForm = new FormGroup({
  });
  constructor(private builder: FormBuilder, public projectService: ProjectService, public authService: AuthService, 
              public userService: UserService) {
    this.getCurrentUser();
    this.projectAddForm = this.builder.group({
      projectname: ['', Validators.compose([Validators.minLength(4), Validators.required])],
      projectdescription: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100)])],
      dateGroup: this.builder.group({
        projectdateini: ['', Validators.required],
        projectdateclose: ['', Validators.required],
      }, { validators:  validationDate})
    });
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

  addProject(formValues) {
    const newProject: Project = {
      UserOwnerId: this.currentUser._id,
      ProjectName: formValues.projectname,
      ProjectDescription: formValues.projectdescription,
      ProjectDateInit: formValues.dateGroup.projectdateini,
      ProjectDateClose: formValues.dateGroup.projectdateclose,
      ProjectState: true
    };
    this.projectService.createProject(newProject).subscribe(
      newProjectResponse => {
        console.log(newProjectResponse);
      }
    );
  }
}
