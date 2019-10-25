import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    FormsModule
  ],
  declarations: [
    ProjectsComponent
  ]
})

export class ProjectsModule {}
