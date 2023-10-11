import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choosensystem',
  templateUrl: './choosensystem.component.html',
  styleUrls: ['./choosensystem.component.scss']
})
export class ChoosensystemComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
