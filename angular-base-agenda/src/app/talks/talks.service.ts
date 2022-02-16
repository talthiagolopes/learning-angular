import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  constructor() { }

  getAllTalks() {
    return  [
      {title: 'Angular rocks!!', date: new Date()},
      {title: 'Android rocks!', date: new Date()}
    ]
  }
}
