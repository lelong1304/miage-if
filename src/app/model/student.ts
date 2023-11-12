import {Book} from "./book";

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  //book: Book[];

  constructor(id: number, firstName: string, lastName: string, age: number, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}
