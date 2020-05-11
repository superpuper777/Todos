import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from './../todo-data.service';

import { TODOS } from './../mock-todos';
import { Todo } from './../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  selectedTodo: Todo;
  @Input() todos: Todo[] = TODOS;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {}

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  onEditTodo(todo: Todo): void {
    this.todoDataService.updateTodo(todo);
  }

  onToggleTodoComplete(todo: Todo): void {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo): void {
    this.remove.emit(todo);
  }
}
