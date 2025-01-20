import { Component } from '@angular/core';
import { SellerAuthService } from './seller-auth.service';
import { signup } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private _service: SellerAuthService, private router: Router) {}
  signUp(data: signup) {
    this._service.signupData(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['seller-home']);
      }
    });
  }
}
