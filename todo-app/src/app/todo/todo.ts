import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  todos = signal<ToDo[]>([]);
  newTodoText = signal('');

  //add ToDo
  addTodo() {
    if (this.newTodoText().trim() === '') {
      return;
    }

    const newTodo: ToDo = {
      id: Date.now(),
      text: this.newTodoText(),
      completed: false,
      created: new Date(),
    };
    this.todos.update((currentTodos) => [...currentTodos, newTodo]);
    this.newTodoText.set('');
  }

  // toggle ToDo
  toggleComplete(id: number) {
    this.todos.update((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  // delete ToDo
  deleteTodo(id: number) {
    this.todos.update((currentTodos) =>
      currentTodos.filter((todo) => {
        if (todo.id != id) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
