import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public login(username: string, password: string): Observable<void> {
    return this.client.post<void>(
      'https://localhost:7239/api/Auth/Login',
      {
        username: username,
        password: password,
      },
      this.httpOptions
    );
  }

  public register(item: User): Observable<void> {
    return this.client.post<void>(
      'https://localhost:7239/api/Auth/Register',
      item,
      this.httpOptions
    );
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
