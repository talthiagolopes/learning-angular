import { TalksService } from './talks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any>;

  constructor(private talksService: TalksService) {
    this.talks = talksService.getAllTalks();
  }

  ngOnInit(): void {
  }

  log(talk: any) {
    console.log('selected from talk component (Child): ',talk)
  }

}
