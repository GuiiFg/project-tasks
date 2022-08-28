import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks/task.service';
import { TaskModel } from '../../../models/tasks/task-model';

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
    const result = await this.taskService.getAll();
    if(result){
      this.tasklist =  result;
    }
  }

  async updateList(){
    const result = await this.taskService.getAll();
    if(result){
      this.tasklist = result;
    }
  }
}
