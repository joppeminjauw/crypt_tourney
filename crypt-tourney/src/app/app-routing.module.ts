import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTourneyComponent } from './add-tourney/add-tourney.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { TourneyListComponent } from './tourney-list/tourney-list.component';
import { TourneyOverviewComponent } from './tourney-overview/tourney-overview.component';

const routes: Routes = [
  {path: '', component: TourneyListComponent},
  {path: 'app-tourney-list', component: TourneyListComponent},
  {path: 'app-match-overview/:tourney', component: MatchOverviewComponent},
  {path: 'app-tourney-overview', component: TourneyOverviewComponent},
  {path: 'app-add-tourney', component: AddTourneyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
