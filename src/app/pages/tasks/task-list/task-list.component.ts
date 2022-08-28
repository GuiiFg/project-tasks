import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TaskModel } from '../../../models/tasks/task-model';
import { TaskService } from '../../../services/tasks/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasklist: TaskModel[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
    ) { }

  async ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          console.log('navegação terminou');
      }
    });
    
    const result = await this.taskService.getAll();
    if(result){
      this.tasklist = result;
    }
  }

  async updateList(){
    const result = await this.taskService.getAll();
    if(result){
      this.tasklist = result;
    }
  }
}
