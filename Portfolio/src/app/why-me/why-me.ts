import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe, TranslateDirective],
  selector: 'app-why-me',
  styleUrl: './why-me.scss',
  templateUrl: './why-me.html',
})
export class WhyMe {
}
