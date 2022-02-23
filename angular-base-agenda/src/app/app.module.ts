import { CoreModule } from './core/core.module';
import { TalksModule } from './talks/talks.module';
import { TalksService } from './talks/talks.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    TalksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
