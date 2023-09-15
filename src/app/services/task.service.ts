import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  updateTask(task: Task): Observable<Task> {
    alert('here agains');
    // console.log(task);
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }
}
