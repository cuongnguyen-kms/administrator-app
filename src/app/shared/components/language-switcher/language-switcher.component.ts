import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.models';

import { selectLanguage } from '../../../state/app.selectors';
import { setLanguage } from '../../../state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  selectedLang$!: Observable<string>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.selectedLang$ = this.store.select(selectLanguage);
    try {
      const stored = localStorage.getItem('appLang');
      if (stored) {
        this.store.dispatch(setLanguage({ language: stored }));
      }
    } catch {}
  }

  switchLanguage(lang: string) {
    this.store.dispatch(setLanguage({ language: lang }));
  }
}
