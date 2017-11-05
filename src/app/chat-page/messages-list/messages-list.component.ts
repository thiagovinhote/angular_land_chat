import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AngularFireDatabase } from "angularfire2/database";
import { Observable,  } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { VirtualScrollComponent } from 'angular2-virtual-scroll';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  messages: any[] = []
  messageSubscription: Subscription

  message: any = ''

  @ViewChild(VirtualScrollComponent)
  private virtualScroll: VirtualScrollComponent;

  constructor(
    private database: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.messageSubscription = this.getMessage('message')
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }

  getUser(id, callback) {
    const x = this.database.object("/user/" + id).valueChanges().subscribe(user => {
      callback(user)
      x.unsubscribe()
    })
  }

  getMessage(listPath) {
    return this.database.list(listPath).stateChanges(['child_added', 'child_removed'])
      .subscribe(snapshot => {

        switch(snapshot.type) {
          case 'child_added':
            var d: any = snapshot.payload.val()
            d.$key = snapshot.key
            this.getUser(d.idUser, user => {
              d.user = user
              this.messages.push(d)
            })
          break
          case 'child_removed':

            this.messages = this.messages.filter(m => m.$key != snapshot.key)

          break
        }

      })
  }

  sendMessage(form: NgForm) {
    const data = {
      idUser: '1Gz1htCDepZmYQGowPcOLFEzhT73',
      text: form.value.message,
      date: new Date().getTime()
    }
    this.database.list("/message").push(data)
    form.reset()
  }

  remove(id) {
    this.database.object("/message/" + id).remove()
  }

  update() {
    console.log('p')
  }

}
