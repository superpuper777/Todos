import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoDataService } from './todo-data.service';

import { AppComponent } from './app.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodosComponent } from './todos/todos.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodosComponent,
    TodoCounterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
