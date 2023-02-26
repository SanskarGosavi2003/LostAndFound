import { LoginService } from './login.service';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestssearchComponent } from './requestssearch/requestssearch.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    RequestssearchComponent
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
