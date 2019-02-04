import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';

/**
 * Generated class for the MyTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tabs',
  templateUrl: 'my-tabs.html',
})
export class MyTabsPage {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTabsPage');
  }

}
