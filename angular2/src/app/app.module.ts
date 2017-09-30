import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app.routing.module';

import { LoginBasicComponent } from './login-basic/login-basic.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { HomeComponent } from './home/home.component';

import { BlogService } from './services/blog.service';
import { AuthService } from './services/auth.service';
import { RestConfig } from './services/rest-config';

@NgModule({
  declarations: [
    AppComponent,
    LoginBasicComponent,
    LoginFormsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, BlogService, RestConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
