import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeslides',
  templateUrl: './homeslides.component.html',
  styleUrls: ['./homeslides.component.scss']
})
export class HomeslidesComponent implements OnInit {
  currentStep: any = 1;
  ngOnInit(): void {
    this.currentStep = localStorage.getItem('currentStep') || 1;
    
    this.currentStep = parseInt(this.currentStep);
  }
  // Start with the first step

  nextStep() {
    if (this.currentStep <13) {
      this.currentStep++;
      localStorage.setItem('currentStep', this.currentStep.toString());
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      localStorage.setItem('currentStep', this.currentStep.toString());

    }
  }
}
