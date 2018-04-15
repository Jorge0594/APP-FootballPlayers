import { Routes } from '@angular/router';

import { LoginGuestComponent } from './components/login-guest/login-guest.component';
import { TeamCreatorComponent } from './components/team-creator/team-creator.component';
import { RequestAccountComponent } from './components/request-account/request-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MyTeamComponent } from './components/my-team/my-team.component';

import { RouterSecurityService } from './services/router-security.service';



export const appRoutes:  Routes = [
    { path:'', redirectTo:'iniciarSesion', pathMatch: 'full'},
    { path:'iniciarSesion', component: LoginGuestComponent },
    { path: 'solicitarUsuario', component: RequestAccountComponent },
    { path: 'miEquipo', component: MyTeamComponent, canActivate:[RouterSecurityService] }
]