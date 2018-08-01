import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  @Output() subscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.name = 'Williams';
    this.username = 'wdleonm';
    this.avatar = 'http://s.vida20.com/wp-content/uploads/2009/08/q256_avatar.png';

    setTimeout(() => this.subscribed.emit(true), 3000)
    setTimeout(() => this.name='Cody', 3000)

  }
  changing(event: any){
    // console.log(event.target.value);
    this.username = event.target.value;
  }
}
