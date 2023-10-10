import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PostalCodeGuard } from '../guards/postalcode/postalcode-auth.guard';
import { PropertyOwnershipComponent } from '../corecomponents/reusable/property-ownership/property-ownership.component';
import { GooglemapComponent } from '../corecomponents/reusable/googlemap/googlemap.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate:[PostalCodeGuard]
  },
  { path: 'propertyownership', component: PropertyOwnershipComponent },
  { path: 'googlemap', component: GooglemapComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
