import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonModal, IonButtons, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rolgestion',
  templateUrl: './rolgestion.page.html',
  styleUrls: ['./rolgestion.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButtons, IonModal, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
  
  


})
export class RolgestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  //janeyda
    isModalOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }
   
  
    async confirmDelete() {
      this.setOpen(false); }
    //janeyda
  }

