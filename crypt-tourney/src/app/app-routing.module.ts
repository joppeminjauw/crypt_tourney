import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTourneyComponent } from './add-tourney/add-tourney.component';
import { AuthGuard } from './authentication/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TourneyListComponent } from './tourney-list/tourney-list.component';
import { TourneyOverviewComponent } from './tourney-overview/tourney-overview.component';

const routes: Routes = [
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: '', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'app-homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'app-tourney-list', component: TourneyListComponent, canActivate: [AuthGuard]},
  {path: 'app-tourney-overview/:id', component: TourneyOverviewComponent, canActivate: [AuthGuard]},
  {path: 'app-tourney-overview', component: TourneyOverviewComponent, canActivate: [AuthGuard]},
  {path: 'app-add-tourney/:name', component: AddTourneyComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
