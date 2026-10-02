import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  imports: [DatePipe,Header,TranslatePipe, TranslateDirective],
  selector: 'app-legal-notice',
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {

todaysDate:Date = new Date();
constructor(){
  console.log(this.todaysDate);
}

}
