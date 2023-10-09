import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SolarslideshomeService } from 'src/app/services/solar-slides/solarslideshome.service';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss']
})
export class HomeSlideComponent {
  steps!: any[];
  step: number = 1;
  currentChildStepCount: number = 1;
  activeChildStep: number = 0;
  kWhValue: string = ''; // Add this variable for the kWh input
  annualConsumptionForm: FormGroup = new FormGroup({
    annualConsumption: new FormControl('')
  });
  constructor(private solarSlidesService: SolarslideshomeService, private route: Router) { }

  ngOnInit(): void {
    this.steps = this.solarSlidesService.getEntryScreenData();
  }

  next(i: number, j?: number, type?: string): void {
    if (type) {
      const selectedType = type;
      if (selectedType === "Renting") {
        this.route.navigate(['home/propertyownership']);
        return;
      }
      else if (selectedType === "Flat") {
        this.route.navigate(['home/propertyownership']);
        return;
      }
    }
    if (this.steps[i].childSteps) {
      if (this.activeChildStep < this.steps[i].childSteps.length - 1) {
        this.activeChildStep++;
        this.currentChildStepCount++;
      } else {
        this.step++;
        this.activeChildStep = 0;
        this.currentChildStepCount++;
      }
    } else {
      this.step++;
      this.activeChildStep = 0;
      this.currentChildStepCount++;
    }

    if (typeof j !== 'undefined') {
      const selectedOption = this.steps[i].options[j];
    }
  }

  previous(): void {
    if (this.steps[this.step - 2].childSteps) {
      if (this.activeChildStep === 0) {
        this.step--;
        this.currentChildStepCount--;
        this.activeChildStep = this.steps[this.step - 1].childSteps.length - 1;
      } else {
        this.activeChildStep--;
        this.currentChildStepCount--;
      }
    } else {
      this.step--;
      this.currentChildStepCount--;
    }
  }

  handleIDontKnow(): void {
    // Handle the "I Don't Know" button logic here
  }

  // Add getter for totalSteps
  get totalSteps(): number {
    let total = 0;

    for (const step of this.steps) {
      if (step.childSteps && step.childSteps.length > 0) {
        total += step.childSteps.length;
      } else {
        total += 1;
      }
    }

    return total;
  }
}
