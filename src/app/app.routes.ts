import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'matches', component: MatchesComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'profile', component: ProfileComponent },
];
