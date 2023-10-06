import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  activeChildStep: number = 0; // Track the active child step

  constructor(private solarSlidesService: SolarslideshomeService, private route:Router) { }

  ngOnInit(): void {
    this.steps = this.solarSlidesService.getEntryScreenData();
  }

  next(i: number, j?: number, type?:string): void {
    if(type){
      const selectedType = type;
      if(selectedType === "Renting"){
        this.route.navigate(['home/propertyownership']);
        return
      }
    }
    if (this.steps[i].childSteps) {
      if (this.activeChildStep < this.steps[i].childSteps.length - 1) {
        this.activeChildStep++;
        this.currentChildStepCount++
      } else {
        // Move to the next step
        this.step++;
        this.activeChildStep = 0;
        this.currentChildStepCount++
      }
    } else {
      this.step++;
      this.activeChildStep = 0;
      this.currentChildStepCount++
    }

    if (typeof j !== 'undefined') {
      const selectedOption = this.steps[i].options[j];
    }
  }

  previous(): void {
    if (this.steps[this.step - 2].childSteps) {
      // Check if the first child step is active
      if (this.activeChildStep === 0) {
        this.step--;
        this.currentChildStepCount--
        this.activeChildStep = this.steps[this.step - 1].childSteps.length - 1;
      } else {
        this.activeChildStep--;
        this.currentChildStepCount--
      }
    } else {
      this.step--;
      this.currentChildStepCount--
    }
  }
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