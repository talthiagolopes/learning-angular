import { TalksService } from './talks/talks.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
