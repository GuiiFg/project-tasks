import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../shared/task-model';
import { TaskService } from '../shared/task.service';

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
