import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnChanges {

  @Input() props: { idUser: string; viewDetails: boolean; };
  @Output() selectedProjectOnChild = new EventEmitter<Project>();
  public projects: Project[];

  constructor(public projectService: ProjectService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProjects();
  }

  getProjects() {
    let projectsSubscription: Observable<Project[]>;
    if ( this.props != null) {
      if ( this.props.idUser == null ) {
        projectsSubscription = this.projectService.getProjects();
      } else {
        projectsSubscription = this.projectService.getOwnerProjects(this.props.idUser);
      }
      projectsSubscription.subscribe(
        projectsResponse => {
          this.projects = projectsResponse;
        }
      );
    }
  }

  ngOnInit() {
  }

  updateProject(project: Project) {
    this.selectedProjectOnChild.emit(project);
  }


}
