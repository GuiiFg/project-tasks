import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../shared/task-model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task!: TaskModel;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.taskService.deleteTask(this.task.id)
  }

}
