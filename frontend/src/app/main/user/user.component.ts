import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userWalletAddForm = new FormGroup({
  });
  constructor(private builder: FormBuilder) {
    this.userWalletAddForm = builder.group({
      userwallet: ['', Validators.compose([Validators.required, Validators.pattern(/(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/)])]
    });
  }

  ngOnInit() {
  }

}
