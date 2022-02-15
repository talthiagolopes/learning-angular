import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk: any;

  @Output() talkSelected: EventEmitter<any> = new EventEmitter();

  style = {
    'background-color': 'lightgray',
    'padding': '10px'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.talk);
    this.talkSelected.emit(this.talk);
  }

}
