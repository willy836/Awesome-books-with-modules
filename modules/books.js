import Book from './book.js';

export default class Books {
  constructor() {
    this.head = null;
  }

  add(title, author) {
    const book = new Book(title, author);
    if (this.head === null) {
      this.head = book;
      return;
    }

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = book;
  }

  remove(title, author) {
    if (this.head === null) return;
    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      if (curr.title === title && curr.author === author) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
      }
      prev = curr;
      curr = curr.next;
    }
  }
}