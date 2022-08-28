import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks/task.service';
import { TaskModel } from '../../../models/tasks/task-model';

@Component({
  selector: 'app-task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.css']
})
export class TaskListFormComponent implements OnInit {

  task: TaskModel = new TaskModel();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      const oldtask = this.taskService.getById(parseInt(id));
      if (oldtask != undefined){
        this.task = oldtask
        this.title = 'Alterando tarefa'
      }
    }
  }

  onSubmit(){
    this.taskService.saveTask(this.task)
    this.router.navigate([''])
  }

}
