import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { SnackbarService } from '../../services/snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(private _todoService :TodoService,
              private _uuidService :UuidService,
              private _snackbar : MatSnackBar
  ) { }
  todoArr :Array<Itodo> =[]
  @ViewChild('todoForm') todoForm !: NgForm
  ngOnInit(): void {

}
 
 onFormSubmit(){
if(this.todoForm.valid){
let todoItem = {...this.todoForm.value , id:this._uuidService.generateUuid()};
this.todoForm.reset();
this._todoService.addNewToDo(todoItem);
}
 }
}
