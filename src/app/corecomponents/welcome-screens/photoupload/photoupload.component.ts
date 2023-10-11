import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photoupload',
  templateUrl: './photoupload.component.html',
  styleUrls: ['./photoupload.component.scss']
})
export class PhotouploadComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
