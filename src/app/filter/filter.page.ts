import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  data: any;
  img: any;

  constructor(
    public photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.img;
        console.log(this.data);
      }

    //   this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.data = this.router.getCurrentNavigation().extras.state.img;
    //     console.log(this.data);
    //   }
    // });
  }

  ngOnInit() {
    //this.photoService.loadOneSaved(this.data);
  }
}
