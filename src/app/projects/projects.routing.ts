import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const ProjectsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'projects',
      component: ProjectsComponent
    }]
  }
  // {
  //   path: 'projects',
  //   component: ProjectsComponent
  // }
];
