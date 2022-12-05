export default class Book {
  constructor(title, author, next = null) {
    this.title = title;
    this.author = author;
    this.next = next;
  }
}