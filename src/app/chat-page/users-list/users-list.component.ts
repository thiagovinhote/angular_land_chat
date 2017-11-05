import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UserService } from "../shared/user.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersObservable: Observable<any[]>;

  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.usersObservable = this.us.getAll()
  }

}
