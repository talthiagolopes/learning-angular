import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-talk',
  templateUrl: './new-talk.component.html',
  styleUrls: ['./new-talk.component.css']
})
export class NewTalkComponent implements OnInit {

  title: string = '';
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
