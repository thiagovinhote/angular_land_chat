import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LandPageComponent } from "./land-page.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LandPageComponent
  ],
  exports: [
    LandPageComponent
  ]
})
export class LandPageModule { }
