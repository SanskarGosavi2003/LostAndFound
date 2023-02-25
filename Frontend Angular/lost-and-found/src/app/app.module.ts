import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from './card/card.component';
import { MatDialogModule } from "@angular/material/dialog";
import { PopupComponent } from "./popup/popup.component";
import { SearchTabComponent } from './search-tab/search-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PreviousLostComponent } from './previous-lost/previous-lost.component';
import { PreviousLostCardComponent } from './previous-lost-card/previous-lost-card.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardComponent,
    PopupComponent,
    SearchTabComponent,
    NavbarComponent,
    PreviousLostComponent,
    PreviousLostCardComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
