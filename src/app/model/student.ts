import {Book} from "./book";

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  book: Book[];

  constructor(id: number,   firstName: string, lastName: string, email: string, book: Book[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.book = book;
  }
}
