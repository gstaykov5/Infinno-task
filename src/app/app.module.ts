import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { CalculateService } from './core/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
