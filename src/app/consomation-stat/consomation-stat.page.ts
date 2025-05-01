import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-consomation-stat',
  templateUrl: './consomation-stat.page.html',
  styleUrls: ['./consomation-stat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ConsomationStatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
