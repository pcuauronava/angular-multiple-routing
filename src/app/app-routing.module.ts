import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./views/auth/register/register.module').then(m => m.RegisterModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {},
  {},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
