import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = "https://reqres.in/api/users?page="

  getList(page: Number) {
    return axios.get(this.apiURL + page).then(r => r.data).then((r: any) => r.data).catch(err => console.log(err))

  }

  constructor() { }
}
