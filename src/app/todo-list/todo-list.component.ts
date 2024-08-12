import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter: string = 'all';

  constructor() {}

  ngOnInit() {
  }

  addTodo(text: string) {
    if (text.trim().length) {
      this.todos.push(new Todo(text));
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    console.log(todo.completed)
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  doneEdit(todo: Todo) {
    if (todo.text.trim().length === 0) {
      this.removeTodo(todo);
    } else {
      todo.editing = false;
    }
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter = filter;
  }

  filteredTodos() {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

  get remainingTasks() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  toggleAllTodos() {
    this.todos.forEach(todo => todo.completed = !todo.completed);
  }

  hasCompletedTodos(): boolean {
    return this.todos.some(todo => todo.completed);
  }

  removeAllCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  preventNewline(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}
