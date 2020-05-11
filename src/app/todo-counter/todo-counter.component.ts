import { TODOS } from './../mock-todos';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css'],
})
export class TodoCounterComponent implements OnInit {
  todo: Todo;
  @Input() todos = TODOS;

  constructor() {}

  ngOnInit(): void {}
}
