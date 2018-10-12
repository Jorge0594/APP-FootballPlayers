import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import { MinuteService } from '../../app/services/minute.service';
import { MatchService } from '../../app/services/match.service';

import { MapsPage } from '../../pages/maps/maps';
import { IncidenceService } from '../../app/services/inicidence.service';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  @ViewChild(Slides)slide: Slides;
  private status: string;
  private match: any;
  private statSelected: string;
  private incidences: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private minuteService: MinuteService, private matchService: MatchService, private modalController: ModalController, private inicidenceService:IncidenceService) {
    this.statSelected = "stats"
    this.status = this.navParams.get('matchStatus');

    if(this.status == "disputado" || this.status == "acta pendiente"){
      this.minuteService.getMinuteByMatchId(this.navParams.get('matchId')).subscribe(
        minute => {
          this.match = minute;
          this.inicidenceService.getMatchIncidences(this.match.idPartido).subscribe(
            response => {
              this.incidences = response;
            }
          );
        }
      );
    } else {
      this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(
        match => this.match = match
      )
    }
  }

  ionViewDidLoad() {
    this.slide.lockSwipes(true);
  }

  selectStat(stat:string){
    this.statSelected = stat;
  }

  localPlayer(id:string){
    let exist = false;
    console.log(id);
    for(let elem of this.match.convocadosLocal){
      console.log("ID:" + elem.id);
      if(elem.id == id){
        console.log("Enter here with id: " + id);
        exist = true;
      } 
    }
    return exist;
  }

  viewGoogleMaps(){
    let mapModal;
    if(this.match.estadio){
      mapModal = this.modalController.create(MapsPage, {latitude: this.match.estadio.latitud, longitude: this.match.estadio.longitud});
    } else {
      mapModal = this.modalController.create(MapsPage, {latitude: undefined, longitude: undefined});
    }
    
    mapModal.present();
  }

}
