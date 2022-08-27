import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetTaskResponse } from 'src/app/models/tasks/get-task-response';
import { ResponseLogin } from 'src/app/models/users/response-login';
import { TaskModel } from '../../models/tasks/task-model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  urlApi : string = "https://localhost:7230/api/Tasks"

  tasks: TaskModel[] = [
    {id_task_int:1, description_str: 'Tarefa 1', done_bool:false},
    {id_task_int:2, description_str: 'Tarefa 2', done_bool:true},
    {id_task_int:3, description_str: 'Tarefa 3', done_bool:false},
    {id_task_int:4, description_str: 'Tarefa 4', done_bool:true},
    {id_task_int:5, description_str: 'Tarefa 5', done_bool:false},
    {id_task_int:6, description_str: 'Tarefa 6', done_bool:false},
    {id_task_int:7, description_str: 'Tarefa 7', done_bool:false},
  ]

  constructor(
    private authService : AuthService,
    private http : HttpClient
  ) { }
  
  getAll() : Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(this.urlApi + "/" + this.authService.currentUser.id)
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id_task_int == id);
    return task;
  }

  saveTask(task: TaskModel){
    if(task.id_task_int){
      const taskToUpdate = this.getById(task.id_task_int);
      if(taskToUpdate != undefined){
        taskToUpdate.description_str = task.description_str;
        taskToUpdate.done_bool = task.done_bool;
      }
    }else{
      task.done_bool = false;
      if(this.tasks.length != 0){
        const lastId = this.tasks[this.tasks.length - 1].id_task_int
        task.id_task_int = lastId + 1;
      }else{
        task.id_task_int = 1
      }
      this.tasks.push(task);
    }
  }

  deleteTask(id: number){
    const taskIndex = this.tasks.findIndex((value) => value.id_task_int == id);
    this.tasks.splice(taskIndex, 1);
  }
}
