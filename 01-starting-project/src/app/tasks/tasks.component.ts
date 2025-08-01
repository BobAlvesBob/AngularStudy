import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { type NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  isAddingTask = false;
@Input({required:true})
userId!:string;
@Input({required:true})
name !:string;

tasks: Task[] = [

  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  }
];

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
this.tasks.push({
  id: new Date().getTime().toString(),
  userId:this.userId,
  title: taskData.title,
  summary: taskData.summary,
  dueDate: taskData.date
})
this.isAddingTask = false;
  }
}
