import { Component, OnInit } from '@angular/core';

import { AuthService } from "../shared/auth.service";
import { User } from "../chat-page/shared/user.model";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  user: User = null

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user.subscribe( user => {
      this.user = user
    })
  }

}
