import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PuzzleDialogService } from '../../shared/puzzle-dialog/puzzle-dialog.service';
import { loginForm } from '../../core/constants/form-label';
import { ROUTES } from '../../core/constants/routes';
import { CommonService } from '../../core/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  prefix = loginForm.prefix;
  ROUTES = ROUTES;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private puzzleDialogService: PuzzleDialogService
  ) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, loginForm, this.prefix);
      return;
    }
    const puzzleDialogRef = this.puzzleDialogService.openDialog();
    puzzleDialogRef.afterClosed().subscribe(async (puzzleSolved: boolean) => {
      if (puzzleSolved) {
        console.log('puzzle solved');
      }
    });
  }

}
