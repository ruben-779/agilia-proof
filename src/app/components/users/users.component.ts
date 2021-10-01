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
  pag: number = 1
  maxPage: number = 2
  minPage: number = 1
  nextPage() {
    if (this.pag < this.maxPage) {
      this.pag += 1
    }
    this.usersService.getList(this.pag).then(r => this.users = r)
  }
  beforePage() {
    if (this.pag > this.minPage) {
      this.pag -= 1
    }
    this.usersService.getList(this.pag).then(r => this.users = r)
  }


  constructor(private usersService: UsersService) {
    usersService.getList(this.pag).then((r) => {
      this.users = r
      console.log(this.users);
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
