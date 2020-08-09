import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit {

  @Input() projectId: string;
  public amount;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  getProjectAmount() {
    this.projectService.getProjectAmount(this.projectId).subscribe( amount => {
      this.amount = amount;
    } );
  }

}
