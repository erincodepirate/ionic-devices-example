import { Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.page.html',
  styleUrls: ['./stuff.page.scss'],
})
export class StuffPage implements OnInit, OnDestroy {

  contacts: any;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  itemCheck() {
    console.log("sup dawg")
  }


}
