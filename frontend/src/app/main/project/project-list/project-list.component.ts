import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() props: { id: string;   viewDetails: boolean; } = null;
  public projects: Project[];

  constructor(public projectService: ProjectService) {
    let projectsSubscription: Observable<Project[]>;
    if ( this.props != null) {
      if ( this.props.id == null ) {
        projectsSubscription = projectService.getProjects();
      } else {
        projectsSubscription = projectService.getOwnerProjects(this.props.id);
      }
      projectsSubscription.subscribe({
        next(projectsResponse) {
          this.projects = projectsResponse;
        }
      });
    }
  }

  ngOnInit() {
  }


}
