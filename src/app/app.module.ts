import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';

import { SecondsToTimeFormat } from './pipes/SecondsToTimeFormat';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullScreenComponent,
    UserCardComponent,
    SecondsToTimeFormat
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
