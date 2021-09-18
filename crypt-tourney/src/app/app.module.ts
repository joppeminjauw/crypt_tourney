import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourneyListComponent } from './tourney-list/tourney-list.component';
import { AddTourneyComponent } from './add-tourney/add-tourney.component';
import { TourneyOverviewComponent } from './tourney-overview/tourney-overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBorderComponent } from './top-border/top-border.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendListComponent } from './friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TourneyListComponent,
    AddTourneyComponent,
    TourneyOverviewComponent,
    TopBorderComponent,
    LoginComponent,
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    RegisterComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
