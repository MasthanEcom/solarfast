import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home/dashboard',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(a => a.HomeModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 