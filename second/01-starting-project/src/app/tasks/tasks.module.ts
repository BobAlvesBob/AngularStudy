import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/Shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
     TasksComponent, TaskComponent, NewTaskComponent],
     exports: [TaskComponent],
     imports: [SharedModule, CommonModule, FormsModule]

})
export class TasksModule {

}
