import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonItem } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rolmodificar',
  templateUrl: './rolmodificar.page.html',
  styleUrls: ['./rolmodificar.page.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonInput, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class RolmodificarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
