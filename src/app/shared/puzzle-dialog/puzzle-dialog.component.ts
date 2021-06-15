import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

declare const sliderCaptcha: any;

@Component({
  selector: 'app-puzzle-dialog',
  templateUrl: './puzzle-dialog.component.html',
  styleUrls: ['./puzzle-dialog.component.scss']
})
export class PuzzleDialogComponent implements OnInit {

  captcha: any;

  constructor(
    private dialogRef: MatDialogRef<PuzzleDialogComponent>,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.captcha = sliderCaptcha({
      id: 'captcha',
      repeatIcon: 'fa fa-redo',
      loadingText: `${this.translate.instant('common.loading')} ...`,
      failedText: this.translate.instant('common.tryAgain'),
      barText: this.translate.instant('common.slideToCompletePuzzle'),
      onSuccess: () => {
        this.dialogRef.close(true);
      }
    });
  }

}
