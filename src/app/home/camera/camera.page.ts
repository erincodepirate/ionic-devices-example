import { Component, OnDestroy, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit, OnDestroy {

  selectImage: any;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  checkPlatformForWeb() {
    if(Capacitor.getPlatform() == 'web') {
      return true;
    }
    return false;
  }

  async getPhoto() {
    await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      width: 600,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
    this.selectImage = image;

    await Share.share({
      title: 'Image sharing',
      text: 'Share this image',
      url: this.selectImage.path,
      dialogTitle: 'Image share',
    });
  }

}
