import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todos: Todo[];
  public CompletedCount;
  private todosUrl = 'api/todos';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todosUrl, todo, this.httpOptions)
      .pipe(catchError(this.handleError<Todo>('addTodo')));
  }

  // Simulate DELETE /todos/:id
  deleteTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .delete<Todo>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Todo>('deleteTodoById')));
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<any> {
    return this.http
      .put(this.todosUrl, todo, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateTodo')));
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
      .pipe(catchError(this.handleError<Todo[]>('getAllTodos', [])));
  }

  getAllCompleteTodos(): number {
    let CompletedCount = this.todos.filter((todo) => todo.complete === false)
      .length;
    return CompletedCount;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .get<Todo>(url)
      .pipe(catchError(this.handleError<Todo>(`getTodoById id=${id}`)));
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    return this.updateTodo(todo);
  }
}
