import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/task.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() task!: Task; // Input property to receive the task being edited
  @Output() saveTask = new EventEmitter<Task>(); // EventEmitter for saving task changes
  @Output() cancelEdit = new EventEmitter<void>(); // EventEmitter for canceling edit
  constructor() {}

  onSaveClick() {
    this.saveTask.emit(this.task);
  }

  onCancelClick() {
    this.cancelEdit.emit();
  }
}
