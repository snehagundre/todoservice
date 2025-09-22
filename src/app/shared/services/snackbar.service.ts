import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeScan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(msg : string){
    this._snackBar.open(msg,"close",{
  horizontalPosition :'left',
  verticalPosition : 'top',
  duration :2500
})
  }
}
