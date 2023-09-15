import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from 'src/task.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService} from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';
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
  editedReminder: boolean = false;
  
  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  // @ViewChild('myForm') myForm: NgForm;
  

  ngOnInit(): void {
    // console.log(this.task);
    this.editedTitle = this.task.title;
    this.editedDay = this.task.day;
    this.editedReminder = this.task.completed;
    // console.log(this.editedTitle, this.editedDay, this.editedReminder)
  }

  constructor(private taskService: TaskService, private modalService: NgbModal){}

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
    this.task.title = this.editedTitle ? this.editedTitle : this.task.title;
    this.task.day = this.editedDay ? this.editedDay : this.task.day;
    this.task.completed = this.editedReminder ? this.editedReminder : this.task.completed;
    this.taskService.updateTask(this.task).subscribe();
  }

  // onSubmit() {
  //   if(this.myForm.valid) {
  //     this.task.title = this.editedTitle;
  //   this.task.day = this.editedDay;
  //   this.task.completed = this.editedReminder;
  //   } else {
  //     alert('no')
  //   }
  // }

  saveTask() {
    this.task.title = this.editedTitle;
    this.task.day = this.editedDay;
    this.task.completed = this.editedReminder;
  }

}
