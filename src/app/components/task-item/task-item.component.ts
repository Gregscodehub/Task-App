import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/task.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService} from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  myForm: NgForm = new NgForm([], []);
  closeResult: string = '';
  id!: number;
  editedTitle!: string;
  editedDay!:  string;
  editedCompleted!: boolean;
  faTimes = faTimes;
  faEdit = faEdit;
  faCalendar = faCalendar;
  faCheck = faCheck;
  checkboxValue!: number;

  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @Output() onDeleteTask = new EventEmitter<Task>();

  ngOnInit(): void {
    // console.log(this.task);
    this.editedTitle = this.task.title;
    this.editedDay = this.task.day;
    this.editedCompleted = this.task.completed;
    // console.log(this.editedTitle, this.editedDay, this.editedReminder)
  }

  constructor(private taskService: TaskService, private modalService: NgbModal, private router:Router){}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  editTask(task: Task) {
    this.task.title = this.editedTitle;
    this.task.day = this.editedDay;
    this.task.completed = this.editedCompleted;
    this.taskService.updateTask(this.task).subscribe();
    this.modalService.dismissAll();
  }

  removeTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  updateValue() {
    console.log(this.checkboxValue);
    if (this.checkboxValue === 1) {
      this.checkboxValue = -1;
    } else {
      this.checkboxValue = 1;
    }
  }
}
