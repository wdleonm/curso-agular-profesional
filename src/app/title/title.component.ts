import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css']
})

export class TitleComponent implements OnInit{
  public name = 'Williams' ;
  public edad: number;
  public edades: number[];
  public moreInformation= false;
  public isAvailable = true;

  public topics: string[];

  // public css_classes: string[] = ['active', 'shadow'];
  constructor() {}

  ngOnInit(){
    this.name = 'Williams' ;
    this.topics= [
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

  getEdadNombre(): string {
    return `${this.name} : ${this.edad}`;
  }

}
