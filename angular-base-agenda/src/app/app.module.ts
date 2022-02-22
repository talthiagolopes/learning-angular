import { TalksService } from './talks/talks.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTalkComponent } from './new-talk/new-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTalkModelDrivenComponent } from './new-talk-model-driven/new-talk-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent,
    NewTalkComponent,
    NewTalkModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
