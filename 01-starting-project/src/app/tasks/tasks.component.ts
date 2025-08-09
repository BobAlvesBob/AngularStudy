import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './new-task/task/task.component';
import { type NewTaskData, Task } from './new-task/task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService} from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  providers: [TasksService],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  isAddingTask = false;
@Input({required:true})
userId!:string;
@Input({required:true})
name !:string;


  constructor(private tasksService: TasksService) {

  }

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    this.tasksService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  }

