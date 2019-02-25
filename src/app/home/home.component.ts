import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LOGIN_MUTATION } from './__queries__/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;
    this.login(username, password);
  }

  login(username: string, password: string) {
    localStorage.removeItem('token');
    this.apollo
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          username: username,
          password: password,
        },
      })
      .subscribe(
        response => {
          const token = response.data.tokenAuth.token;
          localStorage.setItem('token', token);
          return this.router.navigate(['/admin']);
        },
        err => this.handleEventError(err)
      );
  }

  handleEventError(err: any) {
    console.log(err.message);
    this.toastr.error('Something went wrong! Try again', 'Invalid Username or Password');
  }
}
