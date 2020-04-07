import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { TerapiaComponent } from './pages/terapia/terapia/terapia.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { BriotextComponent } from './pages/briotext/briotext/briotext.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { LoginComponent } from './pages/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    TerapiaComponent,
    HomeComponent,
    LayoutComponent,
    LayoutComponent,
    BriotextComponent,
    SobreComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [
    {'useValue':'/','provide':'APP_BASE_HREF'},
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }

