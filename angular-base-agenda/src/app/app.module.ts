import { TalksComponent } from './talks/talks.component';
import { RouterModule, Routes } from '@angular/router';
import { NewTalkComponent } from './new-talk/new-talk.component';
import { TalkComponent } from './talk/talk.component';
import { CoreModule } from './core/core.module';
import { TalksModule } from './talks/talks.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'talks', component: TalksComponent},
  {path: 'new-talk', component: NewTalkComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    TalksModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
