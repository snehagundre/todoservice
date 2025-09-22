import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(
    private _todoService : TodoService ,
    // private _snackBar : SnackbarService
    ) { }
  todoArr : Array<Itodo> = []

  ngOnInit(): void {
   this.todoArr = this._todoService.fetchAllTodos(
  )
  }
  onToDoRemove(todo:Itodo){
    this._todoService.removeToDo(todo);
  }

}
