import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { NetworkPage } from './home/network/network.page';
import { CameraPage } from './home/camera/camera.page';
import { ContactsPage } from './home/contacts/contacts.page';
import { NotificationsPage } from './home/notifications/notifications.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'network',
    component: NetworkPage
  },
  {
    path: 'camera',
    component: CameraPage
  },
  {
    path: 'contacts',
    component: ContactsPage
  },
  {
    path: 'notifications',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }