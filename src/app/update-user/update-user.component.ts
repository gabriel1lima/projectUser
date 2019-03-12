import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: Object = {
    "id": 0,
    "nome": {
      "first": "",
      "last": ""
    },
    "email": "",
    "celular": "",
    "imagem": ""
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  updateUser(): void {
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe(_ => this.router.navigate(['users']));
  }

  ngOnInit() {
    this.getUser();
  }

}
