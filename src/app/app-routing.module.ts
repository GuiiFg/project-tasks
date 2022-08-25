import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { TaskListFormComponent } from './pages/tasks/task-list-form/task-list-form.component';


const routes: Routes = [
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: TaskListFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: TaskListFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
