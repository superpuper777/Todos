import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  lastId: number = 0;

  todos: Todo[] = TODOS;

  constructor() {}

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.unshift(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(todo: Todo): Todo {
    let todoModel = this.getTodoById(todo.id);
    //if (!todoModel) {
    //return null;
    //   }
    todoModel.complete = todo.complete;
    return todoModel;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    return this.updateTodoById(todo);
  }
}
