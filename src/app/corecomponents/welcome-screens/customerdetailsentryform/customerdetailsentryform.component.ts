import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customerdetailsentryform',
  templateUrl: './customerdetailsentryform.component.html',
  styleUrls: ['./customerdetailsentryform.component.scss']
})
export class CustomerdetailsentryformComponent {
  @Output() previousStepEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextStepEvent: EventEmitter<void> = new EventEmitter<void>();

  onPreviousStepClick() {
    this.previousStepEvent.emit();
  }

  onNextStepClick() {
    this.nextStepEvent.emit();
  }
}
