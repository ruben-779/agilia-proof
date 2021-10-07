import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = "https://reqres.in/api/users"

  getList(page: number) {
    return axios.get(this.apiURL + "?page=" + page).then(r => r.data).then((r: any) => r.data).catch(err => console.log(err))

  }

  getOne(id: number | null) {
    return axios.get(this.apiURL + "/" + id).then(r => r.data).then((r: any) => r.data).catch(err => console.log(err))
  }
  editUser(user: User, id: number) {
    return axios.patch(this.apiURL + "/" + id, user).then(res => console.log(res)).catch(err => console.log(err))
  }
  deletePlayer(id: number) {
    return axios.delete(this.apiURL + "/" + id).then(res => console.log(res)).catch(err => console.log(err))
  }

  createUser(user: User) {
    return axios.post(this.apiURL, user).then(r => console.log(r)).catch(err => console.log(err))
  }
  constructor() { }
}
