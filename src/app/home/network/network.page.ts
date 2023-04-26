import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {

  networkListener: PluginListenerHandle | undefined;
  //status: ConnectionStatus | undefined;
  status: string = '';

  constructor(private ngZone: NgZone) {

  }

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.changeStatus(status);
    });
    const status = await Network.getStatus();
    // this.ngZone.run(() => {
    //   this.status = status.connected ? 'Online' : 'Offline';
    // })
    this.changeStatus(status);
  }

  async changeStatus(status: ConnectionStatus) {
    this.status = status.connected ? 'Online' : 'Offline';
    await Toast.show({
      text: this.status,
      duration: 'long',
    })
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

}
