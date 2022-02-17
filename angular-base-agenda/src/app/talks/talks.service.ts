import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  constructor(private httpClient: HttpClient) { }

  getAllTalks() {
    return  [
      {title: 'Angular rocks!!', date: new Date()},
      {title: 'Android rocks!', date: new Date()}
    ]
  }

  getAllTalksOnline(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>('https://jsonplaceholder.typicode.com/posts');
  }
}
