import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { WhyMe } from '../why-me/why-me';
import { ContactMe } from '../contact-me/contact-me';
import { MySkills } from '../my-skills/my-skills';
import { AboutMe } from '../about-me/about-me';

@Component({
  imports: [Hero,Header,Footer,WhyMe,ContactMe,MySkills,AboutMe],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
