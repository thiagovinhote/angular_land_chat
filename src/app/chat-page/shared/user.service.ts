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

  getAll(): Observable<{user: User, type: string}> {
    return this.database.list(UserService.path).stateChanges(['child_added', 'child_removed'])
      .map(s => {
        var u: User = s.payload.val()
        u.$key = s.key
        return {user: u, type: s.type}
      })
  }

  create(id: string, user: User) {
    return this.database.object(UserService.path + id).set(user)
  }

  createFire(auth) {
    const { isNewUser, profile: { email, name } } = auth.additionalUserInfo
    const { uid, photoURL } = auth.user
    console.log(auth)
    if (isNewUser) {
      const newUser: User = {
        email: email,
        name: name,
        imageUrl: photoURL,
        roles: {reader: true, admin: false}
      }
      this.create(uid, newUser)
    }
  }

}
