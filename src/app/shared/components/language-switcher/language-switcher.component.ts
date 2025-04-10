import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  selectedLang: string;

  constructor(private translate: TranslateService) {
    let savedLang = 'en';
    try {
      if (typeof window !== 'undefined') {
        savedLang = localStorage.getItem('appLang') || 'en';
      }
    } catch (e) {
      savedLang = 'en';
    }
    this.selectedLang = savedLang;
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
    localStorage.setItem('appLang', lang);
  }
}
