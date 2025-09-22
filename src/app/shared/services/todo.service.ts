import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr : Array<Itodo> = [
  {
   todoItem : "java",
   id :'124'
  },{
   todoItem : "javascript",
   id :'123'
  },{
   todoItem : "nodejs",
   id :'122'
  },{
   todoItem : "ts",
   id :'121'
  },{
   todoItem : "angular",
   id :'120'
  }
]
  constructor(
     private _snackBar: SnackbarService
  ) { }

  fetchAllTodos(): Array<Itodo>{
    //api call to fetch all todos from db
    return this.todoArr
  }

  addNewToDo(todo : Itodo) : void{
     //api call to ad new todo to db
     this.todoArr.push(todo);
     this._snackBar.openSnackBar(`new todoitem ${todo.todoItem} is added succesfully !!!`)
  }

removeToDo(todo : Itodo){
  //api call to remove toitem from db
 let getindex = this.todoArr.findIndex(todobj => todobj.id === todo.id);
 this.todoArr.splice(getindex,1)
 this._snackBar.openSnackBar(`${todo.todoItem} is removed successfully!!!`)
}  


}
