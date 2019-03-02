import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';

import { STUDENTS_QUERY } from './__queries__/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getStudents();
  }

  filterStudents(f: NgForm) {
    console.log(f.value);
  }

  getStudents() {
    this.apollo
      .query({
        query: STUDENTS_QUERY
      })
      .subscribe(
        response => {
          console.log(response);
        },
        err => console.log(err)
      );
  }
}
