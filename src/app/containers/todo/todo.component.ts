import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../../models/todo';
import * as fromTodo from '../../reducers/todos';
import * as todos from '../../actions/todos';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<fromTodo.State>
  ) {
    this.todos$ = this.store.select('todos');
  }

  addingTodo(todo: Todo) {
    this.store.dispatch(new todos.AddTodoAction(todo));
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    this.store.dispatch(new todos.DeleteTodoAction(todo));
  }
}
