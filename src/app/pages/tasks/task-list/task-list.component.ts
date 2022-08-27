import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../../models/tasks/task-model';
import { TaskService } from '../../../services/tasks/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasklist: TaskModel[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe((tasks) => this.tasklist = tasks);
  }

}
