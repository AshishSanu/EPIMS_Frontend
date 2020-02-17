import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usermodel } from '../Models/Usermodel';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  createUser(data: Usermodel){
    let apiUrl = this.baseurl + 'api/Users';
    return this.http.post(apiUrl, data, httpOptions).pipe(
      map((res: Response) => res));
  }

  getAllUser(): Observable<Usermodel[]> {
    let apiUrl = this.baseurl + 'api/Users';
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
}
