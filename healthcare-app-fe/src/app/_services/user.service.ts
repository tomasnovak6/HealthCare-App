import { Injectable } from '@angular/core';

import { IUser } from '../_interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  // todo: vyresit any
  getUser(user: any): Observable<IUser> {
    return null;
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.apiUrl + 'users');
  }

  // todo: vyresit any
  insertUser(user: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'users/register', user);
  }

  updateUser(): Observable<IUser> {
    return null;
  }

  validateUser(): boolean {
    return null;
  }

}
