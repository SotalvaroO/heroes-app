import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent {
  constructor(private dialogRef: MatDialogRef<typeof ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: Hero) {}

  public delete() {
    this.dialogRef.close(true);
  }
  public cancel() {}
}
