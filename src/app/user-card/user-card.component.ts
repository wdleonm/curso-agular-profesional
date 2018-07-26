import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Williams';
    this.username = 'wdleonm';
    this.avatar = 'http://s.vida20.com/wp-content/uploads/2009/08/q256_avatar.png';
  }
  changing(event: any){
    // console.log(event.target.value);
    this.username = event.target.value;
  }
}
