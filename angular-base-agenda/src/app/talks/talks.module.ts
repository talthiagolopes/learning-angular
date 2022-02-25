import { NewTalkModule } from './../new-talk/new-talk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalkComponent } from './../talk/talk.component';
import { TalksComponent } from './talks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    TalksComponent,
    TalkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewTalkModule,
  ],
  exports: [
    TalksComponent
  ]
})
export class TalksModule { }
