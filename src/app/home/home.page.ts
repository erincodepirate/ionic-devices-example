import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  type = "native";

  constructor() {}

  async share() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  segmentChanged($event:any) {
    console.log($event.detail.value);
    this.type = $event.detail.value;
  }
}
