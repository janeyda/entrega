import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem, IonModal, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuariogestion',
  templateUrl: './usuariogestion.page.html',
  styleUrls: ['./usuariogestion.page.scss'],
  standalone: true,
  imports: [IonButtons, IonModal, IonItem, IonLabel, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class UsuariogestionPage implements OnInit {
  isModalOpen = false;

 
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
 

  async confirmDelete() {
    this.setOpen(false); }
  //janeyda

  //constructor() { }

  ngOnInit() {
  }

}
