import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { UserService } from "../shared/user.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = []
  usersSubscription: Subscription

  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.usersSubscription = this.us.getAll()
      .subscribe((u)=> {
        if (u.type == 'child_added'){
          this.users.push(u.user)
        } else {
          this.users = this.users.filter(user => user.$key != u.user.$key)
        }
      })
  }

}
