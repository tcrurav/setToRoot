import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  
  goToRoot(){
    this.app.getRootNav().setRoot(HomePage);
  }
}
