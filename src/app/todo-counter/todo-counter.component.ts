import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { TodoDataService } from '../todo-data.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css'],
})
export class TodoCounterComponent implements OnInit {
  count: number = 0;
  @Input() todos: Todo[];

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    return this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) =>
          (this.todos = todos.filter((todo) => todo.complete === false))
      );
  }
}
