import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: 'dialog-confirmation.html',
})
export class DialogConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
