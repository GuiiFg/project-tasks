import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks/task.service';
import { TaskModel } from '../../../models/tasks/task-model';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task!: TaskModel;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.taskService.deleteTarefa(this.task.id_task_int)
  }

  aterarItem(){
    console.log("editar")
    this.router.navigate(['/edit/' + this.task.id_task_int])
  }

}
