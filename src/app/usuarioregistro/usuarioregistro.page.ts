import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-usuarioregistro',
  templateUrl: './usuarioregistro.page.html',
  styleUrls: ['./usuarioregistro.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UsuarioregistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
