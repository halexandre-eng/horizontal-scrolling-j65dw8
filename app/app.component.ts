/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';

//https://stackoverflow.com/questions/48955095/horizontal-scroll-using-buttons-on-angular2

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  scrollItems: any[];

  @ViewChild('widgetsContent') widgetsContent: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.scrollItems = [
      'Herb Costales',
      'Gloria Cherie',
      'Paraskeva Goran',
      'Paskal',
      'Nadia',
      'Lyudmila',
      'Mihaela',
      'Snezhana',
      'Katya',
      'Ekaterina',
      'Milena',
      'Nedyalka',
      'Nadejda',
      'Hristina',
      'Denica',
      'Gabriela',
      'Kuzman',
      'Roza',
      'Genko',
      'Lyubomir',
      'Tereza',
      'Eva',
      'Zara',
      'Mila',
      'Veronika',
      'Blaga',
      'Ilarion',
      'Sofia',
      'Ignat'

    ];
  }

  left(){
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  right(){
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }
  
}
