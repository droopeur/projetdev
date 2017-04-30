import { Routes, RouterModule } from '@angular/router';
import {YearbookComponent} from './yearbook/yearbook.component';
import {StudiesComponent} from './studies/studies.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/index';
import {PageNotFoundComponent} from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'home', component: HomeComponent},
    {path : 'studies', component: StudiesComponent,  canActivate: [AuthGuard] },
    {path : 'yearbook', component: YearbookComponent,  canActivate: [AuthGuard]  },
    {path : '**', component: PageNotFoundComponent,  canActivate: [AuthGuard] },

    // otherwise redirect to home

];

export const routing = RouterModule.forRoot(appRoutes);
