import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ChatPageComponent } from "./chat-page.component";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { UserService } from "./shared/user.service";
import { MessageService } from './shared/message.service';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VirtualScrollModule
  ],
  declarations: [
    ChatPageComponent,
    AppNavbarComponent,
    UsersListComponent,
    MessagesListComponent,
    UserCardComponent,
  ],
  exports: [
    ChatPageComponent
  ],
  providers: [
    MessageService,
    UserService
  ]
})
export class ChatPageModule { }
