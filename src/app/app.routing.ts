import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      }, {
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
      }, {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      }, {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      }, {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
      }, {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
      }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: './pages/pages.module#PagesModule'
    }]
  }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'home',
//     redirectTo: ''
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'add',
//     component: AddEpisodeComponent
//   },
//   {
//     path: 'categories',
//     component: CategoriesComponent
//   },
//   {
//     path: 'tags',
//     component: TagsComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   {
//     path: 'category/:slug',
//     component: PostsByCategoryComponent
//   },
//   {
//     path: 'tag/:slug',
//     component: PostsByTagComponent
//   },
//   {
//     path: ':slug',
//     component: PostComponent
//   }
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     BrowserModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//   ],
// })

// export class AppRoutingModule { }
