import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PuzzleDialogComponent } from './puzzle-dialog.component';

@Injectable()
export class PuzzleDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(): MatDialogRef<any> {
    return this.dialog.open(PuzzleDialogComponent, {
      width: '330px',
      height: '315px',
      maxWidth: '100vw'
    });
  }

}
