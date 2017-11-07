import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserDashComponent } from './user-dash/user-dash.component';
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashComponent,
    children: [
      {
        path: 'user-list', component: UsersListComponent
      }, 
      {
        path: 'user-detail/:uid', component: UserDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPageRoutingModule { }

export const COMPONENTS = [UsersListComponent, UserDetailComponent, UserDashComponent]
