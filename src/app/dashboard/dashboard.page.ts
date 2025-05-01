import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardService } from './dashboard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    HttpClientModule,
  FooterComponent
    //FontAwesomeModule

  ]
})
export class DashboardPage implements OnInit {
  totalVehicles: number = 0;
  totalDrivers: number = 0;
  totalTechnicians: number = 0;
  totalAteliers: number = 0;

  /*faBus = faBus;
  faCar = faCar;
  faUserTie = faUserTie;
  faTools = faTools;
  faUserGear = faUserGear;*/

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadTotalVehicules();
    this.loadTotalDrivers();
    this.loadTotalTechnicians();
    this.loadTotalAteliers();
  }

  loadTotalVehicules() {
    this.dashboardService.getTotalVehicule().subscribe({
      next: (response) => {
        this.totalVehicles = response.total;
      },
      error: (error) => {
        console.error('Error while load number of vehicule:', error);
      }
    })
  }

  loadTotalDrivers() {
    this.dashboardService.getTotalChauffeur().subscribe({
      next: (response) => {
        this.totalDrivers = response.total;
      },
      error: (error) => {
        console.error('Error while load number of Drivers:', error);
      }
    })
  }

  loadTotalTechnicians() {
    this.dashboardService.getTotalTechnicien().subscribe({
      next: (response) => {
        this.totalTechnicians = response.total;
      },
      error: (error) => {
        console.error('Error while load number of Technicians:', error);
      }
    })
  }

  loadTotalAteliers() {
    this.dashboardService.getTotalAtelier().subscribe({
      next: (response) => {
        this.totalAteliers = response.total;
      },
      error: (error) => {
        console.error('Error while load number of Workshops:', error);
      }
    })
  }


}
