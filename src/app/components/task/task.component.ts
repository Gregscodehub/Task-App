import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  };

  editTask(task: Task) {
    alert('here');
    task.title = task.title;
    task.day = task.day;
    task.completed = task.completed;
    this.taskService.updateTask(task).subscribe();
  }
  
}
