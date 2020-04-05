import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public photoService: PhotoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public GetImgNavToFilter(img: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        img: img
      }
    };
    this.router.navigate(['filter'], navigationExtras);
  }
}
