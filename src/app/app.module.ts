import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { TaskListItemComponent } from './pages/tasks/task-list-item/task-list-item.component';
import { TaskListFormComponent } from './pages/tasks/task-list-form/task-list-form.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
