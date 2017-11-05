import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandPageComponent } from "./land-page/land-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component"
import { SigninComponent } from "./signin/signin.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'chat-page', pathMatch: 'full'
  },
  {
    path: 'land-page', component: LandPageComponent
  },
  {
    path: 'chat-page', component: ChatPageComponent
  },
  {
    path: 'login', component: SigninComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
