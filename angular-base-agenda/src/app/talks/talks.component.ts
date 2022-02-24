import { HttpClient } from '@angular/common/http';
import { TalksService } from './talks.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any> = [];

  constructor(private talksService: TalksService, private router: Router) {
    //this.talks = talksService.getAllTalks();

    talksService.getAllTalksOnline()
    .subscribe((talksResult) => {
      this.talks = talksResult
    })
  }

  ngOnInit(): void {
  }

  log(talk: any) {
    console.log('selected from talk component (Child): ',talk)
    this.router.navigate(['talks', talk.title])
  }

}
