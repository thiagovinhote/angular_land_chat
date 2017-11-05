import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandPageComponent } from "./land-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LandPageComponent
  ],
  exports: [
    LandPageComponent
  ]
})
export class LandPageModule { }
