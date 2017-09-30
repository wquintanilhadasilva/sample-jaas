import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { LoginBasicComponent } from './login-basic/login-basic.component';

const appRoutes: Routes = [
  { path: 'basic', component: LoginBasicComponent },
  { path: 'forms', component: LoginFormsComponent },
  { path: 'home', component: HomeComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
