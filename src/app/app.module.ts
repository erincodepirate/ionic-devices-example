import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Scroll } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule, routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { NetworkPage } from './home/network/network.page';
import { CameraPage } from './home/camera/camera.page';
import { ContactsPage } from './home/contacts/contacts.page';
import { NotificationsPage } from './home/notifications/notifications.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StuffPage } from './home/stuff/stuff.page';

@NgModule({
  declarations: [AppComponent, HomePage, NetworkPage, CameraPage, ContactsPage, NotificationsPage, StuffPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, ScrollingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}