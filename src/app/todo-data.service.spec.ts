import { TestBed, async, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
