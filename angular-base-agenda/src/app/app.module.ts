import { NewTalkGuard } from './guards/new-talk-guard';
import { TalksComponent } from './talks/talks.component';
import { RouterModule, Routes } from '@angular/router';
import { TalkComponent } from './talk/talk.component';
import { CoreModule } from './core/core.module';
import { TalksModule } from './talks/talks.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'talks', component: TalksComponent},
  {path: 'talks/:id', component: TalkComponent},
  {path: 'new-talk', loadChildren: () => import('./new-talk/new-talk.module').then(l => l.NewTalkModule),
  canActivate: [NewTalkGuard]}
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
  providers: [NewTalkGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
