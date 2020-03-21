import { Injectable } from '@angular/core';
import { UserRoleModel } from '../Models/UserRoleModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private baseurl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getAllUserRoles(): Observable<UserRoleModel[]>{
    let apiUrl = this.baseurl + 'api/Userroles';
    return this.http.get(apiUrl,httpOptions).pipe(map(res=> JSON.parse(JSON.stringify(res))));
  }
  postUserRole(data:UserRoleModel): Observable<UserRoleModel>{
    let apiUrl = this.baseurl + 'api/Userroles';
    return this.http.post(apiUrl,data,httpOptions).pipe(map(res=> JSON.parse(JSON.stringify(res))));
  }

  deleteUserRole(id:number): Observable<UserRoleModel[]>{
    let apiUrl = this.baseurl + 'api/Userroles/'+id;
    return this.http.delete(apiUrl,httpOptions).pipe(map(res=> JSON.parse(JSON.stringify(res))));
  }
}
