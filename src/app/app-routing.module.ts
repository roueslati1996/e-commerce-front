import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/routes.module').then((m) => m.Module),
  },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/routes.module').then((m) => m.Module),
  // },

  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/routes.module').then((m) => m.Module),
  // },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
