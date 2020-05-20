import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../todo';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css'],
})
export class TodoEditorComponent implements OnInit {
  @Input() title: string;

  @Input() todo: Todo;

  @Output() edit: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editTodo() {
    this.edit.emit(new Todo(this.title));
    this.title = '';
  }
}
