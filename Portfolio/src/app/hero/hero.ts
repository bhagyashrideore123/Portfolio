import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AboutMe } from '../about-me/about-me';
import { BurgerMenu } from '../shared/burger-menu/burger-menu';
import { MenuService } from '../shared/menu.service';

@Component({
  imports: [RouterLink, TranslatePipe, TranslateDirective, AboutMe,BurgerMenu],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
menu = inject(MenuService);
BurgerMenu:boolean = false;

setBurgerMenu()
{
  this.BurgerMenu = true;
}
}
