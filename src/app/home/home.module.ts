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



@NgModule({
  declarations: [HomeComponent, HomeSlideComponent, HomeslidesComponent, GooglemapComponent],
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
