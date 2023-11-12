import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {Student} from "../model/student";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-requester',
  templateUrl: './student-requester.component.html',
  styleUrls: ['./student-requester.component.css']
})
export class StudentRequesterComponent implements OnInit {
  private URL_STUDENT = 'http://localhost:52001';

  form: FormGroup;
  submitted = false;
  studentToBeCreated: Student;

  constructor(private readonly httpClient: HttpClient,
              private readonly studentService:  StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
      //book: new FormControl(null)
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted = true;
      this.studentToBeCreated = this.form.value;
      this.studentService.save(this.studentToBeCreated).subscribe(res => {
        this.router.navigate(['/students']);
      });

    }
  }

  get f() { return this.form.controls; }

  private goToListStudents() {
    this.router.navigate(['/students']);

  }
}
