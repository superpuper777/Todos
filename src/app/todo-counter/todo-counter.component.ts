import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { TodoDataService } from '../todo-data.service';

import { Todo } from '../todo';
import { TODOS } from './../mock-todos';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css'],
})
export class TodoCounterComponent implements OnInit {
  count: number = 0;
  @Input() todos: Todo[] = TODOS;

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): number {
    this.count = this.todoDataService.getAllCompleteTodos();
    return this.count;
  }
}
