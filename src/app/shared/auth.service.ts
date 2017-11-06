import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  user: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(
    public auth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {

    this.auth.authState
      .switchMap(u => {
        if (u) {
          return this.db.object('user/' + u.uid).valueChanges()
        }
        return Observable.of(null)
      })
      .subscribe(user => {
        if(user) {
          user.$key = this.auth.auth.currentUser.uid
        }
        this.user.next(user)
      })

  }

  login(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password)
  }

  singOut() {
    this.auth.auth.signOut()
  }

}
