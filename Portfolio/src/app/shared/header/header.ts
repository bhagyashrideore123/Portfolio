import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private translate = inject(TranslateService);
  english = 'EN';
  german = 'DE';

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
