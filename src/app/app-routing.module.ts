import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { TerapiaComponent } from './pages/terapia/terapia/terapia.component';
import { BriotextComponent } from './pages/briotext/briotext/briotext.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { LoginComponent } from './pages/login/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'terapia',
    component: TerapiaComponent,
  },
  {
    path: 'briotext',
    component: BriotextComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

