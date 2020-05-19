import { Component, Output } from '@angular/core';
import { TodoDataService } from './todo-data.service';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[];
  completeTodos: number;
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  onAddTodo(todo: Todo) {
    return this.todoDataService.addTodo(todo).subscribe((todo) => {
      this.todos.unshift(todo);
    });
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoDataService.deleteTodo(todo).subscribe();
  }

  getTodos() {
    return this.todoDataService
      .getAllTodos()
      .subscribe((todos) => (this.todos = todos));
  }
}
