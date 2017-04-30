import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudiesComponent } from './studies/studies.component';
import {StudiesModule} from './studies/studies.module';
import {PageNotFoundComponent} from './pagenotfound.component';
import {YearbookModule} from './yearbook/yearbook.module'
import {YearbookComponent} from './yearbook/yearbook.component'
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import {routing} from './app.routing'

import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/authentication.service';
import {UserService} from './_services/user.service';
import { LoginComponent } from './login/login.component';

@NgModule({

  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  StudiesModule,
                  YearbookModule,
                routing,],

  declarations: [ AppComponent, PageNotFoundComponent, LoginComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions]

})

export class AppModule { }
