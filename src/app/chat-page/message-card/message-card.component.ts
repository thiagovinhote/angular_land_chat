import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from "../shared/user.model";
import { Message } from "../shared/message.model";

@Component({
  selector: 'message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {

  @Input()
  message: Message = null

  @Input()
  userCurrent: User = null

  @Output()
  delete: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    if (this.message)
      this.message.isCurrent = this.isUserLogged(this.message.idUser)
  }

  isUserLogged(idUser: string): boolean {
    return this.userCurrent && this.userCurrent.$key === idUser
  }

  remove(key: string) {
    this.delete.emit(key)
  }

}
