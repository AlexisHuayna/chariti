import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/other/interfaces';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() props: {idUser: string; idProject: string; };
  public currentViewProject: Project;
  constructor() { }

  ngOnInit() {
  }



}
