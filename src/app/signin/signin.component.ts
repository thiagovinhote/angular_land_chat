import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  email: string = ''
  password: string = ''

  private userSubscription: Subscription;

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.userSubscription = this.as.user.subscribe(user => {
      if (user) {
        this.router.navigate(['/chat-page'])
      }
    })

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }

  async signin(form: NgForm) {
    const { email, password } = form.value
    await this.as.login(email, password)
  }

  signOut() {
    this.as.singOut()
  }

}
