import { Injectable } from '@angular/core';

import { IUser } from '../_interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  getUser(): Observable<IUser> {
    return null;
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${config.apiUrl}/users`);
  }

  insertUser(form: any): Observable<IUser> {
    return null;
  }

  updateUser(): Observable<IUser> {
    return null;
  }

  validateUser(): boolean {
    return null;
  }

}
