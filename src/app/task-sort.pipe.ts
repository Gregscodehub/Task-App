import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskSort'
})
export class TaskSortPipe implements PipeTransform {

  transform(tasks: any[]): any[] {
  // Sort tasks based on completion status (completed tasks go to the end)
    return tasks.sort((a,b) => {
      if(a.completed === !b.completed) {
        return 1;
      } else if(!a.completed && b.completed) { // move completed task to the end
        return -1; // move completed task to the end
      } else {
        return 0; // maintain the current order
      }
    });
  }

}
