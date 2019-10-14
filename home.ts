
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public url :string='http://localhost/api';
  public recebeDado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.http.get(this.url + '/inserir.php')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.recebeDado = data;

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


}
