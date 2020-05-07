import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '.././todo';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css'],
})
export class TodoNewComponent implements OnInit {
  title: string = '';

  @Output() add: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.add.emit(new Todo(this.title));
    this.title = '';
  }
}
