import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  private URL_STUDENT = 'http://localhost:52001';

  studentList: Student[];

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllStudents()
      .pipe()
      .subscribe( value => {
        this.studentList = value;
      });
  }
  getAllStudents(): Observable<Student[]> {
    const url = `${this.URL_STUDENT}/students`;
    return this.httpClient.get<Student[]>(url);
  }

}
