import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { PostalCodeEntryRoutingModule } from './postal-code-entry-routing.module';
import { MaterialModule } from 'src/app/feature-modules/material/material.module';
import { PostalCodeEntryComponent } from './postal-code-entry.component';
import { WelcomepostalcodeComponent } from 'src/app/corecomponents/welcome-screens/welcomepostalcode/welcomepostalcode.component';




@NgModule({
  declarations: [
    PostalCodeEntryComponent,
    WelcomepostalcodeComponent
  ],
  imports: [
    CommonModule,
    PostalCodeEntryRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class PostalCodeEntryModule { }
