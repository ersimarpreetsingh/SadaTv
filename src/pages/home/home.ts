import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private streamingMedia: StreamingMedia, private platform: Platform) {
    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    });
  }
  ionViewDidLoad(){
  }

  playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { 

        console.log('Video played'); 
      },
      errorCallback: (e) => {
        console.log('Error streaming');
        console.log(e);
      },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    // this.streamingMedia.playVideo('http://cdn.henico.net/video/?channel=sadatv', options);
    this.streamingMedia.playVideo('http://cdn12.henico.net:8080/live/sadatv/index.m3u8', options);
  }

}
