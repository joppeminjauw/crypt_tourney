import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourneyListComponent } from './tourney-list/tourney-list.component';
import { AddTourneyComponent } from './add-tourney/add-tourney.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { TourneyOverviewComponent } from './tourney-overview/tourney-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TourneyListComponent,
    AddTourneyComponent,
    MatchOverviewComponent,
    TourneyOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
