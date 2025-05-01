import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardService } from '../dashboard/dashboard.service';
import { Chart, ChartModule } from 'angular-highcharts';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-vehicule-stat',
  templateUrl: './vehicule-stat.page.html',
  styleUrls: ['./vehicule-stat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartModule
  ]
})
export class VehiculeStatPage implements OnInit {



 chart!: Chart;
 chartOptions: Highcharts.Options = {};


  constructor(private statService: StatService) { }
  dispoService: number = 0;
  dispoMaint: number = 0;
  dispoPanne: number = 0;

  ngOnInit(): void {
    this.loadDisponibilites();
  }

  loadDisponibilites() {
    // On attend les 3 appels à l’API avant de créer le graphique
    Promise.all([
      this.statService.getDispoService().toPromise(),
      this.statService.getDispoMaint().toPromise(),
      this.statService.getDispoPanne().toPromise()
    ])
      .then(([resService, resMaint, resPanne]) => {
        this.dispoService = parseFloat(resService.disponibilite.replace('%', ''));
        this.dispoMaint = parseFloat(resMaint.disponibilite.replace('%', ''));
        this.dispoPanne = parseFloat(resPanne.disponibilite.replace('%', ''));

        this.createChart();
      })
      .catch(error => {
        console.error('Erreur lors du chargement des disponibilités :', error);
      });
  }

  createChart() {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 325
      },
      title: {
        text: 'Vehicles Disponibilities'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              name: 'En Service',
              y: this.dispoService,
              color: '#28a745'
            },
            {
              name: 'En Maintenance',
              y: this.dispoMaint,
              color: '#ffc107'
            },
            {
              name: 'En Panne',
              y: this.dispoPanne,
              color: '#dc3545'
            }
          ]
        }
      ],
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          size: '75%',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black',
              fontSize: '10.5px'
            }
          },
          showInLegend: false
        }
      },
      credits: {
        enabled: false
      }
    });
  }

  
}



