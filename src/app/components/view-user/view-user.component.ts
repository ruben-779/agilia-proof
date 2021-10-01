import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User = { id: 0, first_name: "", last_name: "", email: "", avatar: "" }
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    usersService.getOne(this.route.snapshot.paramMap.get("id") as Number | null).then(r => {
      this.user = r

    })
  }

  ngOnInit(): void {
  }

}
