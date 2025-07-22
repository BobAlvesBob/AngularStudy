import { Component, Input, Output, computed, input, output, EventEmitter
  //signal, computed
} from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  //  @Input({required: true}) avatar!: string;
  //  @Input({required: true}) name!: string;
  @Input({required: true}) user!: User ;
   @Output() select = new EventEmitter<string>();
   //select = output<string>();

   @Output() doubleClick = new EventEmitter();

   //SIGNAL VERSION
  // avatar = input.required<string>();
  // name = input.required<string>();

// imagePath = computed(()=>{
//     return 'assets/users/' + this.avatar();
// })

  get imagePath(){
    return 'assets/users/' + this.user.avatar
   }

  onSelectUserUser() {
    this.select.emit(this.user.id);
  }

  onDoubleClickUser() {
    this.doubleClick.emit(this.user.id);
  }

}





  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  //onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

  //}



