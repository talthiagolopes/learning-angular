import { HttpClient } from '@angular/common/http';
import { TalksService } from './talks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any> = [];

  constructor(private talksService: TalksService, public httpClient: HttpClient) {
    //this.talks = talksService.getAllTalks();

    this.httpClient.get<Array<any>>('https://jsonplaceholder.typicode.com/posts')
    .subscribe((talksResult) => {
      this.talks = talksResult
    })
  }

  ngOnInit(): void {
  }

  log(talk: any) {
    console.log('selected from talk component (Child): ',talk)
  }

}
