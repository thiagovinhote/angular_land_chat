import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(
    private as: AuthService
  ) { }

  ngOnInit() {
  }

  signin(form: NgForm) {
    const { email, password } = form.value
    this.as.login(email, password)
  }

  signOut() {
    this.as.singOut()
  }

}
