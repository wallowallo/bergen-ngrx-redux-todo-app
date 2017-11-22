import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// components
import { TodoComponent } from './containers/todo/todo.component';

// reducers
import { todosReducer } from './reducers/todos';


@NgModule({
  declarations: [TodoComponent],
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
