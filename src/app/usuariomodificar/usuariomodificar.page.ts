import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-usuariomodificar',
  templateUrl: './usuariomodificar.page.html',
  styleUrls: ['./usuariomodificar.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UsuariomodificarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
