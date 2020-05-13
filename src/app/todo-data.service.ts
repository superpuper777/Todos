import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todos: Todo[] = TODOS;
  public CompletedCount;

  constructor() {}

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    this.todos.unshift(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Todo {
    return this.getTodoById(todo.id);
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  getAllCompleteTodos(): number {
    let CompletedCount = this.todos.filter((todo) => todo.complete === false)
      .length;
    return CompletedCount;
  }
  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    return this.updateTodo(todo);
  }
}
