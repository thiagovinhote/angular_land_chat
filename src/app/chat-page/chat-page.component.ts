import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.user.subscribe( user => {
      if (user) {
        this.user = user
      } else {
        this.router.navigate(['/login'])
      }
    })

    this.router.navigate(['/chat-page/user-list'])
  }

  signOut() {
    this.auth.singOut()
  }

}
