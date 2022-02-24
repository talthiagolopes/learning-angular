import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTalkModelDrivenComponent } from './../new-talk-model-driven/new-talk-model-driven.component';
import { NewTalkComponent } from './../new-talk/new-talk.component';
import { TalkComponent } from './../talk/talk.component';
import { TalksComponent } from './talks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'talks', comnponent: TalkComponent},
  {path: 'new-talk', comnponent: NewTalkComponent}
]

@NgModule({
  declarations: [
    TalksComponent,
    TalkComponent,
    NewTalkComponent,
    NewTalkModelDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TalksComponent,
    NewTalkComponent,
    NewTalkModelDrivenComponent
  ]
})
export class TalksModule { }
