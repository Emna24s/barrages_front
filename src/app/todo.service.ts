import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getstats() {
    return this.http.get<any[]>('http://localhost:8000/testreq');
  }
}
