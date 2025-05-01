import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order-stat',
  templateUrl: './order-stat.page.html',
  styleUrls: ['./order-stat.page.scss'],
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class OrderStatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
