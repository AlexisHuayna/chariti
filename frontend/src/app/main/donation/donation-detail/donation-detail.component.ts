import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit, OnChanges {

  @Input() projectId: string;
  public amount;

  constructor(private projectService: ProjectService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProjectAmount();
  }

  ngOnInit() {
    this.getProjectAmount();
  }

  getProjectAmount() {
    this.projectService.getProjectAmount(this.projectId).subscribe( projectAmountResponse => {
      if (projectAmountResponse && projectAmountResponse[0]) {
        this.amount = projectAmountResponse[0].amount;
      }
    } );
  }

}
