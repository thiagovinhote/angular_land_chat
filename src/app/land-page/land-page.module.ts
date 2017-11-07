import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LandPageRoutingModule } from './land-page.routing.module';
import { LandPageComponent } from './land-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LandPageRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    LandPageComponent
  ],
  exports: [
    LandPageComponent
  ]
})
export class LandPageModule { }
