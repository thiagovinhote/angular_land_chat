import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { MessageService } from "../shared/message.service";
import { Message } from "../shared/message.model";

import { AuthService } from "../../shared/auth.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit, OnDestroy {

  messages: any[] = []
  messageSubscription: Subscription
  message: any = ''

  user: User = null
  userSubscription: Subscription;

  constructor(
    private ms: MessageService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.auth.user.subscribe(user => {
      if(user) {
        this.user = user
        this.getMessages()
      }
    })
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
    this.userSubscription.unsubscribe()
  }

  getMessages() {
    this.messageSubscription = this.ms.getAll((message: Message, type) => {
      switch(type) {
        case 'child_added':
            this.messages.splice(0, 0, message)
        break
        case 'child_removed':
          this.messages = this.messages.filter(m => m.$key != message.$key)
        break
      }
    })
  }

  sendMessage(form: NgForm) {
    const data: Message = {
      idUser: this.user.$key,
      text: form.value.message,
      date: new Date().getTime(),
    }
    this.ms.create(data)
    form.reset()
  }

  remove(id: string) {
    this.ms.delete(id)
  }


}
