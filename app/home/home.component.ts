import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor() { }

  ngOnInit() {
  }
  steps = [
    { label: 'Step 1', content: 'Do you like Angular Material?' },
    { label: 'Step 2', content: 'Are you ready to use it in your project?' },
    { label: 'Step 3', content: 'Enjoy using Angular Material!' }
  ];

  nextStep(stepper: any) {
    stepper.next();
  }

  finish() {
    // Handle the finish action here
    console.log('Stepper finished');
  }

}
