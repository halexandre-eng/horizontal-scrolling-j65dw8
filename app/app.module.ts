import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ClarityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
