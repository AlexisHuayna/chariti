import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationDate } from './project-validation-date.directive';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectAddForm = new FormGroup({
  });
  constructor(private builder: FormBuilder) {
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

  addProject(values) {
    console.log(values);
  }
}
