import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/config', pathMatch: 'full' },
  {
    path: 'config',
    loadChildren: () => import('./app-shell/builder-config/builder-config.module').then(mod => mod.BuilderConfigModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

