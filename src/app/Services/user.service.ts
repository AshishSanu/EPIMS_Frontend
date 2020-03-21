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

  login(email: string, password: string): Observable<Usermodel>{
    let apiUrl = this.baseurl + 'api/Login?email='+email+'&password='+password;
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  updateUser(id: number, user: Usermodel):Observable<any>{
    let apiUrl = this.baseurl + 'api/Users/'+id;//+'&users='+user;
    return this.http.put(apiUrl,user,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  deleteUser(userId: number){
    let apiUrl = this.baseurl + 'api/Users/'+userId;//+'&users='+user;
    return this.http.delete(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

}
