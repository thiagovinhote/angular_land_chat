import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ChatPageModule } from "./chat-page/chat-page.module";
import { LandPageModule } from "./land-page/land-page.module";

import { environment } from "@env/environment";

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./guard/auth.guard";

import { AppRoutingModule } from "./app-routing.module";
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AppNavbarComponent,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,

    LandPageModule,
    ChatPageModule,

    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
