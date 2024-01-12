import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {}

  base_url = 'http://localhost:6001/v1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public login(email: string, password: string): Observable<void> {
    return this.client.post<void>(
      `${this.base_url}/auth/login`,
      {
        email: email,
        password: password,
      },
      this.httpOptions
    );
  }

  public register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<void> {
    return this.client.post<void>(
      `${this.base_url}/auth/register`,
      {
        firstName: firstName,
        lastName: lastName,
        username: firstName + ' ' + lastName,
        email: email,
        password: password,
        verifyPassword: password,
      },
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
