import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-installmentbillingsummary',
  templateUrl: './installmentbillingsummary.component.html',
  styleUrls: ['./installmentbillingsummary.component.scss']
})
export class InstallmentbillingsummaryComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
