import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService
  ) {
    const languageCode = this.route.snapshot.params.languageCode;
    if (!languageCode) {
      return;
    }
    this.languageService.initLanguage(languageCode);
  }

}
