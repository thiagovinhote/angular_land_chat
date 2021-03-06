import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash'

import { User } from "../shared/user.model";
import { Message } from "../shared/message.model";

@Component({
  selector: 'message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {

  private userRoles: Array<string>

  @Input()
  message: Message = null

  @Input()
  userCurrent: User = null

  @Output()
  delete: EventEmitter<string> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    if (this.message)
      this.message.isCurrent = this.isUserLogged(this.message.idUser)

    this.userRoles = _.keys(_.get(this.userCurrent, 'roles'))
  }

  isUserLogged(idUser: string): boolean {
    return this.userCurrent && this.userCurrent.$key === idUser
  }

  remove(key: string) {
    this.delete.emit(key)
  }

  get canDelete(): boolean {
    const pode = ["admin"]
    return !_.isEmpty(_.intersection(pode, this.userRoles))
  }

}
