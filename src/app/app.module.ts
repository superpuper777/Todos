import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { TodoDataService } from './todo-data.service';

import { AppComponent } from './app.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodosComponent } from './todos/todos.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodosComponent,
    TodoCounterComponent,
    TodoEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
