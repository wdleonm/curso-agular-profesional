import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public userSubscribed = false;

  subscriptionChanged(ev: any) {
    console.log('El usuario se subscribio');
    this.userSubscribed = ev;
  }
}
