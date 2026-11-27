import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuService } from '../menu.service';

@Component({
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  selector: 'app-burger-menu',
  styleUrl: './burger-menu.scss',
  templateUrl: './burger-menu.html',
})
export class BurgerMenu {
  private translate = inject(TranslateService);
  menu = inject(MenuService);

  english = 'EN';
  german = 'DE';

  useLanguage(language: string): void {
    this.translate.use(language);
    // document.getElementById("burgerMenu")?.style.display = "none";
  }

  
}
