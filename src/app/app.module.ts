import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoListItemComponent } from './crypto-list-item/crypto-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    CryptoListComponent,
    CryptoListItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
