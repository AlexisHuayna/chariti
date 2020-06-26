import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-donation-add',
  templateUrl: './donation-add.component.html',
  styleUrls: ['./donation-add.component.css']
})
export class DonationAddComponent implements OnInit {

  donationAddForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
