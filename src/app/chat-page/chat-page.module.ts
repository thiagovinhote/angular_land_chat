import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ChatPageComponent } from "./chat-page.component";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { UserService } from "./shared/user.service";
import { MessageService } from './shared/message.service';
import { UserCardComponent } from './user-card/user-card.component';
import { MessageCardComponent } from './message-card/message-card.component';

import { DateExpressionPipe } from '@app/pipes/date-expression.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    VirtualScrollModule
  ],
  declarations: [
    ChatPageComponent,
    AppNavbarComponent,
    UsersListComponent,
    MessagesListComponent,
    UserCardComponent,
    MessageCardComponent,

    DateExpressionPipe
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
