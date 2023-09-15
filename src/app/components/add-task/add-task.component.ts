import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/task.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  id!: number;
  title: string ='';
  day: string = '';
  completed!: boolean;
  showAddTask!:boolean;
  subscription: Subscription;
  myForm: NgForm = new NgForm([], []);

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }


  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit(){
    if(!this.title) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      id: this.id,
      title :  this.title,
      day : this.day,
      completed : this.completed,
    }

    this.onAddTask.emit(newTask);
    this.title = '';
    this.day = '';
    this.completed = false;
  }
}
