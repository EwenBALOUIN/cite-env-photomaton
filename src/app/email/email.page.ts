import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  data: any;
  disabled = true;

  constructor(private emailComposer: EmailComposer, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.img;
    }
   }

  ngOnInit() {
  }

  sendEmail(email_name: string) {
    try{
    this.emailComposer.isAvailable().then((available: boolean) => {
      if(available) {
        let email = {
          to: email_name,
          attachments: [
            this.data,
          ],
          subject: "Engagement cité de l'environnement",
          body: 'Voici votre photo',
          isHtml: true
        }
        this.emailComposer.open(email);
      }
    });
  }
  catch{}
  this.router.navigate(['']);
  }

  public change() {
    this.disabled = !this.disabled;
  }

  redirectToHome(){
    this.router.navigate(['']);
  }

  redirectToCgu(){
    this.router.navigate(['cgu']);
  }

}
