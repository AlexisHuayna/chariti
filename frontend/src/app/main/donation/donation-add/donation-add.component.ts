import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-add',
  templateUrl: './donation-add.component.html',
  styleUrls: ['./donation-add.component.css']
})
export class DonationAddComponent implements OnInit {

  donationAddForm = new FormGroup({
  });
  constructor(private builder: FormBuilder) {
    this.donationAddForm = builder.group({
      donationamount: ['', Validators.compose([Validators.required, Validators.pattern(/(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/)])]
    });
  }

  ngOnInit() {
  }

}
