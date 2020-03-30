import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { Project2Component } from './components/work/project-2/project-2.component';
import { DetailPostComponent } from './components/detail_post/detail_post.component';
import { Project3Component } from './components/work/project-3/project-3.component';
import { StyleguideComponent } from './components/styleguide/styleguide.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { Project1Component } from './components/work/project-1/project-1.component';
import { SobreComponent } from './components/sobre/sobre.component';

const appRoutes: Routes = [
	{ path: 'projects', component: ProjectsComponent  },
	{ path: '', component: HomeComponent  },
	{ path: 'work_project_2', component: Project2Component  },
	{ path: 'detail_post', component: DetailPostComponent  },
	{ path: 'work_project_3', component: Project3Component  },
	{ path: 'styleguide', component: StyleguideComponent  },
	{ path: 'blog', component: BlogComponent  },
	{ path: 'about', component: AboutComponent  },
	{ path: 'work_project_1', component: Project1Component  },
	{ path: 'sobre', component: SobreComponent  },
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

