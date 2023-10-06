import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostalCodeEntryComponent } from './postal-code-entry.component';
import { WelcomepostalcodeComponent } from 'src/app/corecomponents/welcome-screens/welcomepostalcode/welcomepostalcode.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: PostalCodeEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostalCodeEntryRoutingModule {
}
