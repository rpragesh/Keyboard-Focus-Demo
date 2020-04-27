import { Component, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('focusInput', { static: false }) myInput;
  addressDetails: string;

  constructor(private nativeKeyboard: Keyboard) { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.nativeKeyboard.show();
      this.myInput.setFocus();
    }, 800);
  }
}
