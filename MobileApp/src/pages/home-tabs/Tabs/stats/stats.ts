import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HistoricalTeamService } from '../../../../app/services/historicalTeam.service';
import { UserService } from '../../../../app/services/user.service';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class TabStats {

  @ViewChild ('goals')barCanvas;
  @ViewChild ('points')barCanvasPoints;
  @ViewChild ('wins')barCanvasWins;
  @ViewChild ('concededGoals')barCanvasConcededGoals;
  @ViewChild ('ties')barCanvasTies;
  @ViewChild ('loses')barCanvasLoses;
  @ViewChild ('played')barCanvasPlayed;
  @ViewChild ('standing')barCanvasStanding;
  private barChart :any;
  private showHistorials: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private historicalTeamService: HistoricalTeamService, private userService: UserService) {
  }

  ionViewDidLoad() {
    this.historicalTeamService.getTeamHistorials(this.userService.getUserTeam().id).subscribe(
        response => {
            let historials = response;
            if(historials.length > 0){
                this.showHistorials = true;
                this.barChart = new Chart(this.barCanvas.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Goles',
                            data: [historials[0] == null ? 0 : historials[0].equipo.goles, historials[1] == null ? 0 : historials[1].equipo.goles, historials[2] == null ? 0 : historials[2].equipo.goles, historials[3] == null ? 0 : historials[3].equipo.goles],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasPoints.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Puntos',
                            data: [historials[0] == null ? 0 : historials[0].equipo.puntos, historials[1] == null ? 0 : historials[1].equipo.puntos, historials[2] == null ? 0 : historials[2].equipo.puntos, historials[3] == null ? 0 : historials[3].equipo.puntos],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasStanding.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Posición en la Clasificación',
                            data: [historials[0] == null ? 0 : historials[0].equipo.posicion, historials[1] == null ? 0 : historials[1].equipo.posicion, historials[2] == null ? 0 : historials[2].equipo.posicion, historials[3] == null ? 0 : historials[3].equipo.posicion],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasConcededGoals.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Goles en contra',
                            data: [historials[0] == null ? 0 : historials[0].equipo.golesEncajados, historials[1] == null ? 0 : historials[1].equipo.golesEncajados, historials[2] == null ? 0 : historials[2].equipo.golesEncajados, historials[3] == null ? 0 : historials[3].equipo.golesEncajados],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasWins.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Vistorias',
                            data: [historials[0] == null ? 0 : historials[0].equipo.partidosGanados, historials[1] == null ? 0 : historials[1].equipo.partidosGanados, historials[2] == null ? 0 : historials[2].equipo.partidosGanados, historials[3] == null ? 0 : historials[3].equipo.partidosGanados],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasTies.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Empates',
                            data: [historials[0] == null ? 0 : historials[0].equipo.partidosEmpatados, historials[1] == null ? 0 : historials[1].equipo.partidosEmpatados, historials[2] == null ? 0 : historials[2].equipo.partidosEmpatados, historials[3] == null ? 0 : historials[3].equipo.partidosEmpatados],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasLoses.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Derrotas',
                            data: [historials[0] == null ? 0 : historials[0].equipo.partidosPerdidos, historials[1] == null ? 0 : historials[1].equipo.partidosPerdidos, historials[2] == null ? 0 : historials[2].equipo.partidosPerdidos, historials[3] == null ? 0 : historials[3].equipo.partidosPerdidos],
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
                        legend:{
                            labels:{
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

                this.barChart = new Chart(this.barCanvasPlayed.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [historials[0] == null ? "-" : historials[0].temporada.nombre, historials[1] == null ? "-" : historials[1].temporada.nombre, historials[2] == null ? "-" : historials[2].temporada.nombre, historials[3] == null ? "-" : historials[3].temporada.nombre],
                        datasets: [{
                            label: 'Nº Partidos jugados',
                            data: [historials[0] == null ? 0 : historials[0].equipo.partidosJugados, historials[1] == null ? 0 : historials[1].equipo.partidosJugados, historials[2] == null ? 0 : historials[2].equipo.partidosJugados, historials[3] == null ? 0 : historials[3].equipo.partidosJugados],
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
                        legend:{
                            labels:{
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
            }//if
        }//response
    )
   
  }

}
