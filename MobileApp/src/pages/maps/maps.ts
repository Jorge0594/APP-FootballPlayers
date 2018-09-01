import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapElement;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  private map: any;
  private notMap: boolean;
  private destination: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController,
    private alertCtrl: AlertController, private geolocation: Geolocation) {
    this.notMap = false;
  }

  ionViewDidLoad() {
    if (this.navParams.get('latitude') == undefined || this.navParams.get('longitude') == undefined) {
      this.notMap = true;
    } else {
      this.destination = new google.maps.LatLng(this.navParams.get('longitude'), this.navParams.get('latitude'));
      this.initMap();
      this.startNavigating();
    }

  }

  initMap() {

    let mapOptions = {
      center: this.destination,
      zoom: 17,
      marker: this.destination,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      position: this.destination,
      map: this.map
    });

    marker.setMap(this.map);

  }

  startNavigating() {

    this.geolocation.getCurrentPosition().then((position)=>{
      
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
  
      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      let currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      directionsService.route({
          origin: currentLocation,
          destination: this.destination,
          travelMode: google.maps.TravelMode['DRIVING']
        },
        (res, status) => {
          
          if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
          } else {
            console.warn(status);
          }
  
        }
      );
    },
    error => console.error(error.message)
  );


  }

  currentLocation(): any {

  }

  closeModal() {
    this.viewController.dismiss();
  }

}
