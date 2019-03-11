import { Component } from '@angular/core';
import {LanguageService} from "./service/langulage.service";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./skin.scss']
})
export class AppComponent {

  constructor(private language:LanguageService){
    //init language
    // let currentLanguage = this.language.get();
    this.language.set('en');
  }

}
