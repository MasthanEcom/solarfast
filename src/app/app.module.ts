import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './feature-modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PropertyOwnershipComponent } from './corecomponents/reusable/property-ownership/property-ownership.component';
import { SolarfastsystemComponent } from './corecomponents/welcome-screens/solarfastsystem/solarfastsystem.component';
import { ChoosesolarfastsystemComponent } from './corecomponents/welcome-screens/choosesolarfastsystem/choosesolarfastsystem.component';
import { ChoosensystemComponent } from './corecomponents/welcome-screens/choosensystem/choosensystem.component';
import { PickinstallationdateComponent } from './corecomponents/welcome-screens/pickinstallationdate/pickinstallationdate.component';
import { CustomerdetailsentryformComponent } from './corecomponents/welcome-screens/customerdetailsentryform/customerdetailsentryform.component';
import { OrderprogressComponent } from './corecomponents/welcome-screens/orderprogress/orderprogress.component';
import { PhotouploadComponent } from './corecomponents/welcome-screens/photoupload/photoupload.component';
import { OrderconfirmationComponent } from './corecomponents/welcome-screens/orderconfirmation/orderconfirmation.component';
import { InstallmentbillingsummaryComponent } from './corecomponents/welcome-screens/installmentbillingsummary/installmentbillingsummary.component';
import { HomenextstepsComponent } from './corecomponents/welcome-screens/homenextsteps/homenextsteps.component';
import { SelecthouseonmapComponent } from './corecomponents/welcome-screens/selecthouseonmap/selecthouseonmap.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyOwnershipComponent,
    
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
