import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  })
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    const user: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
    };
    console.log(user)
    this.userService.register(user).subscribe(() => {
      alert("Thành công")
      this.router.navigate(['/login'])
    })
  }
}
