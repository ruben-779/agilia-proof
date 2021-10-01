import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {
    usersService.getList(1).then((r) => {
      this.users = r
      console.log(this.users);
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
