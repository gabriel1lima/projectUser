import {
  Component,
  OnInit
} from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private formBuilder: FormBuilder) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nome: this.formBuilder.group({
        first: ['', Validators.required],
        last: ['', Validators.required]
      }),
      email: ['', Validators.required],
      celular: ['', Validators.required],
      imagem: ['', Validators.required],
      id: [],
    });
  }

  onSubmit() {
    this.userService.addUser(this.addForm.value)
      .subscribe(_ => {
        this.router.navigate(['users']);
      });
  }

}
