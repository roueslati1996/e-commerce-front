import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class Module {}
