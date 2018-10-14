import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Chart } from 'chart.js';
import { HistoricalTeamService } from '../../app/services/historicalTeam.service';
import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  @ViewChild('goals') barCanvasGoals;
  @ViewChild('yellowCards') barCanvasYellowCards;
  @ViewChild('redCards') barCanvasRedCards;
  private barChart: any;
  private hasCharts: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private viewController: ViewController, private historicalTeamService: HistoricalTeamService) {
  }

  ngOnInit() {
    this.historicalTeamService.getPlayerHistorials(this.userService.getUserLogged().id).subscribe(
      response => {
        let historials = response;
        if (historials.length > 0) {
          this.hasCharts = true;
          this.barChart = new Chart(this.barCanvasGoals.nativeElement, {
            type: 'bar',
            data: {
              labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
              datasets: [{
                label: 'Nº Goles',
                data: [historials[0] == null ? 0 : historials[0].jugador.goles, historials[1] == null ? 0 : historials[1].jugador.goles, historials[3] == null ? 0 : historials[2].jugador.goles, historials[3] == null ? 0 : historials[3].jugador.goles],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              legend: {
                labels: {
                  fontColor: 'white'
                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
              }
            }
          });

          this.barChart = new Chart(this.barCanvasYellowCards.nativeElement, {
            type: 'bar',
            data: {
              labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
              datasets: [{
                label: 'Nº T.Amarillas',
                data: [historials[0] == null ? 0 : historials[0].jugador.tarjetasAmarillas, historials[1] == null ? 0 : historials[1].jugador.tarjetasAmarillas, historials[2] == null ? 0 : historials[2].jugador.tarjetasAmarillas, historials[3] == null ? 0 : historials[3].jugador.tarjetasAmarillas],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              legend: {
                labels: {
                  fontColor: 'white'
                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
              }
            }
          });

          this.barChart = new Chart(this.barCanvasRedCards.nativeElement, {
            type: 'bar',
            data: {
              labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
              datasets: [{
                label: 'Nº T.Rojas',
                data: [historials[0] == null ? 0 : historials[0].jugador.tarjetasRojas, historials[1] == null ? 0 : historials[1].jugador.tarjetasRojas, historials[2] == null ? 0 : historials[2].jugador.tarjetasRojas, historials[3] == null ? 0 : historials[3].jugador.tarjetasRojas],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              legend: {
                labels: {
                  fontColor: 'white'
                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'white'
                  }
                }],
              }
            }
          });
        } else {
          this.hasCharts = false;
        }
      }//response
    );
  }

  closeModal() {
    this.viewController.dismiss();
  }

}
