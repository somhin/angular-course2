import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponentModule } from '../app/forms/forms.module';
import { AjaxModule } from './ajax/ajax.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsComponentModule,
    AjaxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
