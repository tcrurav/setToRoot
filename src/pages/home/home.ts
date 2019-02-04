import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyTabsPage } from '../my-tabs/my-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTabs(){
    this.navCtrl.push(MyTabsPage);
  }
}
