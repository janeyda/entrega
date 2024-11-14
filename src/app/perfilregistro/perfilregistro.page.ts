import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfilregistro',
  templateUrl: './perfilregistro.page.html',
  styleUrls: ['./perfilregistro.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilregistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
