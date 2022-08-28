import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../../models/tasks/task-model';
import { TaskService } from '../../../services/tasks/task.service';
import { TaskListComponent } from '../task-list/task-list.component';

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
      console.log("entrei aki")
      const oldtask = this.taskService.getById(parseInt(id));
      if (oldtask != undefined){
        this.task = oldtask
        this.title = 'Alterando tarefa'
      }
    }
  }

  onSubmit(){
    this.taskService.saveTask(this.task)
    this.router.navigate(['/1'])
  }

}
