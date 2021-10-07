import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  p: number = 1;
  users: User[] = [];



  constructor(private usersService: UsersService) {
    usersService.getList(1).then((r) => {
      r.forEach((e: User) => {
        this.users.push(e)
      });
      usersService.getList(2).then((r) => {
        r.forEach((e: User) => {
          this.users.push(e)
        });
      })
    }).catch(err => console.log(err))
    console.log
  }

  ngOnInit(): void {
  }

}
