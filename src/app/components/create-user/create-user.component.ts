import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = { last_name: "", first_name: "", id: 0, avatar: "", email: "" }
  createUser() {
    if (this.user.last_name == "" || this.user.first_name == "" || this.user.avatar == "" || this.user.email == "") {
      alert("Rellena bien los campos")
    } else {
      this.usersService.createUser(this.user).then(r => console.log(r)).catch(err => console.log(err))


    }

  }

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

}
