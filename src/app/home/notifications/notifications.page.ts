import { Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {


  constructor() {

  }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  ngOnDestroy() {
  }

  async schedule() {
    console.log("hello", LocalNotifications.checkPermissions())
    if (isPlatform("android") == true) {
      console.log("sup dawg")
      LocalNotifications.createChannel({
        id: '1',
        name: 'local notifications',
        sound: 'sound.wav'
      });
    }

    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Native Plugins App",
          body: "Checking local notifications",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5)},
          sound: 'sound.wav',
          attachments: undefined,
          smallIcon: 'ic_stat_adb',
          actionTypeId: "",
          extra: {
            data: 'Checking extras'
          }
        }
      ]
    });

    console.log('scheduled notifications', notifs);
  }
}
