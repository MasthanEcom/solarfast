import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-solarfastsystem',
  templateUrl: './solarfastsystem.component.html',
  styleUrls: ['./solarfastsystem.component.scss']
})
export class SolarfastsystemComponent {
  
  item = {
    "systemName": "Solar Fast System",
    "recommendation": "Based on the answers you gave, here is your recommended system.",
    "solarPanels": [
      {
        "quantity": 12,
        "model": "DMEGC 410W black-on-black solar panels"
      }
    ],
    "inverter": "3.6kW Luxpower Inverter",
    "title":"12x 410W Solar Panels & 6.4kWh Battery Storage",
    "batteryStorage": {
      "quantity": 1,
      "model": "3.2kWh Greenlinx Battery(s)"
    },
    "moreDetails": "Save and Email me this Quote",
    "additionalOptions": "Want to see more options we have selected for you? Click here",
    "price":"100",
    "image":'assets/9/Slider-6-bg.jpg',
  };  

  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
