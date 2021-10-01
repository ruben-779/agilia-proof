import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsersService) {
    userService.getList(1).then((r) => {
      this.users = r
      console.log(this.users);
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
