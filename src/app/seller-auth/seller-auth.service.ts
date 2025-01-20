import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signup } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class SellerAuthService {
  constructor(private _http: HttpClient) {}
  url = 'http://localhost:3000/seller';
  signupData(data: signup): Observable<any> {
    return this._http.post(this.url, data);
  }
}
