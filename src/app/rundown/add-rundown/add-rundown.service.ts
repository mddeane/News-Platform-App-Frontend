import { Rundown } from './../rundown.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:8080";
const rundownUrl = "/rundowns"

@Injectable({
  providedIn: 'root'
})
export class AddRundownService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  addRundown(rundown: Rundown): Observable<Rundown> {
    return this.http.post<Rundown>(url + rundownUrl + "/add", rundown, this.httpOptions);
  }

}
