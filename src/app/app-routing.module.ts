import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandPageComponent } from "./land-page/land-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component"
import { SigninComponent } from "./signin/signin.component";

import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'land-page', 
    component: LandPageComponent,
    loadChildren: 'app/land-page/land-page.module#LandPageModule'
  },
  {
    path: 'chat-page',
    component: ChatPageComponent,
    canActivate: [AuthGuard],
    loadChildren: 'app/chat-page/chat-page.module#ChatPageModule'
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: '', redirectTo: '/land-page', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
