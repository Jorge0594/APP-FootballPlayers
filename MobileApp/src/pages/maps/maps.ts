import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

declare var google;
@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapElement;
  private map: any;
  private notMap: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController) {
    this.notMap = false;
    console.log(this.navParams.get('latitude') + " and " + this.navParams.get('longitude'));
  }

  ionViewDidLoad() {
    if(this.navParams.get('latitude') == undefined || this.navParams.get('longitude') == undefined){
      this.notMap = true;
    } else {
      this.initMap();
    }
    
  }

  initMap(){
    let latLng = new google.maps.LatLng(this.navParams.get('longitude'), this.navParams.get('latitude'));

    let mapOptions = {
      center: latLng,
      zoom: 20,
      marker: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  closeModal(){
    this.viewController.dismiss();
  }

}
