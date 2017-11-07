import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ChatPageComponent } from "./chat-page.component";
import { MessagesListComponent } from './messages-list/messages-list.component';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { UserService } from "./shared/user.service";
import { MessageService } from './shared/message.service';
import { UserCardComponent } from './user-card/user-card.component';
import { MessageCardComponent } from './message-card/message-card.component';

import { DateExpressionPipe } from '@app/pipes/date-expression.pipe';

import { ChatPageRoutingModule, COMPONENTS } from "./chat-page.routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VirtualScrollModule,
    ChatPageRoutingModule
  ],
  declarations: [
    ChatPageComponent,
    MessagesListComponent,
    UserCardComponent,
    MessageCardComponent,

    DateExpressionPipe,
    COMPONENTS,
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
