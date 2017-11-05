import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ChatPageModule } from "./chat-page/chat-page.module";
import { LandPageModule } from "./land-page/land-page.module";

import { environment } from "@env/environment";

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { AuthService } from "./shared/auth.service";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ChatPageModule,
    LandPageModule,

    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
