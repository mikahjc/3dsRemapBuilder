import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuilderConfigComponent } from './builder-config.component';

const routes: Routes = [
  {
    path: '',
    component: BuilderConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderConfigRoutingModule { }
