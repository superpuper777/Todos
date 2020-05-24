import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todos: Todo[];
  public CompletedCount;
  private todosUrl = 'api/todos';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.messageService.add(`TodoDataService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions).pipe(
      tap((newTodo: Todo) => this.log(`added todo with id=${newTodo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  // Simulate DELETE /todos/:id
  deleteTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deleteTodoById'))
    );
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, this.httpOptions).pipe(
      tap((_) =>
        this.log(
          `updated todo id=${todo.id} title=${todo.title} complete=${todo.complete}`
        )
      ),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap((_) => this.log('fetched todoos')),
      catchError(this.handleError<Todo[]>('getAllTodos', []))
    );
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
    todo.complete = !todo.complete;
    return this.updateTodo(todo);
  }
}
