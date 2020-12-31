import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourneyListComponent } from './tourney-list/tourney-list.component';
import { AddTourneyComponent } from './add-tourney/add-tourney.component';
import { TourneyOverviewComponent } from './tourney-overview/tourney-overview.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TourneyListComponent,
    AddTourneyComponent,
    TourneyOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
