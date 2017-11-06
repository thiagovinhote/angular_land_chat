import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from "@app/chat-page/shared/user.service";
import { User } from "@app/chat-page/shared/user.model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = null
  private sub: any

  constructor(
    private us: UserService,
    private acRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.acRoute.params.subscribe(
      params => {
        const { uid } = params
        this.getUser(uid)
      }
    )
  }

  private getUser(uid: string) {
    this.us.get(uid, u => {
      this.user = u
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
