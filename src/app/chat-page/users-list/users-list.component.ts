import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersObservable: Observable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.usersObservable = this.getUsers('/user')
  }

  getUsers(listPath): Observable<any[]> {
    return this.database.list(listPath).valueChanges();
  }

}
