import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { DetailPostComponent } from './components/detail_post/detail_post.component';
import { HomeComponent } from './components/home/home.component';
import { Project1Component } from './components/work/project-1/project-1.component';
import { Project2Component } from './components/work/project-2/project-2.component';
import { Project3Component } from './components/work/project-3/project-3.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { StyleguideComponent } from './components/styleguide/styleguide.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogComponent,
    DetailPostComponent,
    HomeComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    ProjectsComponent,
    SobreComponent,
    StyleguideComponent,
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

