import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  } 

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users=users);
  }

  deleteUser(idUser: number): void {
    this.userService.deleteUser(idUser).subscribe(_ => this.getUsers());
  }

}
