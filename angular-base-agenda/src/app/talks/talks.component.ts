import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {


  talks: Array<any> = [
    {title: 'Angular rocks!!', date: new Date()},
    {title: 'Android rocks!', date: new Date()}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(talk: any) {
    console.log('selected from talk component (Child): ',talk)
  }

}
