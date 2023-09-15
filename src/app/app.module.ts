import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  { path: 'tasks', component: TaskComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TaskItemComponent,
    ButtonComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
