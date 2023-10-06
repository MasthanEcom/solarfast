import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './feature-modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PropertyOwnershipComponent } from './corecomponents/reusable/property-ownership/property-ownership.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyOwnershipComponent
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
