import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// components
import { TodoComponent } from './containers/todo/todo.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

// reducers
import { todosReducer } from './reducers/todos';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todosReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule {}
