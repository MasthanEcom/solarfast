import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.scss']
})
export class OrderconfirmationComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
