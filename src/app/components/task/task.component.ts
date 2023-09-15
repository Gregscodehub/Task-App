import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/task.model';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private uiService: UiService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  };

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push();
    });
  }

  editTask(task: Task) {
    task.title = task.title;
    task.day = task.day;
    task.completed = task.completed;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(task:Task) {
   this.taskService.deleteTask(task)
    .subscribe(() => (
      this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }
  
}
