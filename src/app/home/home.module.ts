import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../feature-modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { HomeslidesComponent } from './homeslides/homeslides.component';
import { GooglemapComponent } from '../corecomponents/reusable/googlemap/googlemap.component';
import { ChoosensystemComponent } from '../corecomponents/welcome-screens/choosensystem/choosensystem.component';
import { ChoosesolarfastsystemComponent } from '../corecomponents/welcome-screens/choosesolarfastsystem/choosesolarfastsystem.component';
import { CustomerdetailsentryformComponent } from '../corecomponents/welcome-screens/customerdetailsentryform/customerdetailsentryform.component';
import { InstallmentbillingsummaryComponent } from '../corecomponents/welcome-screens/installmentbillingsummary/installmentbillingsummary.component';
import { OrderconfirmationComponent } from '../corecomponents/welcome-screens/orderconfirmation/orderconfirmation.component';
import { OrderprogressComponent } from '../corecomponents/welcome-screens/orderprogress/orderprogress.component';
import { PhotouploadComponent } from '../corecomponents/welcome-screens/photoupload/photoupload.component';
import { PickinstallationdateComponent } from '../corecomponents/welcome-screens/pickinstallationdate/pickinstallationdate.component';
import { SolarfastsystemComponent } from '../corecomponents/welcome-screens/solarfastsystem/solarfastsystem.component';
import { HomenextstepsComponent } from '../corecomponents/welcome-screens/homenextsteps/homenextsteps.component';
import { SelecthouseonmapComponent } from '../corecomponents/welcome-screens/selecthouseonmap/selecthouseonmap.component';



@NgModule({
  declarations: [HomeComponent, HomeSlideComponent, HomeslidesComponent, GooglemapComponent,    SolarfastsystemComponent,
    ChoosesolarfastsystemComponent,
    ChoosensystemComponent,
    PickinstallationdateComponent,
    CustomerdetailsentryformComponent,
    OrderprogressComponent,
    PhotouploadComponent,
    OrderconfirmationComponent,
    InstallmentbillingsummaryComponent,
    HomenextstepsComponent,
    SelecthouseonmapComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class HomeModule { }
