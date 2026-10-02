import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';


interface Skill {
  name: string;
  icon: string; 
}

@Component({
  imports: [TranslatePipe, TranslateDirective],
  selector: 'app-my-skills',
  styleUrl: './my-skills.scss',
  templateUrl: './my-skills.html',
})

export class MySkills {
  skills: Skill[] = [
    { name: 'Angular', icon: 'assets/fonts/images/icons/Icons.svg' },
    { name: 'TypeScript', icon: 'assets/fonts/images/icons/Icons (1).svg' },
    { name: 'JavaScript', icon: 'assets/fonts/images/icons/Icons (2).svg' },
    { name: 'HTML', icon: 'assets/fonts/images/icons/Icons (3).svg' },
    { name: 'CSS', icon: 'assets/fonts/images/icons/css.svg' },
    { name: 'REST-API', icon: 'assets/fonts/images/icons/Api.svg' },
    { name: 'Supabase', icon: 'assets/fonts/images/icons/Supabase.svg' },
    { name: 'Git', icon: 'assets/fonts/images/icons/git.svg' },
    { name: 'Material Design', icon: 'assets/fonts/images/icons/materialdesign.svg' },
    { name: 'Scrum', icon: 'assets/fonts/images/icons/scrum.svg' },
  ];

  learning: Skill[] = [
    { name: 'React', icon: 'assets/fonts/images/icons/React.svg' },
    { name: 'Vue.js', icon: 'assets/fonts/images/icons/Vue Js.svg' },
  ];
}
