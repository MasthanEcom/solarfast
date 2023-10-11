import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pickinstallationdate',
  templateUrl: './pickinstallationdate.component.html',
  styleUrls: ['./pickinstallationdate.component.scss']
})
export class PickinstallationdateComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
