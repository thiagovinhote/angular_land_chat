import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { MessageService } from "../shared/message.service";
import { Message } from "../shared/message.model";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit, OnDestroy {

  messages: any[] = []
  messageSubscription: Subscription
  message: any = ''

  constructor(
    private ms: MessageService
  ) { }

  ngOnInit() {
    this.getMessages()
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }

  getMessages() {
    this.messageSubscription = this.ms.getAll((message: Message, type) => {
      switch(type) {
        case 'child_added':
            this.messages.push(message)
        break
        case 'child_removed':
          this.messages = this.messages.filter(m => m.$key != message.$key)
        break
      }
    })
  }

  sendMessage(form: NgForm) {
    const data: Message = {
      idUser: '1Gz1htCDepZmYQGowPcOLFEzhT73',
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
