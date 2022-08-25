import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../shared/task-model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasklist: TaskModel[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasklist = this.taskService.getAll();
  }

}
