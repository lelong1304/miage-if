import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentRequesterComponent} from "./student-requester/student-requester.component";

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsListComponent },
  { path: 'newStudent', component: StudentRequesterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
