import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choosesolarfastsystem',
  templateUrl: './choosesolarfastsystem.component.html',
  styleUrls: ['./choosesolarfastsystem.component.scss']
})
export class ChoosesolarfastsystemComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
