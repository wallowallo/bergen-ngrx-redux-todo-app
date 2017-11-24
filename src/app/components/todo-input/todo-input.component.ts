import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  addingTodo(todo: any) {
    this.addTodo.emit(todo.value);
    todo.value = '';
  }
}
