import { Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit, OnDestroy {

  contacts: any;

  constructor() {

  }

  ngOnInit() {
    this.getContacts();
  }

  ngOnDestroy() {
  }

  async getContacts() {
    try {
      const permission = await Contacts.requestPermissions();
      if(!permission.contacts) return;
      else if (permission.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true
          }
        });
        this.contacts = result.contacts;
      }
    } catch (e) {
      console.log(e);
    }
  }

}
