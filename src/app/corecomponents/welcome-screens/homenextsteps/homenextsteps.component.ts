import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SolarslideshomeService } from 'src/app/services/solar-slides/solarslideshome.service';

@Component({
  selector: 'app-homenextsteps',
  templateUrl: './homenextsteps.component.html',
  styleUrls: ['./homenextsteps.component.scss']
})
export class HomenextstepsComponent {
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  // This method is called when the "Next" button is clicked.
  onNextStepClick() {
    this.nextStepEvent.emit();
  }
  steps!: any[];
  step: number = 1;
  googleMapenabled = false;
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
    if (this.currentChildStepCount === this.totalSteps) {
      this.onNextStepClick(); // Call the event handler when all steps are reached
    }
    if (typeof j !== 'undefined') {
      const selectedOption = this.steps[i].options[j];
    }
  }

  previous(): void {
    if (this.activeChildStep > 0) {
      this.activeChildStep--;
    } else if (this.step > 1) { // Check if you're not on the first step
      this.step--;
      if (this.steps[this.step - 1].childSteps) {
        this.activeChildStep = this.steps[this.step - 1].childSteps.length - 1;
      }
    }
  }



  handleIDontKnow(): void {
    // Handle the "I Don't Know" button logic here
  }
  getStarted() {
    this.googleMapenabled = true;
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