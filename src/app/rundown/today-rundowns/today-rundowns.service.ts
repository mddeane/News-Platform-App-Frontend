import { Rundown } from './../rundown.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:8080";
const rundownUrl = "/rundowns"

@Injectable({
  providedIn: 'root'
})
export class TodayRundownsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  findAllRundowns(): Observable<Rundown[]> {
    console.log("Inside findAllRundowns");
    return this.http.get<Rundown[]>(url + rundownUrl, this.httpOptions);
  }
}
