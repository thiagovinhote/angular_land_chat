import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable'
import { Subscription } from "rxjs/Subscription";

import { User } from "./user.model";

@Injectable()
export class UserService {

  static path: string = "user/"

  constructor(
    private database: AngularFireDatabase
  ) { }

  get(id: string, callback: (user: User) => void) {
    const x = this.database.object(UserService.path + id).valueChanges().subscribe((user: User) => {
      callback(user)
      x.unsubscribe()
    })
  }

  getAll(): Observable<User[]> {
    return this.database.list(UserService.path).valueChanges()
  }

}
