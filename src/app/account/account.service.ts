import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../shared/models/register.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  api = environment.appUrl;
  
  constructor(private http: HttpClient) {

  }

  register(model: Register) {
    return this.http.post(`${this.api}/account/register`, model);
  }
}
