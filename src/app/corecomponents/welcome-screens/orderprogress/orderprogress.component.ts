import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-orderprogress',
  templateUrl: './orderprogress.component.html',
  styleUrls: ['./orderprogress.component.scss']
})
export class OrderprogressComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
