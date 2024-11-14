import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rolregistro',
  templateUrl: './rolregistro.page.html',
  styleUrls: ['./rolregistro.page.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class RolregistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
