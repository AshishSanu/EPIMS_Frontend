import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PoleModel } from '../Models/PoleModel';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class PolesService {
  private baseurl: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  createPole(data: PoleModel){
    let apiUrl = this.baseurl + 'api/Poles';
    return this.http.post(apiUrl, data, httpOptions).pipe(
      map((res: Response) => res));
  }

  getAllPoles(): Observable<PoleModel[]> {
    let apiUrl = this.baseurl + 'api/Poles';
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  updatePole(id: number, user: PoleModel):Observable<any>{
    let apiUrl = this.baseurl + 'api/Poles/'+id;//+'&users='+user;
    return this.http.put(apiUrl,user,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  deletePole(poleId: number){
    let apiUrl = this.baseurl + 'api/Poles/'+poleId;//+'&users='+user;
    return this.http.delete(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
}
