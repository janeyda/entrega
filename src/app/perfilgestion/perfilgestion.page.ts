import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonModal, IonButton, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfilgestion',
  templateUrl: './perfilgestion.page.html',
  styleUrls: ['./perfilgestion.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton, IonModal, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class PerfilgestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isModalOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }
   
  
    async confirmDelete() {
      this.setOpen(false); }
    //janeyda
}
