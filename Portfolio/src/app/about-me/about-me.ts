import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe, TranslateDirective],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  aboutmeData = [
  {
    name: 'Sahra Mueller',
    project: 'DA Bublle',
    quote: 'Bhagyashri had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'James Rugman',
    project: 'Join',
    quote: 'Bhagyashri is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Evelyn Marx',
    project: 'Sharkie',
    quote: 'She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
    linkedin: 'https://www.linkedin.com/'
  }
];
}
