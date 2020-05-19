import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from './../todo-data.service';
import { Location } from '@angular/common';

import { Todo } from './../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  selectedTodo: Todo;
  @Input() todos: Todo[];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();
  constructor(
    private todoDataService: TodoDataService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  onEditTodo(todo: Todo): void {
    this.todoDataService.updateTodo(todo).subscribe();
  }

  onToggleTodoComplete(todo: Todo): void {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo): void {
    this.remove.emit(todo);
  }
}
