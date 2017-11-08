import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandPageComponent } from './land-page.component';

const routes: Routes = [
  {
    path: '', component: LandPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandPageRoutingModule { }
