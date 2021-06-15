import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { PuzzleDialogComponent } from './puzzle-dialog.component';
import { PuzzleDialogService } from './puzzle-dialog.service';

@NgModule({
  declarations: [
    PuzzleDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    TranslateModule
  ],
  providers: [
    PuzzleDialogService
  ]
})
export class PuzzleDialogModule {
  static forRoot(): ModuleWithProviders<PuzzleDialogModule> {
    return {
      ngModule: PuzzleDialogModule,
      providers: [
        PuzzleDialogService
      ]
    };
  }
}
