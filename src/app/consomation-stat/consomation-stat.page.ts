import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NumparcService } from '../services/numparc.service';
import { StatService } from '../services/stat.service';
import { MatSnackBar,MatSnackBarModule  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consomation-stat',
  templateUrl: './consomation-stat.page.html',
  styleUrls: ['./consomation-stat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatOptionModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MatSnackBarModule
  ]
})
export class ConsomationStatPage implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  numparc: any = undefined;
  annee: any = undefined;

  //numparc: string = '';

  showChart: boolean = false;
  numparcList: number[] = [];

  constructor(private statService: StatService,
    private numparcService: NumparcService,
    private snackBar: MatSnackBar

  ) {
    this.getNumparc();
  }
  ngOnInit(): void {
    this.fetchConsomation();

  }

  getNumparc() {
    this.numparcService.fetchAllNumparc().subscribe({
      next: (data) => {
        console.log('List of numparc received:', data);  // Vérifiez si les données sont bien récupérées
        //this.numparcList = data;
        this.numparcList = data.map((item: any) => item.numparc);
      },
      error: (err) => {
        console.error('Error loading numparcs', err);
      }
    });
  }
  fetchConsomation() {
    /*if (!this.numparc) {
      alert('Veuillez entrer un numéro de parc');
      return;
    }*/

    this.statService.getTotalConsomationByVehiculeAndMonth(this.numparc).subscribe({
      next: (data) => {
        const categories = data.map(d => `${d.mois}/${d.annee}`);
        const seriesData = data.map(d => d.total_consommation);

        this.chartOptions = {
          chart: {
            type: 'line'
          },
          title: {
            text: `Consommation de carburant pour ${this.numparc}`
          },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
              text: 'Total Consommation (Litres)'
            }
          },
          series: [{
            name: 'Consommation',
            data: seriesData,
            type: 'line'
          }]
        };

        this.showChart = true;
      },
      error: (err) => {
        //console.error(err);
        this.snackBar.open('vehicule doesnt exist', 'close', { duration: 8000 });

        // alert('Erreur lors  la récupération des données');
      }
    });
  }

}
