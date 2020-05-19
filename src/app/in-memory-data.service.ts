import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, title: 'Go on Safari', complete: false },
      { id: 2, title: 'Shower in a Waterfall', complete: true },
      { id: 3, title: 'Walk the Great Wall of China', complete: false },
      { id: 4, title: 'Donate Blood', complete: true },
      { id: 5, title: 'See the Mona Lisa', complete: false },
      { id: 6, title: 'Write a Book', complete: false },
      { id: 7, title: 'Send a Message in a Bottle', complete: false },
      { id: 8, title: 'Get a Passport', complete: true },
    ];
    return { todos };
  }
}
