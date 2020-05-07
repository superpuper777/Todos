import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TODOS } from './../mock-todos';
import { Todo } from './../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = TODOS;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
