import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId);
  }

  onSelectUserApp(id: string) {
    this.selectedUserId = id;
  }

  onDoubleClickUserApp(id: string) {
    console.log('Double clicked on user with id ' + id);
  }

  //selectedUserId: string | null = null;
}
