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
  delete: boolean = false
  editUser() {
    this.usersService.editUser(this.user, this.user.id).then(r => console.log("Usuario actualizado")).catch(err => console.log(err))
  }

  deleteAlert() {
    this.delete = confirm("¿Seguro que quieres eliminar al usuario?")
    console.log(this.delete)
    if (this.delete === true) {
      this.deleteUser()
    }

  }

  deleteUser() {
    this.usersService.deletePlayer(this.user.id).then(r => "Usuario eliminado")

  }
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    usersService.getOne(this.route.snapshot.paramMap.get("id") as number | null).then(r => {
      this.user = r
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
