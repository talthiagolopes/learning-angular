import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {


  talks: Array<any> = [
    {title: 'Angular rocks!!'},
    {title: 'Android rocks!'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(talk: any) {
    console.log('selected from talk component (Child): ',talk)
  }

}
