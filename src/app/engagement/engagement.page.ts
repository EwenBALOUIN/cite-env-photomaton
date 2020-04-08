import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.page.html',
  styleUrls: ['./engagement.page.scss'],
})
export class EngagementPage implements OnInit {
  isIndeterminate:boolean;
  list_engagement = []
  data: any;

  constructor(private router: Router) {
    this.list_engagement = [
    {value: "Boire l'eau du robinet",
    isChecked:false},
    {value: "Recycler mes déchets",
    isChecked:false},
    {value: "Changer les vieilles ampoules",
    isChecked:false},
    {value: "Utiliser les transports communs",
    isChecked:false},
    {value: "Je ne prends pas d'engagement",
    isChecked:true}
    ]
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.img;
    }
  }

  ngOnInit() {}

  redirectToEmail(){
    let navigationExtras: NavigationExtras = {
      state: {
        img: this.data
      }
    };
    this.router.navigate(['email'], navigationExtras);
  }

  redirectToHome(){
    this.router.navigate(['']);
  }
}
