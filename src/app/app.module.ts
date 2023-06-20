import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { AppsService } from './services/apps.service';
import { HttpClientModule } from '@angular/common/http';
import { AppCardComponent } from './app-card/app-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, GridComponent, AppCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [AppsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
