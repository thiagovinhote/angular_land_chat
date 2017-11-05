import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";

import { Message } from "./message.model";
import { UserService } from "./user.service"

@Injectable()
export class MessageService {

  static path: string = "messages/"

  constructor(
    private database: AngularFireDatabase,
    private us: UserService
  ) {}

  getAll(callback: (message: Message, type: string) => void): Subscription {
    return this.database.list(MessageService.path).stateChanges(['child_added', 'child_removed'])
      .subscribe(snapshot => {

        var d: Message = snapshot.payload.val()
        d.$key = snapshot.key
        this.us.get(d.idUser, (user) => {
          d.user = user
          callback(d, snapshot.type)
        })
      })
  }

  create(data: Message) {
    this.database.list(MessageService.path).push(data)
  }

  delete(id: string) {
    this.database.object(MessageService.path + id).remove()
  }

}
