import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetTaskResponse } from 'src/app/models/tasks/get-task-response';
import { RequestCreateTask } from 'src/app/models/tasks/request-create-task';
import { RequestUpdateTask } from 'src/app/models/tasks/request-update-task';
import { ResponseLogin } from 'src/app/models/users/response-login';
import { TaskListComponent } from 'src/app/pages/tasks/task-list/task-list.component';
import { TaskModel } from '../../models/tasks/task-model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  urlApi : string = "https://localhost:7230/api/Tasks"

  tasks: TaskModel[] = [];

  constructor(
    private authService : AuthService,
    private http : HttpClient
  ) { }
  
  getAll(){
    console.log("entrei")
    return this.http.get<TaskModel[]>(this.urlApi + "/" + this.authService.currentUser.id).toPromise()
  }

  taskUpdate(request : RequestUpdateTask){
    return this.http.put(this.urlApi + "/updateTaks", request).toPromise()
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id_task_int == id);
    return task;
  }

  async saveTask(task: TaskModel){

    const result = await this.getAll();
    if(result){
      this.tasks = result;
    }

    console.log(this.tasks)

    if(task.id_task_int){
      const taskToUpdate = this.getById(task.id_task_int);
      if(taskToUpdate != undefined){

        let request = new RequestUpdateTask;
        request.descreption = task.description_str;
        request.done = task.done_bool;
        request.task_id = taskToUpdate.id_task_int;

        const result = await this.taskUpdate(request)
      }
    }else{
      task.done_bool = false;
      
      let request = new RequestCreateTask;
      request.description = task.description_str;
      request.done = task.done_bool; 
      request.id_user = this.authService.currentUser.id

      const result = await this.taskCreate(request)
    }
  }

  taskCreate(request : RequestCreateTask){
    return this.http.post(this.urlApi + "/createTask", request).toPromise()
  }

  deleteTask(id: number){
    return  this.http.delete(this.urlApi + "/delete/" + id).toPromise()
  }
}
