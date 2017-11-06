import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: any = {}

  @Input()
  header: boolean = false


  constructor() { }

  ngOnInit() {
  }

  get isAdmin(): boolean {
    return this.user && this.user.roles.admin
  }

  get isReader(): boolean {
    return this.user && this.user.roles.reader
  }

}
