import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolarslideshomeService } from 'src/app/services/solar-slides/solarslideshome.service';

@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.scss'],
})
export class HomeSlidesComponent {
  personalDetails!: FormGroup;
  step = 1;
  selectedOption: any; // Store the selected option for the current step
  entryScreenData: any;

  constructor(private formBuilder: FormBuilder, private homeSlides: SolarslideshomeService) {
    this.entryScreenData = homeSlides.getEntryScreenData();
  }

  next(option: any) {
    // Store the selected option for the current step
    this.selectedOption = option;

    if (this.step < this.entryScreenData.length) {
      this.step++;
    }
  }

  previous() {
    if (this.step > 1) {
      this.step--;
    }
  }

  submit() {
    // Handle form submission here, including the selected options
    console.log('Selected option for step ' + this.step + ':', this.selectedOption);
  }
}
