import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User, Donation } from 'src/app/other/interfaces';
import { DonationService } from 'src/app/services/donation/donation.service';

@Component({
  selector: 'app-donation-add',
  templateUrl: './donation-add.component.html',
  styleUrls: ['./donation-add.component.css']
})
export class DonationAddComponent implements OnInit, OnChanges {

  @Input() projectId: string;

  public user: User;
  public donation: Donation;

  donationAddForm = new FormGroup({
  });

  constructor(private builder: FormBuilder, private donationService: DonationService,
              private userService: UserService, private authService: AuthService) {
    this.donationAddForm = builder.group({
      donationamount: ['', Validators.compose([Validators.required, Validators.pattern(/(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$)/)])]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // nothing
  }

  ngOnInit() {
    this.currentUser();
  }

  currentUser() {
    this.authService.isAuth().subscribe(
      res => {
        this.userService.getUserByEmail(res.email).subscribe(
          user => {
            this.user = user;
          }
        );
      }
    );
  }

  addDonation(values) {
    if (values.donationamount <= this.user.UserWallet) {
      this.donation = {
        UserId: this.user._id,
        ProjectId: this.projectId,
        DonationAmount: values.donationamount,
      };
      this.donationService.createDonation(this.donation).subscribe(
        donation => {
          document.getElementById('donarCollapse').click();
        }
      );
    } else {
      console.log('El monto no puede ser mayor a la cantidad en tu bolso');
    }

  }

}
