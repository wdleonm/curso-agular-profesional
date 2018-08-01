import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css']
})

export class TitleComponent implements OnInit{
  public name = 'Williams' ;
  // public edad: number;
  // public edades: number[];
  public moreInformation= false;
  public isAvailable = false;
  public category: string[]; // mobile, web other
  public topics: string[];
  public launchDate: Date;
  public price = 25;
  public seconds = 9720;

  @Input() subscribed: boolean;

  // public css_classes: string[] = ['active', 'shadow'];
  constructor() {}

  ngOnInit(){
    this.category = ['web'];
    this.name = 'Williams' ;
    this.launchDate = new Date(2018,11,25);
    this.topics = [
      'Fundamnetos del Framework',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding'
    ];

     // this.edad = 45 ;
    // setTimeout(() => this.name = 'Williams Daniel', 3000)
    // setTimeout(() => this.isAvailable = false, 3000)
    // setTimeout(() => this.css_classes = ['shadow'], 3000)
    // setTimeout(() => this.moreInformation = true, 3000)
  }

  // getEdadNombre(): string {
  //   return `${this.name} : ${this.edad}`;
  // }

  toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }

}
