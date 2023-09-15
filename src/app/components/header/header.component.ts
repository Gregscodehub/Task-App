import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/task.model';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title: string = 'Task app';
  showAddTask!:boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
