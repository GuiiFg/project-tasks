import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { TaskListFormComponent } from './pages/tasks/task-list-form/task-list-form.component';
import { CreateAccontComponent } from './pages/create-accont/create-accont.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: TaskListFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: TaskListFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CreateAccontComponent },
  { path: 'aboutUs', component: AboutUsComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
