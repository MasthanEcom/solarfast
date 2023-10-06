import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo:'welcome/dashboard',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(a => a.HomeModule),
  },
  {
    path:'welcome',
    loadChildren: () => import('./pages/welcome-pages/postal-code-entry/postal-code-entry.module').then(a => a.PostalCodeEntryModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 