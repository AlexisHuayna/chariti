import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/other/interfaces';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() props: {selectedProject: Project; idUser: string; };

  constructor() {
  }

  ngOnInit() {
  }



}
